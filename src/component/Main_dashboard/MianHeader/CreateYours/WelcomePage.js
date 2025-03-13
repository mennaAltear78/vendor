import React, { useEffect, useState } from "react";
import Title from "../common/Title"
import gif from '../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif'
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
const [isPop_up,SetPop_up]=useState(true)
const navigate = useNavigate()


const CancelHandeler=()=>{
    navigate('/CompleteProfie')
}
const GoToHandeler=()=>{ 
    SetPop_up(false)
    navigate('/MianDahboard/CreateHotel')
}
  return (
   
    <MainDashBoardWrapper>
      <Title
        Title="Start by List Your🏨 Property and Create Hotels👋"
        description="To Start Choose type of Property You need to do"
      />
       {isPop_up && 
        <PopupMessage
                popMessageCss="popupMain"
                title="compelete your Profile"
                details=" For Continue You Must be complete Your Profile first to can set your Property easily"
                CancelbtnCss='blueCssS'
                messageImg={gif}
                cancel={true}
                btnCss="whiteCssS"
                btnMessage2='Go to'
                btnMessage1='Avoid'
                cancelHandeler={CancelHandeler}
                close={true}
                handlebackNavigation={GoToHandeler}
                handleTogglePopup={CancelHandeler}
                
              />}
    </MainDashBoardWrapper>
  );
}

export default WelcomePage;
