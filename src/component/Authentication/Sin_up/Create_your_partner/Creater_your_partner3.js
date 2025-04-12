import React, { useState, useRef, useContext } from "react";
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

let url = "https://sphinx-go.vercel.app/api/v1/vendor/join-with-us";
function Creater_your_partner3() {
  const ctx = useContext(AuthContext1);

  const setTimingOut = {
    enter: 400,
    exit: 1000,
  };
  const popupRef = useRef(null);
  // const [AddNewFilee, setAddNewFile] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [fileObject, setFileObject] = useState({});
  const [error, setError] = useState(null);




  const handleClosePopup = () => {
    setShowPopup(false);
    // navigate('/')
    // console.log(showPopup);
  };
  const onsumbitHandeler = async (e) => {
    e.preventDefault();
    const formDataa = new FormData();
    console.log("sumbitted");
    console.log(fileObject);
    const requiredKeys = [
      "business_registration_certificate",
      "hotel_license",
      "tax_registration_certificate_TIN",
    ];
    const hasAllKeys = requiredKeys.every((key) =>
      fileObject.hasOwnProperty(key)
    );
    if (!hasAllKeys) {
      console.log("you should upload all");
      setError(true);
    } else {
      console.log("succed");
      setError(false);
      ctx.sinUpFormData(fileObject);
      console.log(ctx.formData);

      formDataa.append("company_name", ctx.formData.company_name);
      formDataa.append("service_type", ctx.formData.service_type);
      formDataa.append("contact_email", ctx.formData.contact_email);
      formDataa.append("bussiness_breif", ctx.formData.bussiness_breif);
      formDataa.append("contact_phone", ctx.formData.contact_phone);
      formDataa.append("latitude", ctx.formData.latitude);
      formDataa.append("longitude", ctx.formData.longitude);

      // إضافة الملفات
      formDataa.append(
        "bussiness_registration_certificate",
        fileObject.business_registration_certificate
      );
      formDataa.append("hotel_license", fileObject.hotel_license);
      formDataa.append(
        "tax_registration_certificate_TIN",
        fileObject.tax_registration_certificate_TIN
      );

      const numberOfEntries = [...formDataa.entries()].length;

     if (numberOfEntries >= 10) {
          setShowPopup(true);
        }

      let count;
      for (let pair of formDataa.entries()) {
        if (pair[1] instanceof File) {
          count++;
          console.log(
            pair[0] +
              ": " +
              pair[1].name +
              ", " +
              pair[1].type +
              ", " +
              pair[1].size +
              " bytes"
          );
        } else {
          count++;
          console.log(pair[0] + ": " + pair[1]);
        }
      }
      console.log(count);

      if (count > 10) {
        setShowPopup(true);
      }
    }

    if (!error) {
      try {
        const response = await axios.post(url, formDataa, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept-Language": "en",
          },
        });
    
        console.log("Response:", response.message);
      } catch (error) {
        if (error.response) {
          // Problem with the response from the server
          console.error("Response error:", error.response.data);
          console.error("Status:", error.response.status);
        } else if (error.request) {
          // Problem with the request
          console.error("Request error:", error.request);
        } else {
          // Issue with setting up the request
          console.error("Error:", error.message);
        }

        setError(error.response.data.message)
      }
    }
    // console.log(fileObject, ctx.formData);
    // console.log(JSON.stringify(ctx.formData, null, 2));
    console.log("formmmmm",ctx.formData,fileObject);
  };

  const handleFileSelect = (fileName, file) => {
    let name;
    if (fileName === "Business Registration Certificate") {
      name = "business_registration_certificate";
    } else if (fileName === "Hotel License") {
      name = "hotel_license";
    } else if (fileName === "Tax Registration Certificate (TIN)") {
      name = "tax_registration_certificate_TIN";
    }
    ctx.sinUpFormData(fileObject);
   
    
    setFileObject((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    })); 
    console.log("formmmmm",ctx.formData,fileObject);
  };

  return (
    <AuthenticationWrapper>
      <form onSubmit={onsumbitHandeler} >
        <div className={style["mainInfo"]}>
          <div style={{ marginLeft: "60px" }}>
            <Tiltle
              title="Request to Join With Us"
              title_discription="Fill Our Form to let us know more about your business and approve your account"
            />
          </div>
          <ProgressSteps
         circle={true}
            pageNumber={3}
            count={3}
          />
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
        <div className="flex"> <Link to="/CreateAccount2">
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

      { showPopup?   <Transition
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
                messageImg={!error?messageImg:''}
                handleTogglePopup={handleClosePopup}
                title={!error?"Thanks For Fill Our Form":error}
                details={!error?" What next, Now our team will review your request and will contact you by email soon":""}
                
                btnCss={error?"whiteCssS":"whiteCssG"}
              />
            )}
          </Transition>:null}
          {/* {showPopup &&<PopupMessage  handleTogglePopup={handleTogglePopup}/> } */}
          {/* {showPopup && (
        <PopupMessage shown={showPopup} handleTogglePopup={handleTogglePopup} />
      )} */}
        </div>
      </form>
    </AuthenticationWrapper>
  );
}

export default Creater_your_partner3;
