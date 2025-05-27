import React, { useContext, useEffect, useState } from "react";
import classes from "../CreateHotel.module.css";
import appData from "../../../../../config/appData";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import Title from "../../common/Title";
import ChoisenHotel from "../../common/ChoisenHotel";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../Authentication/Context/auth-context";


function ChooseHotel() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!selectedHotel) {
      setError("you should choise one");
      return;
    }
    ctx.setHotelinfo({
      ...ctx.HotelInfo,
      type: {
        en: "Hotel",
      },
    });
    navigate("/AboutHotel");
  };

  const clickPrivHandeler = () => {
    navigate(-1); 
  };

  useEffect(() => {
    document.title = "About your hotel";
  }, []);

  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onClickHandler}
        className="w-[100vw] h-screen ml-[10px] sm:ml-[150px] "
      >
        <div className="w-[90vw]">
          <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
            <div >
              <ProgressSteps pageNumber={1} count={7} circle={true} />
              <Title
                Title="Choose Your Property Type"
                description="To start choose the type of property you need."
              />

              <div className="flex flex-wrap gap-[10px]  mb-[160px] justify-center sm:justify-start sm:ml-[20px] ">
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
            {error && (
              <p className="text-red-600 ml-[40px] mt-[-90px] mb-[100px]">
                {error}
              </p>
            )}
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default ChooseHotel;
