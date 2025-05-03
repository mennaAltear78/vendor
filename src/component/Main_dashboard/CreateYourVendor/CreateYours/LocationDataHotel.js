import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../Authentication/Context/auth-context";

import LocationGoogltMap from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/LocationGoogltMap";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import ProgressSteps from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/ProgressSteps";
import Title from "../common/Title";
import TextField from "../../../Authentication/regular_components/TextField";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";

import classes from "./CreateHotel.module.css";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";

import api from'../../../../services/axiosInstance'

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
      console.log("id is",response?.data?.data?.hotel?._id);
      
      ctx.SetHotelId(response?.data?.data?.hotel?._id);
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

  const handleBackClick = () => {
    navigate(-1);
  };

  const setlocationHandeler = (location, city, countryy, log, lat) => {
    mapRef.current.value = location;
    country.current.value = countryy;
    cityRef.current.value = city;

    setLongitude(log);
    setLatitude(lat);
  };

  const CancelHandeler = () => {
    console.log("pop up message", pop_upMessage);

    if (pop_upMessage === SUCCESS_MESSAGE) {
      navigate("/CompleteProfie");
      ctx.setHotelImageDone((prevSteps) => [...prevSteps, 2]);
    } else {
      // ctx.setHotelImageDone((prevSteps) => {[prevSteps.filter((item)=>item!==2)]});
      navigate("/CompleteProfie");
      SetPop_up(false);
    }
  };

  const GoToHandeler = () => {
    navigate("/HotelImages");
    ctx.setHotelImageDone((prevSteps) => [...prevSteps, 2]);
  };
  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onSumbitHandeler}
        className="w-[100vw] h-screen ml-[120px] sm:ml-[150px] mb-[400px]"
      >
        <div style={{ width: "100vw" }}>
          <CreateHotelWrapper
            clickHandeler={handleBackClick}
            isLoading={isLoading}
          >
            <div className={classes.mainContaint}>
              <ProgressSteps pageNumber={7} count={7} circle={true} />
              <Title
                Title="What is your Loaction?"
                description="To Start Choose your Location from the map "
              />
              <div className="gap-10 sm:flex ">
                <TextField
                  label="Country"
                  Intext="Name"
                  textfild="textBoxSmall"
                  ref={country}
                  disabled={true}
                  OnchangeHnadeler={() => {}}
                />

                <TextField
                  label="City"
                  Intext="choose Form"
                  textfild="textBoxSmall"
                  ref={cityRef}
                  disabled={true}
                  OnchangeHnadeler={() => {}}
                />
              </div>
            </div>
            <div>
              <TextField
                label="Address Details"
                Intext="Grab it from Map"
                ref={mapRef}
                textfild="textBox"
                disabled={true}
                OnchangeHnadeler={() => {}}
              />
              <LocationGoogltMap
                styling={{
                  width: "60%",
                  height: "300px",
                  borderRadius: "10px",
                }}
                setlocation={setlocationHandeler}
              />
            </div>
            {error ? <p className="text-red-700">{error}</p> : null}
          </CreateHotelWrapper>
        </div>
      </form>
      {isPop_up && (
        <PopupMessage
        
          error={true}
          popMessageCss="popupMain"
          // details={pop_upMessage}
          CancelbtnCss="blueCssS"
          highlighted={pop_upMessage}
          color={pop_upMessage ===SUCCESS_MESSAGE ?true:false}
          messageImg={gif}
          cancel={pop_upMessage ===SUCCESS_MESSAGE ?true:false}
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
