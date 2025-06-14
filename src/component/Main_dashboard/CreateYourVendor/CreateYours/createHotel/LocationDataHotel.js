import{ useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationGoogltMap from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/LocationGoogltMap";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import ProgressSteps from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../../common/Title";
import TextField from "../../../../Authentication/regular_components/TextField";
import PopupMessage from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import api from "../../../../../services/axiosInstance";
import CreateCardContainer from "../../common/CreateCardContainer";
import { AuthContext } from "../../../../Authentication/Context/auth-context";

const SUCCESS_MESSAGE =
  "Hotel has been created successfully! Now, proceed to the second step to upload images.";

function LocationDataHotel() {
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const [pop_upMessage, SetPop_upMessage] = useState();
  const [longitude, setLongitude] = useState(""); // Stores the longitude
  const [latitude, setLatitude] = useState(""); // Stores the latitude
  const [isLoading, setIsLoading] = useState(false);

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const cityRef = useRef();
  const country = useRef();
  const mapRef = useRef();

  useEffect(() => {
    ctx.setHotelinfo((prevInfo) => ({
      ...prevInfo,
      latitude,
      longitude,
    }));
  }, [longitude, latitude]);

  const onSumbitHandeler = async (e) => {
    e.preventDefault();
    let ErrorMessage = false;
    if (latitude === "" || longitude === "") {
      setError("Please choose a location from the map.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post("hotel", ctx.HotelInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      ctx.setspecificHotelId(response?.data?.data?.hotel?._id);
    } catch (error) {
      ErrorMessage = true;
      SetPop_upMessage(
        error?.response?.data?.message === undefined
          ? SUCCESS_MESSAGE
          : error?.response?.data?.message
      );
    }
    setIsLoading(false);
    SetPop_up(true);
  };
  const setlocationHandeler = (location, city, countryy, log, lat) => {
    mapRef.current.value = location;
    country.current.value = countryy;
    cityRef.current.value = city;

    setLongitude(log);
    setLatitude(lat);
  };

  const CancelHandeler = () => {
    if (pop_upMessage === SUCCESS_MESSAGE) {
      navigate("/CompleteProfie");
      ctx.setHotelImageDone((prevSteps) => [...prevSteps, 2]);
    } else {
      navigate("/CompleteProfie");
      SetPop_up(false);
    }
  };

  const GoToHandeler = () => {
    navigate("/HotelImages");
    ctx.setHotelImageDone((prevSteps) => [...prevSteps, 2]);
  };
    useEffect(() => {
      document.title = "Location Data Hotel";
    }, []);
  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onSumbitHandeler}
        className="w-[100vw] h-screen  mb-[700px]"
      >
        <div className="sm:w-[88vw] w-[100vw]">
          <CreateHotelWrapper
            clickHandeler={()=> navigate(-1)}
            isLoading={isLoading}
          >
            <div className="">
              <div className="ml-[10px] sm:ml-[150px]">
                <ProgressSteps pageNumber={7} count={7} circle={true} />
              </div>
              <CreateCardContainer>
                <Title
                  Title="What is your Loaction?"
                  description="To Start Choose your Location from the map "
                />
                <div className="pl-5 border-solid m-1 rounded-[10px] pr-5 pt-4 pb-4 border-[#8080801c] border-[2px] ml-3">
                 
                <div className="gap-2 sm:flex  ">
                  <TextField
                    label="Country"
                    Intext="Name"
                    textfild="textBoxSmall"
                    ref={country}
                    disabled={true}
                  />
                  <TextField
                    label="City"
                    Intext="choose Form"
                    textfild="textBoxSmall"
                    ref={cityRef}
                    disabled={true}
                  />
                </div>
                <div>
                  <TextField
                    label="Address Details"
                    Intext="Grab it from Map"
                    ref={mapRef}
                    textfild="textBox"
                    disabled={true}
                  />
                  <LocationGoogltMap
                    styling={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    setlocation={setlocationHandeler}
                  />
                </div> </div>
              </CreateCardContainer>
            </div>
            {error ? <p className="text-red-700">{error}</p> : null}
          </CreateHotelWrapper>
        </div>
      </form>
      {isPop_up && (
        <PopupMessage
          error={true}
          popMessageCss="popupMain"
          CancelbtnCss="blueCssS"
          highlighted={pop_upMessage}
          color={pop_upMessage === SUCCESS_MESSAGE ? true : false}
          messageImg={gif}
          cancel={pop_upMessage === SUCCESS_MESSAGE ? true : false}
          btnCss="whiteCssS"
          btnMessage2="Go to"
          btnMessage1="Avoid"
          cancelHandeler={CancelHandeler}
          close={true}
          handlebackNavigation={GoToHandeler}
          handleTogglePopup={CancelHandeler}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default LocationDataHotel;
