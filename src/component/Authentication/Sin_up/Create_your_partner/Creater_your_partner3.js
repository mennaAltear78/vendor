import React, { useState, useRef, useContext, useEffect } from "react";
import Tiltle from "../../Tiltle";
import ProgressSteps from "./Create_account_items/ProgressSteps";
import Card from "../../regular_components/Card";
import Button from "../../regular_components/Button";
import AuthenticationFooter from "../../AuthenticationFooter/AuthenFooter";
import style from "./Creater_your_partner3.module.css";
import { Link, useNavigate } from "react-router-dom";
import AddNewFile from "./Create_account_items/AddNewFile";
import PopupMessage from "./Create_account_items/PopupMessage";
import { Transition } from "react-transition-group";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import AuthContext1 from "../../Context/Mian-Page-Context";
import axios from "axios";
import appData from "../../../../config/appData";
import messageImg from "../../../../Assets/message-sent-P4zHrKyEAE.svg";

function Creater_your_partner3() {
  const ctx = useContext(AuthContext1);
  const navigate = useNavigate();

  const setTimingOut = {
    enter: 400,
    exit: 1000,
  };
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [fileObject, setFileObject] = useState({});
  const [error, setError] = useState(null);
  const [formDataToSubmit, setFormDataToSubmit] = useState(null);

  useEffect(() => {
    const requiredFormFields = [
      "company_name",
      "service_type",
      "contact_email",
      "bussiness_breif",
      "contact_phone",
      "latitude",
      "longitude",
    ];
    const hasAllFormFields = requiredFormFields.every((key) => ctx.formData[key]);
    const requiredFileKeys = [
      "bussiness_registration_certificate",
      "hotel_license",
      "tax_registration_certificate_TIN",
    ];
    const hasAllFileKeys = requiredFileKeys.every((key) => fileObject[key]);

    if (!hasAllFormFields || !hasAllFileKeys) {
      console.log("Missing required fields or files");
      setError("Please upload all required files and fill all fields");
    } else {
      const formDataa = new FormData();
      formDataa.append("company_name", ctx.formData.company_name);
      formDataa.append("service_type", JSON.stringify(ctx.formData.service_type));
      formDataa.append("contact_email", ctx.formData.contact_email);
      formDataa.append("bussiness_breif", JSON.stringify(ctx.formData.bussiness_breif));
      formDataa.append("contact_phone", ctx.formData.contact_phone);
      formDataa.append("latitude", ctx.formData.latitude);
      formDataa.append("longitude", ctx.formData.longitude);

      formDataa.append(
        "bussiness_registration_certificate",
        fileObject.bussiness_registration_certificate
      );
      formDataa.append("hotel_license", fileObject.hotel_license);
      formDataa.append(
        "tax_registration_certificate_TIN",
        fileObject.tax_registration_certificate_TIN
      );

      setFormDataToSubmit(formDataa);
      setError(false);
      console.log("FormData prepared successfully");
    }
  }, [fileObject, ctx.formData]);

  const handleClosePopup = () => {
    setShowPopup(false);
    if (!error) {
      navigate("/"); // Navigate to home on success
    }
  };

  const onsumbitHandeler = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formDataToSubmit);
    if (!error && formDataToSubmit) {
      try {
        const response = await axios.post(
          "https://sphinx-go.vercel.app/api/v1/vendor/join-with-us",
          formDataToSubmit,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Accept-Language": "ar", 
            },
          }
        );
        console.log("Response:", response.data);
        setShowPopup(true); // Show success popup
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Submission failed");
        setShowPopup(true); // Show error popup
      }
    } else {
      setError("Please upload all required files and fill all fields");
      setShowPopup(true);
    }
  };

  const handleFileSelect = (fileName, file) => {
    let name;
    if (fileName === "Business Registration Certificate") {
      name = "bussiness_registration_certificate";
    } else if (fileName === "Hotel License") {
      name = "hotel_license";
    } else if (fileName === "Tax Registration Certificate (TIN)") {
      name = "tax_registration_certificate_TIN";
    }

    setFileObject((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));
    console.log("Selected file for", name, file); // Debug file selection
  };

  return (
    <AuthenticationWrapper>
      <form onSubmit={onsumbitHandeler}>
        <div className={style["mainInfo"]}>
          <div style={{ marginLeft: "60px" }}>
            <Tiltle
              title="Request to Join With Us"
              title_discription="Fill Our Form to let us know more about your business and approve your account"
            />
          </div>
          <ProgressSteps circle={true} pageNumber={3} count={3} />
          <Card cssCard="sin_in_Bigcard">
            {appData.fileList.map((file, index) => (
              <AddNewFile
                key={index}
                FileName={file.name}
                required={file.required}
                onFileSelect={handleFileSelect}
              />
            ))}

            <div className={style["btnsInfo"]}>
              <div className="flex">
                <Link to="/CreateAccount2">
                  <Button btnCss="whiteCssS" name="previous" />
                </Link>
                <Button btnCss="blueCssS" name="continue" />
              </div>
            </div>
            <AuthenticationFooter
              title="Have a account"
              link=" Sign in >>"
              title2="Need help? Check out our"
              title1="FAQ"
              title3="or reach out to us a"
              title4="hotelsupport@sphinx.com"
            />
          </Card>

          {showPopup && (
            <Transition
              in={showPopup}
              timeout={setTimingOut}
              mountOnEnter
              unmountOnExit
              nodeRef={popupRef}
            >
              {(state) => (
                <PopupMessage
                  popMessageCss="popup"
                  ref={popupRef}
                  shown={state}
                  messageImg={!error ? messageImg : ""}
                  handleTogglePopup={handleClosePopup}
                  title={!error ? "Thanks For Fill Our Form" : error}
                  details={
                    !error
                      ? "What next, Now our team will review your request and will contact you by email soon"
                      : ""
                  }
                  btnCss={error ? "whiteCssS" : "whiteCssG"}
                />
              )}
            </Transition>
          )}
        </div>
      </form>
    </AuthenticationWrapper>
  );
}

export default Creater_your_partner3;