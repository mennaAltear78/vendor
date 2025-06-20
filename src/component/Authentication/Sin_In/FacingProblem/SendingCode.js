import { useContext, useEffect, useRef, useState } from "react";
import Tiltle from "../../Tiltle";
import Card from "../../regular_components/Card";
import TextField from "../../regular_components/TextField";
import { useNavigate } from "react-router-dom";
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import Button from "../../regular_components/Button";
import AuthContext1 from "../../Context/Mian-Page-Context";
import SpinnerLoading from "../../regular_components/SpinnerLoading";
import PopupMessage from "../../Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import api from "../../../../services/axiosInstance";
import { Mail } from "lucide-react";


const COUNTDOWN_TIME = 30;

function SendingCode() {
  const storedTime = parseInt(localStorage.getItem("time")) || COUNTDOWN_TIME;

  const ctx = useContext(AuthContext1);

  const codeRef = useRef();
  const resetRef = useRef();
 const [type ,setType]=useState('code')
  const [timeLeft, setTimeLeft] = useState(storedTime);
  const [isloading, setIsloading] = useState(false);
  const [isRestPass, SetRestPass] = useState(false);
  const [isResendOtp, setIsResendOtp] = useState(false);
  const [Error, setError] = useState(null);

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
  const validatePassword = (password) => {
    if (password < 8) {
      setError("Must be at least 8 characters.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must include at least one uppercase letter.");
       return false;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must include at least one lowercase letter.");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setError("Must include at least one number.");
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setError("Must include at least one special character (!@#$%^&*).");
      return false;
    }
    return true
  };
  const codesumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    console.log(codeRef);
    
    const eneredCode = codeRef.current.value.trim();
    if (eneredCode === "") {
      setError("cannot be empty!");
      return;
    }
    try {
      //successful
      const response = await api.post("/vendor/verify-otp", {
        otp: eneredCode,
        email: ctx.email,
      });
      SetRestPass(true);
      setError(null);
      codeRef.current.value = '';
    } catch (error) {
      setError("otp is wrong");
    }
    setIsloading(false);
  };
  const Resetpasssumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const enterRestPassword = resetRef.current.value.trim();
    validatePassword(enterRestPassword);
    if (!validatePassword(enterRestPassword)) return;
    console.log({email: ctx.email, password: enterRestPassword} );
    
    try {
      //successful
      const response = await api.post("/vendor/reset-password", {
        password: enterRestPassword,
        email: ctx.email,
      }); 
      setError(null);
      setType('code')    
      navigate('/') 
      
    } catch (error) {
      //falied
      setError();
      console.log(error.message);
      
    }
    setIsloading(false);
  };
  const ResetOtpsumbithandeler = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setType("resetotp")
    try {
      //successful
      const response = await api.post("/vendor/resend-otp", {
        email: ctx.email,
      });
      localStorage.setItem("time", COUNTDOWN_TIME);
      const storedData = localStorage.getItem("time");
      setError(null);
      setTimeLeft(storedData);
      codeRef.current = "";
      setIsResendOtp(false);
      setType("password")
    } catch (error) {
      //falied
      setError(error.response.data.message );
    }
    setIsloading(false);
  };

  const handleTogglePopup = () => {
    if (Error) {
      type!='code'?null:navigate("/ForgetPasswordCard")
    
    }
    setError(null);
    setIsloading(false);
  };

  return (
    <AuthenticationWrapper>
      <div className="text-center  flex flex-col justify-center ml-[20px]  ms:ml-0">
        <form 
        onSubmit={type==='code'?codesumbithandeler:type==='password'?Resetpasssumbithandeler:ResetOtpsumbithandeler}
        >
          <Tiltle
            title={
              !isRestPass ? "Forgot Your Password?" : "Reseting your password"
            }
            title_discription="Were here to help. Below are some options to help you get back on track."
          />
          <Card cssCard={"sin_in_card"}>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{ctx.email}</span>
            </div>
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
                onClickAction={isRestPass?()=>setType('password'):ResetOtpsumbithandeler}
              />
            ) : (
              <>
                <Button
                  name="verification code"
                  btnCss="timerBlue"
                 onClickAction={()=>setType('code')}
                />
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
              title={Error}
            />
          )}
        </form>
      </div>
    </AuthenticationWrapper>
  );
}
export default SendingCode;
