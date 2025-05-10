import React, { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";
import appData from "../../../../../config/appData";
import SquareRadio from "../../common/SquareRadio";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import AuthContext from "../../../../Authentication/Context/auth-context";
import api from'../../../../../services/axiosInstance'
function BathRoomFacilities() {
  const [selectedRoom, setSelectedRoom] = useState({view:{en:[]},available_in_your_own_bathroom:{en:[]}});
  const [Loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const ctx =useContext(AuthContext)

  const navigate = useNavigate();
useEffect(()=>{
  ctx.setRoominfo({hotel:ctx.HotelId,...ctx.RoomInfo,...selectedRoom})
},[selectedRoom])
  const onClickHandler = async(e) => {
    e.preventDefault();
    if (selectedRoom.view.en.length === 0||selectedRoom.available_in_your_own_bathroom.en.length === 0) {
      setError("you should select language");
      return;
    }
    setIsLoading(true)
    try {
      const response = await api.post(
        "rooms",
        {...ctx.RoomInfo}, // ده البودي اللي هيتبعت للسيرفر
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      console.log(response);
      ctx.SetRoomId(response?.data?.data?._id)
    } catch (error) {
      console.error("Error logging out:", error.response.data.message);
    }
    
    SetPop_up(true);
    setIsLoading(false)
  };

  const clickPrivHandeler = () => {
    navigate("/RoomImage");
    
   
  };
  const CancelHandeler = () => {
    SetPop_up(false);
  
  };
  const CancellHandeler = () => {
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,4]);
    navigate("/CompleteProfie");
  };
  const GoToHandeler = () => { 
    ctx.setHotelImageDone((prevSteps) => [...prevSteps,4]);
    navigate("/RoomImage");
    
   
  };
  return (
    
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[700px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler} Loading={Loading}>
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
                onChange={(e)=>{setSelectedRoom((prev)=>({
                  ...prev,view:{
                    ...prev.view,en:e
                  }
                }))}}
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

            <div >
              <SquareRadio
              round="rounded-[20%]"
                name="customRadio"
                options={appData.BathroomFacilities.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={(e)=>{setSelectedRoom((prev)=>({
                  ...prev,available_in_your_own_bathroom:{
                    ...prev.available_in_your_own_bathroom,en:e
                  }
                }))}}
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
