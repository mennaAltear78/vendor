import React, { useEffect } from "react";
import classes from "./CreateHotel.module.css";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import TextField from "../../../Authentication/regular_components/TextField";
import appData from "../../../../config/appData";
import Menue from "../../../Authentication/regular_components/Menue";
import Counter from "../common/Counter";
import SquareRadio from "../common/SquareRadio";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import Title from "../common/Title";
import Adult from "../../.././../Assets/el_adult.png";
import Childrens from "../../.././../Assets//fa6-solid_children.png";
function RoomDetail() {
  const navigate = useNavigate();
  const handleRadioChange = () => {};
    useEffect(()=>{
            document.title="Room Details"
          },[])
  const clickPrivHandeler = () => {
    navigate("/CompleteProfie");
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("sumbit");
    navigate("/BedDetails");
  };
  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onClickHandler}
        className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]"
      >
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <ProgressSteps pageNumber={2} count={4} />
          <div className="mt-[-20px]">
            <Title Title="Room Details" />
          </div>

          <div className="font-usedFont p-5 w-[420px] pr-[50px] border-solid  border-2 border-gray-400/40 rounded-[15px] mt-5" style={{ marginBottom: "-40px" }}>
            <TextField
              label="Room Name"
              textfild="bigTextBox"
              name="Room Name"
            />

            <Menue
              textfild="textBoxSmall"
              label="Room Type?"
              options={appData.RoomType}
              NObtn={true}
            />
            <TextField
              label="Descriptionnpm strat"
              textfild="textBox2"
              name="Description"
              textarea={true}
            />

            <Counter label="How many rooms of this type do you have?" />
          </div>

          <div className={classes.rating} style={{ marginBottom: "-40px" }}>
            <Counter label="Price per night (USD)" />
            <p>Including taxes, commission and charges</p>
            <Counter label="Room size (m²)" />
            <p>Room Capacity</p>
            <div>
              <div
                style={{
                  marginBottom: "-20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Adult} alt="Adult" height="20px" />
                  <p>Adults</p>
                </div>

                <Counter big={true} frame={true} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <img src={Childrens} alt="Children" height="20px" />{" "}
                  <p>Children</p>
                </div>

                <Counter big={true} frame={true} />
              </div>
            </div>
          </div>
          <div className={`mb-[100px] pb-[40px] ${classes.rating}`} >
            <p className="font-usedFont mb-[-10px]">Is smoking allowed in this room?</p>
            <SquareRadio
              round="rounded-[50%]"
              name="customRadio"
              options={appData.smokingPolicy
                .filter((policy) => policy.value !== "option3") // استبدلي EXCLUDED_VALUE بالقيمة التي تريدين استثناءها
                .map((policy) => ({
                  value: policy.value,
                  label: policy.policy,
                }))}
              description="Additonal Cost"
              onChange={handleRadioChange}
              radio={true}
              onevalue={true}
            />
          </div>
        </CreateHotelWrapper>
      </form>
    </MainDashBoardWrapper>
  );
}

export default RoomDetail;
