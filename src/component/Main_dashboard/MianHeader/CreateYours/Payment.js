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

  const onClickHandler = (e) => {
    e.preventDefault();
    SetPop_up(true);
    if (selectedHotel.length === 0) {
      setError("you should select language");
      return;
    }
    
  };

  const clickPrivHandeler = () => {
    navigate("/polices");
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
        <form onSubmit={onClickHandler}>
        
            <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
              <div className={classes.mainContaint}>
                <ProgressSteps pageNumber={6} count={6} circle={true}/>
                {/* <Title
                  Title="What languages do you or your staff speak?"
                  description="Select Language as you need"
                /> */}
              </div>

              <div className={classes.rating} style={{ marginBottom: "-35px" }}>
                <b style={{ fontSize: "20px" }}>
                  Payment agreement Options
                  <hr />
                </b>
                <p>Choose Payment</p>
              </div>

              <div className={classes.rating}>
                <b style={{ fontSize: "20px" }}>
                  Detailed Terms
                  <hr />
                </b>
                <TextField
                  label="Detailed Terms"
                  textfild="textBox2"
                  name="Description"
                  textarea={true}

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
