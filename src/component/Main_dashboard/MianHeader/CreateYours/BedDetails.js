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
          
          <div style={{ marginLeft: "24px", marginBottom: "-40px" }}>
            <Title Title="Bed details" />
          </div>
          <div className={classes.rating} >
            <p>
            Which beds are available in this room?

            </p>
            {appData.bedsData.map((bedItem, index) => (
              <div
                key={index}
                style={{ display: "flex", marginBottom:"20px",justifyContent: "space-between" }}
              >
                <div style={{ display: "flex" }}>
                  <ImgContainer img={bedItem.img} />
                  <div style={{ marginLeft: "20px" }}>
                    <b>{bedItem.title}</b> <br />
                    <p style={{fontSize:'12px' ,color:"gray"}}>{bedItem.description} <br/>
                  wide</p>
                  </div>
                </div>
                <Counter big={true}/>
              </div>
            ))}
          </div>
        </CreateHotelWrapper>
      </form>
    </MainDashBoardWrapper>
  );
}

export default BedDetails;
