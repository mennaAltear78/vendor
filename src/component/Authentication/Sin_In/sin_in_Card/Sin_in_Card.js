import { useState, useEffect, useContext, useRef, use } from "react";
import Button from "../../regular_components/Button";
import TextField from "../../regular_components/TextField";
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter";
import { Link, useNavigate } from "react-router-dom";
import SpinnerLoading from "../../regular_components/SpinnerLoading";
import AuthContext1 from "../../Context/Mian-Page-Context";
import api from "../../../../services/axiosInstance";
import { AuthContext } from "../../Context/auth-context";
import Notification from "../../regular_components/Notification";



function Sin_in_Card(props) {
  const [notificationss, setNotifications] = useState([]);
  const {setRequest } = useContext(AuthContext);
  const ctx = useContext(AuthContext1);

  const [isLoading, SetIsloading] = useState(false);
  const [Error, setError] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  // const instance = axiosInstance(ctx.token, ctx.refreshToken,ctx.setToken);

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


    if (!errorMessage && !errorForEmail) {
      try {
        //successful
        const response = await api.post("vendor/login", {
          email: email,
          password: enteredPassword,
        });
        SetIsloading(false);
        setError(null);
        localStorage.setItem("loggedIn",true)
        notifyLoginSuccess()
        console.log(response.data,"pass",enteredPassword);
        ctx.login(response.data.access_token, enteredEmail);
     
      } catch (error) {
        //falied
       
        console.log("error",error.response.message || "An unknown error occurred!");
        const retryAt = localStorage.getItem("retryAt");
        errorMessage=error.response.data.message || "An unknown error occurred!"
        setError(errorMessage);
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
      SetIsloading(false);
      props.ErrorPopMessageHandeler(errorMessage,forbedend);
    }
  };

  useEffect(() => {
    EmailRef.current.focus();
  }, [EmailRef]);
function notifyLoginSuccess() {
  
    const id = Date.now();
    const type = "success";
    const message = "Logged in successfully";
    
    setNotifications((prev) => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
         
      );  navigate("/MianDahboard")
    }, 2000);
  
}

  return (
    <div >
      <form onSubmit={Sin_inSumbitHandeler} className="w-[75%] border border-solid border-gray-400/25 rounded-[10px] p-[20px] pt-[30px] flex flex-col justify-center  items-center mt-[20px] font-[Poppins] ml-[10px]  ms:ml-0"
      >
        <TextField
          ref={EmailRef}
          textfild="textBox"
          label="Email"
          Intext="Your User Name or ID "
        />
        {errorEmail && (
          <p className="text-red-500 text-[15px] mt-[-10px]">
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
          <p className="text-red-500 text-[15px] mt-[-10px]">
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
        />     {<div className="fixed bottom-[100px]   z-50 space-y-2">
                    {notificationss.map((notification) => (
                      <Notification
                        key={notification.id}
                        type={notification.type}
                        message={notification.message}
                      />
                    ))}
                  </div>}
      </form>
  
    </div>
  );
}

export default Sin_in_Card;


