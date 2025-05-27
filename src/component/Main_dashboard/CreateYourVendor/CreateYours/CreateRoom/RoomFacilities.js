import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";

import classes from "../../CreateYours/CreateHotel.module.css";
import appData from "../../../../../config/appData";
import SquareRadio from "../../common/SquareRadio";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../Authentication/Context/auth-context";

function RoomFacilities() {
 const [selectedRoom, setSelectedRoom] = useState({facilities:{en:[]},main_facilities:[]});
  const [Done ,SetDone]=useState(false)
  const [error, setError] = useState(null);
  const ctx=useContext(AuthContext)
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (selectedRoom.facilities.en.length === 0||selectedRoom.main_facilities.length === 0) {
      setError("you should select facility");
      return;
      
    }
    ctx.setRoominfo({...ctx.RoomInfo,...selectedRoom})
    navigate("/BathRoomFacilities");
  };

  const clickPrivHandeler = () => {
    navigate(-1)
    SetDone(true)
    
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} 
      className="w-[88vw] h-screen  mb-[700px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
        <div className="ml-[10px] sm:ml-[150px]">
          <ProgressSteps pageNumber={4} count={5} /></div>
         
          <div >
          <div className="grid justify-center sm:w-full h-screen   sm:ml-[150px]  items-center">
          <div className=" bg-[#80808010]  rounded-[20px] p-2">
             <Title Title="What can guests use in this room?" />
        
             <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
            <b>Room Facilities</b>
            <hr />
            <div>
              <SquareRadio
                name="customRadio"
                options={appData.RoomFacilitie.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={(e)=>{setSelectedRoom((prev)=>({
                  ...prev,facilities:{
                    ...prev.facilities,en:e
                  }
                }))}}
                radio={true}
                round="rounded-[20%]"
              />
            </div>
          </div>
          <div className="font-usedFont mb-[700px] p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
            <b>Room Main Facilities</b>

            <div>
              <SquareRadio
                name="customRadio"
                options={appData.RoomMain.map((lang) => ({
                  value: lang.value,
                  label: lang.value,
                }))}
                onChange={(value) => {
                  const updatedFacilities = value.map((item) => ({
                    name: {
                      en: item,
                    },
                  })); //edit it
                
                  setSelectedRoom((prev) => ({
                    ...prev, //add previous on 
                    main_facilities: updatedFacilities, //add new one
                  }));
                }}
                
                radio={true}
                round="rounded-[20%]"
              />
            </div>
          </div>  </div> </div> </div>
          {error && <p className="error">{error}</p>}
        </CreateHotelWrapper>
      </form>
    </MainDashBoardWrapper>
  );
}

export default RoomFacilities;
