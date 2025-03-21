import React, { useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import classes from "./CreateHotel.module.css";
import appData from "../../../../config/appData";
import SquareRadio from "../common/SquareRadio";
import { useNavigate } from "react-router-dom";
function Speak() {
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [error,setError]=useState(null)
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
  if(selectedHotel.length===0){
    setError("you should select language")
    return
  }
    navigate("/facilities");
  };
  const handleRadioChange = (value) => {
    setSelectedHotel(value)
  };
  const clickPrivHandeler = () => {
    navigate("/AboutHotel");
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler}className="w-[100vw] h-screen ml-[100px] sm:ml-[150px]">
        <div style={{ width: "100vw" }}>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={3} count={6} circle={true} />
              <Title
                Title="What languages do you or your staff speak?"
                description="Select Language as you need"
              />
            </div>
            <div className={classes.rating}>
              <b>Select Language </b>
              <hr />
              <div>
                <SquareRadio
                round="rounded-[20%]"
                  name="customRadio"
                  options={appData.languages.map((lang) => ({
                    value: lang.value,
                    label: lang.lang,
                  }))}
                  onChange={handleRadioChange}
                  radio={true}
                />
              </div>
              <p>Add additional languages</p>
              <div></div>
            </div>
            {error&&   <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Speak;
