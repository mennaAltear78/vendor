import React, { useContext, useEffect, useState } from "react";
import classes from "../../CreateYours/CreateHotel.module.css";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import TextField from "../../../../Authentication/regular_components/TextField";
import appData from "../../../../../config/appData";
import Menue from "../../../../Authentication/regular_components/Menue";
import Counter from "../../common/Counter";
import SquareRadio from "../../common/SquareRadio";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import Title from "../../common/Title";
import Adult from "../../.././../../Assets/el_adult.png";
import Childrens from "../../.././../../Assets//fa6-solid_children.png";

import AuthContext from "../../../../Authentication/Context/auth-context";
import InputField from "../../common/InputField";
function RoomDetail() {
  const navigate = useNavigate();
  const [error,setError]=useState()
  const [data, setData] = useState({
    name: "",
    type: "",
    description: "",
    price_per_night: 0,
    available_rooms: 0,
    capacity: {
      adults: 0,
      children: 0,
    },
    smoking_policy: "",
    size: 0,
  });
  const ctx=useContext(AuthContext)
  const handleRadioChange = (newSelected) => {

    setData((prev) => ({ ...prev, smoking_policy: { en: newSelected[0] } }));
  };
  useEffect(() => {
    document.title = "Room Details";
  }, []);
  const clickPrivHandeler = () => {

    navigate("/CompleteProfie");
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    const {
      name,
      type,
      description,
      price_per_night,
      available_rooms,
      capacity,
      smoking_policy,
      size,
    } = data;
    // console.log('description lenght',type);
    // console.log("SMOKING", smoking_policy);
    
    
    if (
      !name ||
      !type.en || type.en==='options'||
      description?.en?.length <10 ||
      !smoking_policy.en ||
      price_per_night <= 2 ||
      available_rooms < 0 ||
      size <= 0 ||
      capacity.adults <0 ||
      capacity.children < 0

    ) {
      setError("Please fill all required fields. and description should be more than 10 charachters");
      return;
    }
   ctx.setRoominfo({...ctx.RoomInfo,data})
    navigate("/BedDetails");
  };
  console.log(data);
  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onClickHandler}
        className="w-[90vw] h-screen  mb-[700px]">
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
        <div className="ml-[10px] sm:ml-[150px]">
          <ProgressSteps pageNumber={2} count={4} />
          </div>
          <div>
          <div className="grid justify-center sm:w-full   sm:ml-[150px]  items-center">
          <div className=" bg-[#80808010]  rounded-[20px] p-2">
            <Title Title="Room Details" />
         

            <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
            {/* <TextField
              label="Room Name"
              textfild="bigTextBox"
              name="Room Name"
              Intext="Name"
              OnchangeHnadeler={(e) =>
                setData((prev) => ({
                  ...prev,
                  name:  e.target.value ,
                }))
              }
            /> */}
                              <InputField
                    editt={false}
                    label="Room Name"
                    // value={property}
                    name="Room Name"
                    className="w-[96%]"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        name:  e.target.value ,
                      }))
                    }

                  />
            <div className="my-[10px]">
              <Menue
                textfild="textBoxSmall"
                label="Room Type?"
                options={appData.RoomType}
                NObtn={true}
                timeHandeler={(Selected) => {
                  setData((pre) => ({ ...pre, type: { en: Selected } }));
                }}
              />
            </div>

            {/* <TextField
              label="Description"
              textfild="textBox2"
              name="Description"
              textarea={true}
              Intext="Description"
              OnchangeHnadeler={(e) =>
                setData((prev) => ({
                  ...prev,
                  description: { en: e.target.value },
                }))
              }
            /> */}
                          <InputField
                    editt={false}
                    label="Description"
                    // value={property}
                    textarea={true}
                    name="Room Name"
                    className="w-[96%]"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        description: { en: e.target.value },
                      }))
                    }
                  />
            <Counter label="How many rooms of this type do you have?"    
                CounterNmberHandeler={(num) => {
                  setData((prev) => ({
                    ...prev,
                    available_rooms:  num 
                  }));
                }}/>
          </div>

          <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
            <Counter label="Price per night (USD)" 
             CounterNmberHandeler={(num) => {
                    setData((prev) => ({
                      ...prev,
                      price_per_night: num 
                    }));
                  }}/>
            <p>Including taxes, commission and charges</p>
            <Counter label="Room size (m²)"    CounterNmberHandeler={(num) => {
                    setData((prev) => ({
                      ...prev,
                      size: {value: num },
                    }));
                  }}/>
            <p>Room Capacity</p>
            <div>
              <div className="mb-[-20px] flex items-center justify-between">
                <div className="flex items-center justify-center gap-[10px]">
                  <img src={Adult} alt="Adult" height="20px" />
                  <p>Adults</p>
                </div>

                <Counter big={true} frame={true}       
                 CounterNmberHandeler={(num) => {
                    setData((prev) => ({
                      ...prev,
                      capacity : { ...prev.capacity,adults: num }
                    }));
                  }}/>
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

                <Counter
                  big={true}
                  frame={true}
                  CounterNmberHandeler={(num) => {
                    setData((prev) => ({
                      ...prev,
                      capacity:{...prev.capacity,children: num} 
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
            <p className="font-usedFont mb-[-10px]">
              Is smoking allowed in this room?
            </p>
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
          </div></div> </div>
     
        </CreateHotelWrapper> 
        {error?<p className="text-red-500 mt-[-90px]">{error}</p>:null}
      
      </form>
     
    </MainDashBoardWrapper>
  );
}

export default RoomDetail;
