import React, { useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import classes from "./CreateHotel.module.css";
import appData from "../../../../config/appData";
import SquareRadio from "../common/SquareRadio";
import { useNavigate } from "react-router-dom";

function RoomFacilities() {
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [Done ,SetDone]=useState(false)
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (selectedHotel.length === 0) {
      setError("you should select language");
      return;
    }
    navigate("/BathRoomFacilities");
  };
  const handleRadioChange = (value) => {
    setSelectedHotel(value);
  };
  const clickPrivHandeler = () => {
    navigate(-1)
    SetDone(true)
    
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <ProgressSteps pageNumber={4} count={5} />
         
          <div >
             <Title Title="What can guests use in this room?" />
          </div>
          <div className={classes.rating} style={{marginTop:'-5px'}}>
            <b>Room Facilities</b>
            <hr />
            <div>
              <SquareRadio
                name="customRadio"
                options={appData.RoomFacilitie.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={handleRadioChange}
                radio={true}
                round="rounded-[20%]"
              />
            </div>
          </div>
          <div className={classes.rating} style={{marginTop:'10px'}}>
            <b>Room Main Facilities</b>

            <div>
              <SquareRadio
                name="customRadio"
                options={appData.RoomMain.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={handleRadioChange}
                radio={true}
                round="rounded-[20%]"
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </CreateHotelWrapper>
      </form>
    </MainDashBoardWrapper>
  );
}

export default RoomFacilities;
