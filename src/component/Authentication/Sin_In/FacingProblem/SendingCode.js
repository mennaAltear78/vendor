import React, { useContext, useEffect, useRef, useState } from "react";
import Tiltle from "../../Tiltle";
import Card from "../../regular_components/Card";
import TextField from "../../regular_components/TextField";
import { Link, useNavigate } from "react-router-dom";
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import style from "./FacingProblem.module.css";
import Button from "../../regular_components/Button";
import axios from "axios";
import AuthContext1 from "../../Context/Mian-Page-Context";
import SpinnerLoading from "../../regular_components/SpinnerLoading";
import PopupMessage from "../../Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import axiosInstance from "../../../../axiosInstance";
const COUNTDOWN_TIME = 30;

function SendingCode() {
  const storedTime = parseInt(localStorage.getItem("time")) || COUNTDOWN_TIME;

  const ctx = useContext(AuthContext1);

  const codeRef = useRef();
  const resetRef = useRef();

  const [timeLeft, setTimeLeft] = useState(storedTime);
  const [isloading, setIsloading] = useState(false);
  const [isRestPass, SetRestPass] = useState(false);
  const [isResendOtp, setIsResendOtp] = useState(false);
  const [Error, setError] = useState(null);

  const api = axiosInstance(ctx.token, ctx.refreshToken);

  const navigate = useNavigate();

  useEffect(() => {
    !isRestPass ? codeRef.current.focus() : resetRef.current.focus();
  }, [isRestPass, codeRef, resetRef]);

  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem("time");
      setIsResendOtp(true);
      return;
    }

    localStorage.setItem("time", timeLeft);

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const codesumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const eneredCode = codeRef.current.value.trim();
    if (eneredCode === "") {
      setError("cannot be empty!");
      return;
    }
    console.log({
      otp: eneredCode,
      email: ctx.email,
    });

    try {
      //successful
      const response = await api.post("/verify-otp", {
        otp: eneredCode,
        email: ctx.email,
      });
      SetRestPass(true);
      codeRef.current.value = "";
      console.log(response);
      setError(null);
    } catch (error) {
      //falied
      setError("otp is wrong");
    }
    setIsloading(false);
  };
  const Resetpasssumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const enterRestPassword = resetRef.current.value.trim();
    if (enterRestPassword === "") {
      setError("cannot be empty!");
      return;
    }
    console.log({
      email: ctx.email,
      password: enterRestPassword,
    });

    try {
      //successful
      const response = await api.post("/reset-password", {
        email: ctx.email,
        password: enterRestPassword,
      });
      navigate("/");
      setError(null);
      console.log(response);
    } catch (error) {
      //falied
      setError("something went wrong");
    }
    setIsloading(false);
  };
  const ResetOtpsumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const eneredCode = codeRef.current.value.trim();
    if (eneredCode === "") {
      setError("cannot be empty!");
      return;
    }
    console.log({
      email: ctx.email,
    });

    try {
      //successful
      const response = await api.post("/resend-otp", {
        email: ctx.email,
      });
      console.log(response, "rest otp");
      //here we need to set the counter back
      localStorage.setItem("time", COUNTDOWN_TIME);
      const storedData = localStorage.getItem("time");
      setError(null);
      setTimeLeft(storedData);
    } catch (error) {
      //falied
      setError(error.response.data.message || "reset otp is wrong");
    }
    setIsloading(false);
  };

  const handleTogglePopup = () => {
    setError(null);
    setIsloading(false);
  };

  return (
    <AuthenticationWrapper>
      <div className="text-center w-[500px] flex flex-col justify-center ml-[20px]  ms:ml-0">
        <form
          onSubmit={
            !isRestPass
              ? !isResendOtp
                ? codesumbithandeler
                : ResetOtpsumbithandeler
              : Resetpasssumbithandeler
          }
        >
          <Tiltle
            title={
              !isRestPass ? "Forgot Your Password?" : "Reseting your password"
            }
            title_discription="Were here to help. Below are some options to help you get back on track."
          />
          <Card cssCard={"sin_in_card"}>
            <TextField
              ref={!isRestPass ? codeRef : resetRef}
              label={!isRestPass ? "Code" : "new password"}
              textfild="textBox"
              Intext={!isRestPass ? "Code..." : "password"}
            />

            {isloading ? (
              <SpinnerLoading />
            ) : timeLeft === 0 || isRestPass ? (
              <Button
                name={!isRestPass ? "reset code" : "Set new password"}
                btnCss="timerBlue"
              />
            ) : (
              <>
                <Button name="verification code" btnCss="timerBlue" />
                <p>
                  the remaning is{" "}
                  <span style={{ color: "red" }}> {timeLeft} sec...</span>
                </p>
              </>
            )}

            <AuthenFooter
              title="Forgot Your Username >>"
              title2="Need help? Check out our "
              title1="FAQ"
              title3="or reach out to us at"
              title4="hotelsupport@sphinx.com"
            />
          </Card>
          {Error && (
            <PopupMessage
              popMessageCss="ErrorPopupMessage"
              btnCss="whiteCssS"
              handleTogglePopup={handleTogglePopup}
              details={Error}
            />
          )}
        </form>
      </div>
    </AuthenticationWrapper>
  );
}
export default SendingCode;
