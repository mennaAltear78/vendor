import React, { useState, useEffect, useContext, useRef, use } from "react";
import Button from "../../regular_components/Button";
import TextField from "../../regular_components/TextField";
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import style from "./Sin_inCard.module.css";
import SpinnerLoading from "../../regular_components/SpinnerLoading";
import AuthContext1 from "../../Context/Mian-Page-Context";
import axiosInstance from "../../../../axiosInstance";


function Sin_in_Card(props) {
  const {setRequest } = useContext(AuthContext);
  const ctx = useContext(AuthContext1);

  const [isLoading, SetIsloading] = useState(false);
  const [Error, setError] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const instance = axiosInstance(ctx.token, ctx.refreshToken);

  const EmailRef = useRef();
  const PassowrdRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("token", '');
    setRequest(false);
  }, []);

  const requestHandler = () => {
    setRequest(true);

    localStorage.setItem("request", JSON.stringify(true));
  };

  const Sin_inSumbitHandeler = async (e) => {
    e.preventDefault();

    SetIsloading(true);
let forbedend
    // console.log(EmailRef.current.value, PassowrdRef.current.value);
    let errorMessage;
    let enteredEmail = null;
    const enteredPassword = PassowrdRef.current.value;
    errorMessage = true;
    if (!enteredPassword) {
      setPasswordErr("password is required.");
      SetIsloading(false);
    } else {
      setPasswordErr();
      errorMessage = false;
    }


    const email = EmailRef.current.value.trim(); // Ensure it's a string and remove spaces

    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorForEmail = true;
    if (!email) {
      setErrorEmail("Email is required.");
      SetIsloading(false);
    } else if (email.length < 8) {
      setErrorEmail("Email must be at least 8 characters long.");
      SetIsloading(false);
    } else if (email.length > 40) {
      setErrorEmail("Email must not exceed 40 characters.");
      SetIsloading(false);
    } else if (!emailRegex.test(email)) {
      setErrorEmail("Invalid email format.");
      SetIsloading(false);
    } else {
      setErrorEmail(null);
      enteredEmail = EmailRef.current.value;
      errorForEmail = false;
    }
    console.log(errorMessage);

    if (!errorMessage && !errorForEmail) {
      try {
        //successful
        const response = await instance.post("/login", {
          email: email,
          password: enteredPassword,
        });
        SetIsloading(false);
        setError(null);

        ctx.login(response.data.access_token, enteredEmail);

        navigate("/MianDahboard");
      } catch (error) {
        //falied
        console.log(error.message);
        const retryAt = localStorage.getItem("retryAt");
        errorMessage=error.message
        
        if (retryAt) {
          const retryTime = new Date(retryAt);
          const now = new Date();

          if (now < retryTime) {
            const hours = retryTime.getHours().toString().padStart(2, "0");
            const minutes = retryTime.getMinutes().toString().padStart(2, "0");
            console.log(`You can try again at ${hours}:${minutes}`);
            errorMessage=`You can try again at ${hours}:${minutes}`
            forbedend=true
          } else {
            localStorage.removeItem("retryAt"); // Remove it if time has passed
            forbedend=false
          }
        }
      }
      setError(errorMessage);
      console.log('error',errorMessage);
      console.log(forbedend);
      
      SetIsloading(false);
      props.ErrorPopMessageHandeler(errorMessage,forbedend);
    }
  };

  useEffect(() => {
    EmailRef.current.focus();
  }, [EmailRef]);

  return (
    <div>
      <form onSubmit={Sin_inSumbitHandeler} className={style.sin_in_card}>
        <TextField
          ref={EmailRef}
          textfild="textBox"
          label="Email"
          Intext="Your User Name or ID "
        />
        {errorEmail && (
          <p style={{ color: "red", fontSize: "15px", marginTop: "-10px" }}>
            {errorEmail}
          </p>
        )}
        <TextField
          ref={PassowrdRef}
          textfild="textBox"
          label="Password"
          Intext="Your Password "
          type="password"
        />
        {passwordErr && (
          <p style={{ color: "red", fontSize: "15px", marginTop: "-10px" }}>
            {passwordErr}
          </p>
        )}
        {!isLoading ? (
          <Button name="Continue" btnCss={"blueCss"} />
        ) : (
          <SpinnerLoading />
        )}
        <Link to="/CreateAccount">
          <Button
            name="Create Your Partner Account"
            btnCss={"whiteCss"}
            onClickAction={requestHandler}
          />
        </Link>
        <AuthenFooter
          title="Facing problem in "
          link="Sign in &gt;&gt;"
          title2="Need help? Check out our "
          title1="FAQ"
          title3="or reach out to us at"
          title4="hotelsupport@sphinx.com"
        />
      </form>
    </div>
  );
}

export default Sin_in_Card;


