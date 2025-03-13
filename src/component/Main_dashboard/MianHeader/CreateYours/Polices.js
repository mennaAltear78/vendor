import React, { useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import classes from "./CreateHotel.module.css";
import Title from "../common/Title";
import TextField from "../../../Authentication/regular_components/TextField";
import SquareRadio from "../common/SquareRadio";
import appData from "../../../../config/appData";
import Menue from "../../../Authentication/regular_components/Menue";
import FeeCalculation from "../common/FeeCalculation";
function Polices() {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [CancelActive, SetCancelActive] = useState(true);
  const navigate = useNavigate();

  const handleRadioChange = (value) => {
    setSelectedFacilities(value);
  };
  const clickPrivHandeler = () => {
    navigate("/facilities");
  };
  const onSumbitHandeler = (e) => {
    e.preventDefault();
    if (selectedFacilities.length === 0) {
      setError("you should select language");
      return;
    }
    navigate("/payment");
  };
  const AllowanceHandling = (activeValue) => {
    console.log(activeValue.police, "???");

    SetCancelActive(activeValue.police);
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onSumbitHandeler}>
        <div>
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={5} count={6} circle={true} />
              <Title
                Title="Add your Terms, Polices "
                description="Here you can add what you need and define your terms as you want "
              />
            </div>
            <div className={classes.rating}>
              <b style={{ fontSize: "20px" }}>
                What are your check-in and check-out times?
              </b>
              <hr />
              <p>Check In</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Menue
                  textfild="textBoxSmall"
                  label="from"
                  options={appData.times}
                />
                <Menue
                  textfild="textBoxSmall"
                  label="until"
                  options={appData.times}
                />
              </div>
              <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                name="Description"
              />

              <p style={{ marginTop: "-10px" }}>Check out</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Menue
                  textfild="textBoxSmall"
                  label="from"
                  options={appData.times}
                />
                <Menue
                  textfild="textBoxSmall"
                  label="until"
                  options={appData.times}
                />
              </div>
              <TextField
                label="Description(Optional)"
                textfild="bigTextBox"
                name="Description"
              />

              <SquareRadio
                name="customRadio"
                options={[
                  {
                    value: "police",
                    label: "Cancelation Policy ",
                  },
                ]}
                cost={true}
                description="Cancelation Allowed "
                AllowanceHandling={AllowanceHandling}
              />

              <TextField
              
                textfild="textBox2"
                name="Description"
                textarea={true}
              />
              {!CancelActive && <FeeCalculation />}
              <TextField
                label="Children and Familes "
                textfild="textBox2"
                name="Description"
                textarea={true}
              />

              <div>
                <p style={{ marginBottom: "-10px" }}>Pets Policy</p>
                <SquareRadio
                  name="customRadio"
                  options={appData.petsPolicy.map((policy) => ({
                    value: policy.value,
                    label: policy.policy,
                  }))}
                  description="Additonal Cost"
                  onChange={handleRadioChange}
                  radio={true}
                  onevalue={true}
                />
                <p style={{ marginBottom: "-10px", marginTop: "40px" }}>
                  Smoking Policy
                </p>
                <SquareRadio
                  name="customRadio"
                  options={appData.smokingPolicy.map((policy) => ({
                    value: policy.value,
                    label: policy.policy,
                  }))}
                  description="Additonal Cost"
                  onChange={handleRadioChange}
                  radio={true}
                  onevalue={true}
                />
              </div>
            </div>
            {error && <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Polices;
