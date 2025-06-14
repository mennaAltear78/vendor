import { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import appData from "../../../../../config/appData";
import { useNavigate } from "react-router-dom";
import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import RoomSelectFacilities from "../../common/commonRoom/RoomSelectFacilities";
import { AuthContext } from "../../../../Authentication/Context/auth-context";

function RoomFacilities() {
  const [selectedRoom, setSelectedRoom] = useState({
    facilities: { en: [] },
    main_facilities: [],
  });
  const [error, setError] = useState(null);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (
      selectedRoom.facilities.en.length === 0 ||
      selectedRoom.main_facilities.length === 0
    ) {
      setError("you should select facility");
      return;
    }
    ctx.setRoominfo({ ...ctx.RoomInfo, ...selectedRoom });
    navigate("/BathRoomFacilities");
  };

  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[88vw] mb-[700px]">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper clickHandeler={() => navigate(-1)}>
            <div className="ml-[10px] sm:ml-[150px]">
              <ProgressSteps pageNumber={4} count={5} />
            </div>
            <div>
              <CreateCardContainer>
                <RoomSelectFacilities
                  description="Room Facilities"
                  title="What can guests use in this room?"
                  options={appData.RoomFacilitie}
                  onChange={(e) => {
                    setSelectedRoom((prev) => ({
                      ...prev,
                      facilities: {
                        ...prev.facilities,
                        en: e,
                      },
                    }));
                  }}
                />
                <div className="mt-[-50px]">
                  <RoomSelectFacilities
                  description="Room Main Facilities"
                  options={appData.RoomMain}
                  onChange={(value) => {
                    const updatedFacilities = value.map((item) => ({
                      name: {
                        en: item,
                      },
                    })); //edit it
                    setSelectedRoom((prev) => ({
                      ...prev, //add previous on
                      main_facilities: updatedFacilities, //add new one
                    }));
                  }}
                />
                </div>
                
              </CreateCardContainer>{" "}
            </div>
            <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
    </MainDashBoardWrapper>
  );
}

export default RoomFacilities;
