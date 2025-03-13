import React, { useState } from "react";
import classes from './CreateHotel.module.css';
import appData from "../../../../config/appData";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import Title from '../common/Title';
import ChoisenHotel from '../common/ChoisenHotel';
import { useNavigate } from "react-router-dom";

function ChoiseHotel() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [error ,setError]=useState(null)
 const navigate =useNavigate()
  const onClickHandler = (e) => {
    e.preventDefault();
    if(!selectedHotel){
      setError("you should choise one")
      return
    }
   
    navigate('/AboutHotel')
  };
  const clickPrivHandeler=()=>{
    navigate('/MianDahboard')
  }
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler}>
        <div style={{ width: "100vw" }}>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={1} count={6} circle={true} />
              <Title
                Title="Choose Your Property Type"
                description="To start choose the type of property you need."
              />

              <div style={{ display: 'flex', gap: '20px',marginLeft:'20px' }}>
                {appData.ChoiseHotel.map((hotel) => (
                  <ChoisenHotel
                    key={hotel.title}
                    icon={hotel.img}
                    Title={hotel.title}
                    desription={hotel.desc}
                    selected={selectedHotel === hotel.title}
                    onSelect={() => setSelectedHotel(hotel.title)} // ✅ يتم تحديث الحالة هنا
                  />
                ))}
              </div>
            </div>
            {error&&   <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default ChoiseHotel;