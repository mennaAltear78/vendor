import React, { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import classes from "../../CreateYours/CreateHotel.module.css";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";
import SquareRadio from "../../common/SquareRadio";
import appData from "../../../../../config/appData";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../Authentication/Context/auth-context";

function Facilities() {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [descriptions, setdescriptions] = useState([]);
  const [active, setActive] = useState({});

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const updatedFacilities = { facilities: [] };
    const missingFacilities = [];

    const trueKeys = Object.entries(active)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);


    selectedFacilities.forEach(
      (facility) => {
        const exists = descriptions.some((item) =>
          Object.keys(item).includes(facility)
        );

        if (!exists) {
          missingFacilities.push({
            facility: { en: facility },
          });
        }
      },

      [selectedFacilities, active, descriptions]
    );

    // console.log("missingFacilities", missingFacilities);

    updatedFacilities.facilities.push(...missingFacilities);

    descriptions.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (value && trueKeys.includes(key)) {
          updatedFacilities.facilities.push({
            facility: { en: key },
            descriptions: { en: value },
          });
        } else if (!value || !trueKeys.includes(key)) {
          updatedFacilities.facilities.push({
            facility: { en: key },
          });
        }
      });
    });
    console.log("updatedFacilities", updatedFacilities);

    updatedFacilities?.facilities.forEach((item) => {
      const hasDescription = item.descriptions && item.descriptions.en;
      const description = hasDescription ? item.descriptions.en : "";
    

      if (hasDescription && description.length < 20) {
        console.log("❌ Description too short or missing.");
        setError("Description too short.");
        return;
      }
      
      setError(null);
      ctx.setHotelinfo({
        ...ctx.HotelInfo,
        ...updatedFacilities,
      });
      
    });
    // console.log("descriptions",descriptions);
  }, [descriptions, selectedFacilities, active]);

  const handleRadioChange = (value, desc, active) => {
    // console.log(value, desc, active);

    setdescriptions(desc);
    setSelectedFacilities(value);
    // console.log("hre",desc);
    setActive(active);
  };
  const clickPrivHandeler = () => {
    navigate(-1);
  };
  const onSumbitHandeler = (e) => {
    e.preventDefault();
    if (selectedFacilities.length === 0) {
      setError("you should select language");
      return;
    }

    Object.entries(active).forEach(([key, value]) => {
      if (value === false) {
        setdescriptions((prev) =>
          prev.map((item) => {
            if (item.hasOwnProperty(key)) {
              return { [key]: "" };
            }
            return item;
          })
        );
      }
    });
    if (!error) {
      navigate("/polices");
    }
  };

  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onSumbitHandeler}
        className="w-[90vw] h-screen  mb-[700px]">
        <div  className="w-[88vw]">
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div >
            <div className="ml-[10px] sm:ml-[150px]">
              <ProgressSteps pageNumber={4} count={7} circle={true} />
             </div>
             
             
             
             <div className="grid justify-center sm:w-full   sm:ml-[150px]  items-center">
              <div className=" bg-[#80808010]  rounded-[20px] p-2">
               
              <Title
                Title="What can guests use at your hotel?"
                descriptions="To Start Choose type of Property You need to do"
              />
           
            <div className="font-usedFont p-[20px] sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
              <b className="text-[20px]">Add Facilities </b>

              <div>
                <SquareRadio
                  round="rounded-[20%]"
                  name="customRadio"
                  options={appData.facilities.map((lang) => ({
                    value: lang.value,
                    label: lang.facilitie,
                  }))}
                  descriptions="Additonal Cost"
                  onChange={handleRadioChange}
                  cost={true}
                  radio={true}
                  AllowanceHandling={() => {}}
                />
              </div>
            </div></div>
            </div> </div>
            {error && <p className="error">{error}</p>}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default Facilities;
