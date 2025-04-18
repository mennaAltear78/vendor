import React, { useContext, useState } from "react";

import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import gif from '../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif'
import AuthContext from "../../../Authentication/Context/auth-context";

import CreateHotelWrapper from "../common/CreateHotelWrapper";
import classes from "./CreateHotel.module.css";
import TextField from "../../../Authentication/regular_components/TextField";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
function Payment() {
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [error, setError] = useState(null); 
  const [isPop_up, SetPop_up] = useState(false);
  const ctx =useContext(AuthContext)
  const navigate = useNavigate();
console.log(ctx.HotelInfo);

  const onClickHandler = (e) => {
    e.preventDefault();
    SetPop_up(true);
    if (selectedHotel.length === 0) {
      setError("you should select language");
      return;
    }
    
  };

  const clickPrivHandeler = () => {
    navigate(-1);
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,1]);
  };
 


  const CancelHandeler = () => {
    navigate("/CompleteProfie");
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,2]);
  };
  const GoToHandeler = () => {
    navigate("/HotelImages");
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,2]);
  };
  return (
    <div>
      <MainDashBoardWrapper>
        <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] ">
        
            <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
              <div className={classes.mainContaint}>
                <ProgressSteps pageNumber={6} count={6} circle={true}/>
           
              </div>

              <div className="font-usedFont p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5" style={{ marginBottom: "-35px" }}>
                <b style={{ fontSize: "20px" }}>
                  Payment agreement Options
                  <hr />
                </b>
                <p>Choose Payment</p>
              </div>

              <div className="font-[Poppins] p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5">
                <b style={{ fontSize: "20px" }}>
                  Detailed Terms
                  <hr />
                </b>
                <TextField               
                  textfild="textBox2"
                  name="Description"
                  textarea={true}
                  Intext="Detailed Terms"


                />
              </div>
            </CreateHotelWrapper>
        
        </form>
        {isPop_up && (
          <PopupMessage
            popMessageCss="popupMain"
            details=" Now, proceed to upload images for the hotel. 😊🏨"
            CancelbtnCss="blueCssS"
            highlighted="The Hotel has been created successfully! "
            messageImg={gif}
            cancel={true}
            btnCss="whiteCssS"
            btnMessage2="Go to"
            btnMessage1="Avoid"
            cancelHandeler={CancelHandeler}
            close={true}
            handlebackNavigation={GoToHandeler}
            handleTogglePopup={CancelHandeler}
          />
        )}
      </MainDashBoardWrapper>
    </div>
  );
}

export default Payment;
