import React, { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import appData from "../../../../../config/appData";
import Counter from "../../common/Counter";
import SquareRadio from "../../common/SquareRadio";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import { useNavigate } from "react-router-dom";
import Title from "../../common/Title";
import Adult from "../../.././../../Assets/el_adult.png";
import Childrens from "../../.././../../Assets//fa6-solid_children.png";
import InputField from "../../common/InputField";
import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import CapacityRoom from "../../common/commonRoom/CapacityRoom";
import Select from "react-select";
import { AuthContext } from "../../../../Authentication/Context/auth-context";

function RoomDetail() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: "",
    price_per_night: 0,
    available_rooms: 0,
    capacity: {
      adults: 0,
      children: 0,
    },
    smoking_policy: "",
    size: 0,
  });
  const ctx = useContext(AuthContext);

  const handleRadioChange = (newSelected) => {
    setData((prev) => ({ ...prev, smoking_policy: { en: newSelected[0] } }));
  };

  useEffect(() => {
    document.title = "Room Details";
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log({ ...ctx.RoomInfo, ...data });
    ctx.setRoominfo({});
    const {
      name,
      type,
      price_per_night,
      description,
      available_rooms,
      capacity,
      smoking_policy,
      size,
    } = data;
    if (
      !name ||
      !type.en ||
      !smoking_policy.en ||
      price_per_night <= 2 ||
      available_rooms < 0 ||
      size <= 0 ||
      (capacity.adults === 0 && capacity.children === 0)
    ) {
      setError("Please fill all required fields.");
      return;
    } else if (description?.en?.length < 25) {
      setError("description should be more than 10 charachters.");
      return;
    }
    ctx.setRoominfo({...data });
    navigate("/BedDetails");
  };

  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[90vw] h-screen  mb-[700px]">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper clickHandeler={() => navigate("/CompleteProfie")}>
            <div className="ml-[10px] sm:ml-[150px]">
              <ProgressSteps pageNumber={2} count={4} />
            </div>
            <div>
              <CreateCardContainer>
                <Title Title="Room Details" />
                <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                  <InputField
                    editt={false}
                    label="Room Name"
                    name="Room Name"
                    className="w-[96%]"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  <div className="my-[10px]">
                    <Select
                 
                      options={appData.RoomType}   
                      onChange={(Selected) => {
                        const data=Selected.value
                        console.log(data,"")
                        setData((pre) => ({ ...pre, type: { en:data} }));
                      }}
                      isSearchable={false}
                    />
                  </div>
                  <InputField
                    editt={false}
                    label="Description"
                    textarea={true}
                    name="Room Name"
                    className="w-[96%]"
                    onChange={(e) => {
                        setData((prev) => ({
                          ...prev,
                          description: { en:e.target.value},
                        }));
                      } 
                 
                    }
                  />
                  <Counter
                    label="How many rooms of this type do you have?"
                    CounterNmberHandeler={(num) => {
                      setData((prev) => ({
                        ...prev,
                        available_rooms: num,
                      }));
                    }}
                  />
                </div>
                <div className="font-usedFont p-[20px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
                  <Counter
                    label="Price per night (USD)"
                    CounterNmberHandeler={(num) => {
                      setData((prev) => ({
                        ...prev,
                        price_per_night: num,
                      }));
                    }}
                  />
                  <p>Including taxes, commission and charges</p>
                  <Counter
                    label="Room size (m²)"
                    CounterNmberHandeler={(num) => {
                      setData((prev) => ({
                        ...prev,
                        size: { value: num },
                      }));
                    }}
                  />
                  <p>Room Capacity</p>
                  <div>
                    <CapacityRoom
                      label={"Adults"}
                      icon={Adult}
                      valueHandler={(num) => {
                        setData((prev) => ({
                          ...prev,
                          capacity: { ...prev.capacity, adults: num },
                        }));
                      }}
                    />
                    <CapacityRoom
                      label={"Children"}
                      icon={Childrens}
                      valueHandler={(num) => {
                        setData((prev) => ({
                          ...prev,
                          capacity: { ...prev.capacity, children: num },
                        }));
                      }}
                    />
                  </div>
                </div>
                <div className="font-usedFont pl-4 pb-7  ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[10px]">
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
              </CreateCardContainer>
            </div>{" "}
            <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default RoomDetail;
