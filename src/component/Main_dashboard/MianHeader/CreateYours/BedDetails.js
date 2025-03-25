import React from "react";
import classes from "./CreateHotel.module.css";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import appData from "../../../../config/appData";
import Counter from "../common/Counter";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import ImgContainer from "../common/ImgContainer";
import Title from "../common/Title";


function BedDetails() {
  const navigate = useNavigate();

  const clickPrivHandeler = () => {
    navigate("/RoomDetail");
  };
  const onClickHandler = (e) => {
    e.preventDefault();
 
    navigate("/RoomFacilities");
  };

  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <ProgressSteps pageNumber={3} count={4} />
          
          <div >
            <Title Title="Bed details" />
          </div>
          <div className= "font-usedFont p-5 w-[420px]  border-solid  border-2 border-gray-400/40 rounded-[15px]  " >
            <p className="font-usedFont text-[16px]">
            Which beds are available in this room?

            </p>
            {appData.bedsData.map((bedItem, index) => (
              <div
                key={index}
               className="flex justify-between gap-7 mb-5"
              >
                <div style={{ display: "flex" }}>
                  <ImgContainer img={bedItem.img} />
                  <div className="ml-[10px]">
                    <b>{bedItem.title}</b> <br />
                    <p className="text-xs  text-gray-500" >{bedItem.description} <br/>
                  wide</p>
                  </div>
                </div>
               <div  > <Counter big={true}/></div>
              </div>
            ))}
          </div>
        </CreateHotelWrapper>
      </form>
    </MainDashBoardWrapper>
  );
}

export default BedDetails;
