import  { useState, useContext, useEffect } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import appData from "../../../../config/appData";
import { useNavigate } from "react-router-dom";

import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import StepList from "../common/StepList";
import { AuthContext } from "../../../Authentication/Context/auth-context";


function CompleteProfie({Hotel}) {
  const [isPop_up, SetPop_up] = useState(false);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();


useEffect(() => {
  if (Hotel) {
    if ([1, 2].every((num) => ctx.isHotelImageDone.includes(num))) {
      SetPop_up(true);
      return
    }
  } else {
    if ([3, 4].every((num) => ctx.isHotelImageDone.includes(num))) {
      SetPop_up(true);
      return
    }else{
      SetPop_up(false);
      return
    }
  }
}, [ctx.isHotelImageDone, Hotel]);

  const handlingBtnAction = (step) => {
    if (step.stepNumber === 1) {
      navigate("/MianDahboard/CreateHotel");
    } else if (step.stepNumber === 2) {
           navigate("/HotelImages");
    } else if (step.stepNumber === 3) {
       navigate("/RoomDetail");
    } else if (step.stepNumber === 4) {
        navigate("/RoomImage");
    } 
  };
  const CancelHandeler = () => {
    SetPop_up(false);
    ctx.setHotelImageDone([]);
  };

  useEffect(()=>{
    document.title="complete your profile"
    // ctx.setHotelImageDone([3,4]);
  //  ctx.setHotelImageDone([]);
  },[ctx.IdSpesificHotel])
const steps = Hotel ? appData.stepsHotel : appData.stepsRoom;
  return (
    <div className="w-[100vw] h-screen ">
      <MainDashBoardWrapper>
      <StepList
        steps={steps}
        onBtnAction={handlingBtnAction}
         />
        {isPop_up && (
          <PopupMessage
            popMessageCss="popupMain"
            CancelbtnCss="blueCssS"
            highlighted="The hotel has been successfully completed! You can now add rooms. 😊🚪"
            messageImg={gif}
            cancel={true}
            btnCss="whiteCssS"
            btnMessage2="Go to"
            btnMessage1="Avoid"
            cancelHandeler={CancelHandeler}
            handlebackNavigation={() => {
              navigate("/CreateRoom")
            }}
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
