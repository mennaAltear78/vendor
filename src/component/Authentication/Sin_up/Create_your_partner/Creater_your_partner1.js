import { useContext, useRef, useState } from "react";
import Tiltle from "../../Tiltle";
import ProgressSteps from "./Create_account_items/ProgressSteps";
import Card from "../../regular_components/Card";
import TitleCars from "./Create_account_items/TitleCars";
import TextField from "../../regular_components/TextField";
import Button from "../../regular_components/Button";
import AuthenticationFooter from "../../AuthenticationFooter/AuthenFooter";
import style from "./Creater_your_partner1.module.css";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../../../Assets/buildings-2.svg";

import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import AuthContext1 from "../../Context/Mian-Page-Context";
import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import CustomHook from "./Create_account_items/CustomHook";
import { AuthContext } from "../../Context/auth-context";
import InputField from "../../../Main_dashboard/CreateYourVendor/common/InputField";
function Creater_your_partner1() {
  //FocusHandling
  const {
    IsError: IsErrorName, //i will take those
    // value: enteredName,
    blurHander: onbluerNameHnadeler, //i will play with those
    inputChange: NameChangeHandeler,
  } = CustomHook();

  const { isRequest, setRequest } = useContext(AuthContext);

  //useContext
  const ctx = useContext(AuthContext1);

  //navigate for redirecting to other page
  const navigate = useNavigate();

  //useRef For Handling  form
  const formRef = useRef();

  //UseState SetErrors
  const [errors, setErrors] = useState({
    companyName: null,
    serviceType: null,
    email: null,
    phone: null,
    businessBrief: null,
  });

  //useState for Phone
  const [phone, setPhone] = useState("");

  const phoneUtil = PhoneNumberUtil.getInstance();

  //check phone validation
  const validatePhoneNumber = (phoneNumber) => {
    try {
      const number = phoneUtil.parse(phoneNumber);
      return phoneUtil.isValidNumber(number)
        ? phoneUtil.format(number, PhoneNumberFormat.E164)
        : null;
    } catch {
      return null;
    }
  };

  const firstFormSumbitHandeler = (e) => {
    e.preventDefault();

    //handling the what inside the form and putting it inside object so we can handle it
    const formData = new FormData(formRef.current);
    const dataObject = Object.fromEntries(formData);
    console.log(dataObject);

    //intialize object will contain all valied data
    let newErrors = {};
    let validData = {};

    //1) check companyName
    const companyName = dataObject.company_name?.trim();
    console.log("company", dataObject.company_name, companyName);

    if (
      !companyName ||
      /^\d+$/.test(companyName) ||
      companyName.length < 3 ||
      companyName.length > 50
    ) {
      newErrors.companyName =
        "Company name must be between 3 and 50 characters and cannot be a number.";
    } else {
      validData.company_name = companyName;
    }

    //2) service type
    const arabicPattern = /[\u0600-\u06FF]/;
    const englishPattern = /[a-zA-Z]/;

    const serviceType = dataObject.service_type?.trim();

    if (!serviceType) {
      newErrors.serviceType = "Service type is required.";
    } else if (serviceType === "Hotels" || serviceType === "Tours") {
      validData.service_type = { en: serviceType };
    } else if (serviceType === "فندق" || serviceType === "رحلة") {
      validData.service_type = { ar: serviceType };
    } else {
      newErrors.serviceType =
        "Service type must be 'Hotels', 'Tours', 'فندق', or 'رحلة'.";
    }

    //business Brief
    const bussiness_breif_check = dataObject.bussiness_breif?.trim();
    let bussiness_breif = {};
    console.log(bussiness_breif_check);

    if (
      !bussiness_breif_check ||
      bussiness_breif_check.length < 26 ||
      bussiness_breif_check.length > 500
    ) {
      newErrors.businessBrief =
        "Business brief must be between 26 and 500 characters.";
    } else {
      if (arabicPattern.test(bussiness_breif_check)) {
        bussiness_breif = { ar: bussiness_breif_check };
      } else if (englishPattern.test(bussiness_breif_check)) {
        bussiness_breif = { en: bussiness_breif_check };
      } else {
        bussiness_breif = { lang: "Unknown Language" };
      }
      // newErrors.businessBrief = null;
      validData.bussiness_breif = bussiness_breif;
    }

    //contact_phone
    const phoneNumber = validatePhoneNumber(dataObject.contact_phone?.trim());
    if (!phoneNumber) {
      newErrors.phone = "Invalid phone number format.";
    } else {
      validData.contact_phone = phoneNumber;
    }
    //email

    const email = dataObject.contact_email?.trim(); // Ensure it's a string and remove spaces

    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      console.log("Email is required.");
      newErrors.email = "Email is required.";
    } else if (email.length < 8) {
      newErrors.email = "Email must be at least 8 characters long.";
    } else if (email.length > 40) {
      newErrors.email = "Email must not exceed 40 characters.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    } else {
      validData.contact_email = email;
    }
    setErrors(newErrors);
    console.log(newErrors);
    console.log("data", validData);

    if (Object.keys(newErrors).length === 0) {
      ctx.sinUpFormData(validData);
      navigate("/CreateAccount2");
    }
  };
  const requestHandler = () => {
    console.log("helol");

    setRequest(false);
    localStorage.setItem("request", JSON.stringify(false));
  };

  return (
    <AuthenticationWrapper>
      <form
        ref={formRef}
        onSubmit={firstFormSumbitHandeler}
        className="sm:w-[540px] w-[350px] ml-[10px]  ms:ml-0 "
      >
        <div className="sm:mt-[120px] ">
          <div className="sm:ml-[40px]">
            <Tiltle
              title="Request to Join With Us"
              title_discription="Fill Our Form to let us know more about your business and approve your account"
            />
          </div>
          <ProgressSteps pageNumber={1} count={3} circle={true} />
          <Card cssCard="sin_in_Bigcard">
            <TitleCars name="Company information" icon={icon} />
            <div className="sm:flex gap-5 ">
              <div>
                {/* <TextField
                  IsError={IsErrorName}
                  label="Company Name"
                  Intext="Name"
                  textfild="textBoxSmall"
                  name="company_name"
                  onblurHandeler={onbluerNameHnadeler}
                  OnchangeHnadeler={NameChangeHandeler}
                /> */}
                <InputField
                  editt={false}
                  label="Company Name"
                  name="company_name"
                  placeholder="Name"
                  className="w-full"
                />
                {errors.companyName && (
                  <p className={'text-[red] text-[16px] mt-2 mb-[-11px]'}>{errors.companyName}</p>
                )}

                <InputField
                  editt={false}
                  label="Company Email"
                  name="contact_email"
                  placeholder="ex.gmail.com"
                  className="w-full"
                />
                {errors.email && (
                  <p className={'text-[red] text-[16px] mt-2 mb-[-11px]'}>{errors.email}</p>
                )}
              </div>
              <div>
                <InputField
                  editt={false}
                  label="Choose Service"
                  name="service_type"
                  placeholder="choose Form"
                  className="sm:w-[80%] w-full"
                />
                {errors.serviceType && (
                  <p className={'text-[red] text-[16px] mt-2 mb-[-11px]'}>{errors.serviceType}</p>
                )}

                <div className="sm:mt-[10px] ">
                  <label className="text-[17px]">Contact Phone</label>
                  <PhoneInput
                    inputProps={{
                      placeholder: "Company official phone",
                      name: "contact_phone",
                      id: "contact_phone",
                      className:
                        "sm:w-[90%] w-[108%]  border border-[gray]  rounded text-base pl-12 h-9",
                    }}
                    country={"us"}
                    value={phone}
                    onChange={setPhone}
                  />

                  {errors.phone && (
                    <p
                   className='text-[red] text-[16px] mt-2 mb-[-11px]'
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* <TextField
              label="Bussiness Brief"
              Intext="what your Bussiness Do"
              textfild="textBox2"
              name="bussiness_breif"
              textarea={true}
            /> */}
            <InputField
              editt={false}
              label="Bussiness Brief"
              name="bussiness_breif"
              placeholder="what your Bussiness Do"
              className="w-[90%]"
              textarea
            />
            {errors.businessBrief && (
              <p className={'text-[red] text-[16px] mt-2 mb-[-11px]'}>{errors.businessBrief}</p>
            )}
            <hr />

            <div className=" sm:flex">
              <Link to="/">
                <Button
                  btnCss="whiteInfoCss"
                  name="previous"
                  onClickAction={requestHandler}
                />
              </Link>
              <Button
                btnCss="blueInfoCss"
                name="continue"
                className={"w-[10px]"}
              />
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
        </div>
      </form>
    </AuthenticationWrapper>
  );
}

export default Creater_your_partner1;
