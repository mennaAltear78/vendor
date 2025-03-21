import React, { useState, useContext, useEffect } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import classes from "./CreateHotel.module.css";
import { StepCard } from "../common/StepCard";
import appData from "../../../../config/appData";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import AuthContext1 from "../../../Authentication/Context/Mian-Page-Context";

function CompleteProfie() {
  const [isPop_up, SetPop_up] = useState(false);
  const ctx = useContext(AuthContext);
  const ctx1=useContext(AuthContext1)
  const navigate = useNavigate();
  useEffect(() => {
    if ([2, 3, 4, 5].every((num) => ctx.isHotelImageDone.includes(num))) {
      SetPop_up(true);
      console.log(true);
    }
  }, [ctx.isHotelImageDone]); // ✅ Runs only when `ctx.isHotelImageDone` changes

  const handlingBtnAction = (step) => {
    if (step.stepNumber === 1) {
      navigate("");
     
    } else if (step.stepNumber === 2) {
      ctx1.refreshToken()
       navigate("/MianDahboard/CreateHotel");
    } else if (step.stepNumber === 3) {
      navigate("/HotelImages");
    } else if (step.stepNumber === 4) {
      navigate("/RoomDetail");
    } else if (step.stepNumber === 5) {
      navigate("/RoomImage");
    }
  };
  const CancelHandeler = () => {
    SetPop_up(false);
  };

  return (
    <div className="w-[100vw] h-screen ">
      <MainDashBoardWrapper>
        <div className={classes.CompleteProfleAll}>
          {appData.stepsData.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              handlingBtnAction={() => handlingBtnAction(step)}
              stepCompleted={
                ctx.isHotelImageDone.includes(step.stepNumber) && true
              }
            />
          ))}
        </div>

        {isPop_up && (
          <PopupMessage
            popMessageCss="popupMain"
            CancelbtnCss="blueCssS"
            highlighted="The room has been successfully completed! You can now visit it or explore further. 😊🚪"
            messageImg={gif}
            cancel={true}
            btnCss="whiteCssS"
            btnMessage2="Go to"
            btnMessage1="Avoid"
            cancelHandeler={CancelHandeler}
            // handlebackNavigation={GoToHandeler}
            color={true}
            close={true}
            handleTogglePopup={CancelHandeler}
          />
        )}
      </MainDashBoardWrapper>
    </div>
  );
}

export default CompleteProfie;
