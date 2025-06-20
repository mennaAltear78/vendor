import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../regular_components/Button";
import TextField from "../../regular_components/TextField";
import { useNavigate } from "react-router-dom";
import AuthenFooter from "../../AuthenticationFooter/AuthenFooter";
import Card from "../../regular_components/Card";
import Tiltle from "../../Tiltle";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import SpinnerLoading from "../../regular_components/SpinnerLoading";
import PopupMessage from "../../Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import AuthContext1 from "../../Context/Mian-Page-Context";
import api from "../../../../services/axiosInstance";

function FacingProblem() {
  //useContext
  const ctx = useContext(AuthContext1);
  //useSate
  const [isloading, setIsloading] = useState(false);
  const [Error, setError] = useState(null);

  //navigate
  const navigate = useNavigate();
  //useRef
  const EmailRef = useRef();
  useEffect(() => {
    EmailRef.current.focus();
  }, [EmailRef]);

  const Forgetpasswordsumbithandeler = async (e) => {
    setIsloading(true);
    e.preventDefault();

    let emailErrorMaessage;
    const enteredEmail = EmailRef.current.value.trim();
    console.log(enteredEmail);
    if (enteredEmail === "") {
      emailErrorMaessage = "Email cannot be empty!";
      setError("Email cannot be empty!");
      return;
    }

    try {
      //successful
      const response = await api.post("/vendor/forgot-password", {
        email: enteredEmail,
      });
      ctx.login(ctx.token, enteredEmail);
      navigate("/SendingCode");
      setError(null);
    } catch (error) {
      //falied
      setError(error.response.data.message || "wrong email try again");
      EmailRef.current.value = "";
      console.log(error.message);
    }
    setIsloading(false);
  };

  const handleTogglePopup = () => {
    setError(null);
    setIsloading(false);
  };

  return (
    <AuthenticationWrapper>
      <div className="text-center flex flex-col justify-center ml-[10px]  ms:ml-0">
        <form onSubmit={Forgetpasswordsumbithandeler}>
          <Tiltle
            title={"Forgot Your Password?"}
            title_discription="Were here to help. Below are some options to help you get back on track."
          />
          <Card cssCard={"sin_in_card"}>
            <TextField
              ref={EmailRef}
              label="Email"
              textfild="textBox"
              Intext="Your User Name or ID "
            />
            {isloading ? (
              <SpinnerLoading />
            ) : (
              <Button name="Get Reset code" btnCss={"blueCss"} />
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

export default FacingProblem;
