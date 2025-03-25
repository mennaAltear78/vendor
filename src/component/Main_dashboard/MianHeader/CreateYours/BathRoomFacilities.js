import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import classes from "./CreateHotel.module.css";
import appData from "../../../../config/appData";
import SquareRadio from "../common/SquareRadio";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import AuthContext from "../../../Authentication/Context/auth-context";

function BathRoomFacilities() {
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [Done, SetDone] = useState(false);
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const ctx =useContext(AuthContext)

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (selectedHotel.length === 0) {
      setError("you should select language");
      return;
    }
    SetPop_up(true);
    // navigate("/RoomImage");
  };
  const handleRadioChange = (value) => {
    setSelectedHotel(value);
  };
  const clickPrivHandeler = () => {
    navigate("/RoomImage");
    SetDone(true);
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,4]);
  };
  const CancelHandeler = () => {
    SetPop_up(false);
  
  };
  const CancellHandeler = () => {
    
    navigate("/CompleteProfie");
  };
  const GoToHandeler = () => {
    navigate("/RoomImage");
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,4]);
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <ProgressSteps pageNumber={5} count={5} />
          
          <div >
            <Title Title="Room views"/>
          </div>
          <div className= "font-[Poppins] p-5 w-[450px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5 ">
       
            <div>
              <SquareRadio
              round="rounded-[20%]"
                name="customRadio"
                options={appData.RoomViews.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={handleRadioChange}
                radio={true}
              />
            </div>
          </div>
          <div >
            <Title Title="Bathroom Facilities"/>
          </div>
          <div className= "font-[Poppins] p-5 w-[450px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5 " >
            <p className="mb-[-8px]">Which bathroom items are available in this room?
            </p>

            <div>
              <SquareRadio
              round="rounded-[20%]"
                name="customRadio"
                options={appData.BathroomFacilities.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={handleRadioChange}
                radio={true}
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </CreateHotelWrapper>
      </form>
      {isPop_up && (
        <PopupMessage
          popMessageCss="popupMain"
          details="Now, proceed to upload images for the room. 😊📸"
          CancelbtnCss="blueCssS"
          highlighted="The room has been created successfully!"
          messageImg={gif}
          cancel={true}
          btnCss="whiteCssS"
          btnMessage2="Go to"
          btnMessage1="Avoid"
          cancelHandeler={CancelHandeler}
          handlebackNavigation={GoToHandeler}
          close={true}
          handleTogglePopup={CancellHandeler}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default BathRoomFacilities;
