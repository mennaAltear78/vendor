import { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import appData from "../../../../../config/appData";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import api from "../../../../../services/axiosInstance";
import CreateCardContainer from "../../common/CreateCardContainer";
import Error from "../../common/Error";
import RoomSelectFacilities from "../../common/commonRoom/RoomSelectFacilities"; 
import { AuthContext } from "../../../../Authentication/Context/auth-context";

function BathRoomFacilities() {
  const [selectedRoom, setSelectedRoom] = useState({
    view: { en: [] },
    available_in_your_own_bathroom: { en: [] },
  });
  const [Loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();
useEffect(() => {
  const newData = {
    ...ctx.RoomInfo,
    hotel: ctx.IdSpesificHotel,
    ...selectedRoom,
  };

  // ما تحدثش إلا لو فعلاً في فرق
  if (JSON.stringify(ctx.RoomInfo) !== JSON.stringify(newData)) {
    ctx.setRoominfo(newData);
  }
}, [selectedRoom, ctx.IdSpesificHotel]);
  const onClickHandler = async (e) => {
    e.preventDefault();
    if (
      selectedRoom.view.en.length === 0 ||
      selectedRoom.available_in_your_own_bathroom.en.length === 0
    ) {
      setError("you should select language");
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post(
        "rooms",
        { ...ctx.RoomInfo }, // ده البودي اللي هيتبعت للسيرفر
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      ctx.SetRoomId(response?.data?.data?._id);
    } catch (error) {
      console.error("Error logging out:", error.response.data.message);
    }
    SetPop_up(true);
    setIsLoading(false);
  };

  const CancellHandeler = () => {
    ctx.setHotelImageDone((prevSteps) => [...prevSteps, 4]);
    navigate("/CompleteProfie");
  };
  const GoToHandeler = () => {
    ctx.setHotelImageDone((prevSteps) => [...prevSteps, 4]);
    navigate("/RoomFacilities");
  };
  return (
    <MainDashBoardWrapper>
      <form onSubmit={onClickHandler} className="w-[88vw] mb-[100px]  ">
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper
            clickHandeler={() => navigate("/BedDetails") }
            isLoading={Loading}
          >
            <div className="ml-[10px] sm:ml-[150px]">
              <ProgressSteps pageNumber={5} count={5} />
            </div>
            <div>
              <div>
                <CreateCardContainer>
                  <RoomSelectFacilities
                    title="Room views"
                    options={appData.RoomViews}
                    onChange={(e) => {
                      setSelectedRoom((prev) => ({
                        ...prev,
                        view: {
                          ...prev.view,
                          en: e,
                        },
                      }));
                    }}
                  />
                  <RoomSelectFacilities
                    description=" Which bathroom items are available in this room?"
                    title="Bathroom Facilities"
                    options={appData.BathroomFacilities}
                    onChange={(e) => {
                      setSelectedRoom((prev) => ({
                        ...prev,
                        available_in_your_own_bathroom: {
                          ...prev.available_in_your_own_bathroom,
                          en: e,
                        },
                      }));
                    }}
                  />
                </CreateCardContainer>
              </div>
            </div>
            <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
      {isPop_up && (
        <PopupMessage
          popMessageCss="popupMain"
          details="Now, proceed to upload images for the room. 😊📸"
          CancelbtnCss="blueCssS"
          highlighted="The room has been created successfully!"
          messageImg={gif}
          cancel={true}
          btnCss="whiteCssS"
          btnMessage2="Go to"
          btnMessage1="Avoid"
          cancelHandeler={CancellHandeler}
          handlebackNavigation={GoToHandeler}
          close={true}
          handleTogglePopup={CancellHandeler}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default BathRoomFacilities;
