import React, {useState } from "react";
import Style from "./Sin_in_main.module.css";
import icon from "../../../../Assets/buildings.svg";
import Sin_in_Card from "../sin_in_Card/Sin_in_Card";
import AuthenticationWrapper from "../../regular_components/AuthenticationWrapper";
import PopupMessage from "../../Sin_up/Create_your_partner/Create_account_items/PopupMessage";




const Sin_in_main = () => {
  
  const [Error, setError] = useState(null);

  const ErrorPopMessageHandeler = (error,forbedend) => {
  //   console.log(forbedend);
  //  const forbedanerror=(forbedend ? error:"password or email is wrong")
   setError(error);
    
  };
  const handleTogglePopup = () => {
    setError(null);
  };
  return (
    <AuthenticationWrapper>
      <div className="text-center w-[500px] flex flex-col justify-center"
      >
        <div className={Style["Sin_in"]}>
          <div className={Style["icon"]}>
            <img src={icon} />
          </div>

          <div className={Style["sin_in_text"]}>
            <b>Sign in to manage your property</b>
          </div>
        </div>
        <Sin_in_Card ErrorPopMessageHandeler={ErrorPopMessageHandeler} />
        {Error && (
          <PopupMessage
            popMessageCss="ErrorPopupMessage"
            btnCss="whiteCssS"
            handleTogglePopup={handleTogglePopup}
            title={Error}
          />
        )}
      </div>
    </AuthenticationWrapper>
  );
};

export default Sin_in_main;
