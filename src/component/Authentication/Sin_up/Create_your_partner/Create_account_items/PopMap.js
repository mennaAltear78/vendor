import React, { useState } from "react";
import style from "./PopupMessage.module.css";
import Button from "../../../regular_components/Button";
import messageImg from "../../../../../Assets/message-sent-P4zHrKyEAE.svg";
import { Link, useNavigate } from "react-router-dom";
import Location from "./Location";
import LocationGoogltMap from "./LocationGoogltMap";
function PopMap(props) {
  const navigate = useNavigate();

  const [longitude, setLongitude] = useState(""); // Stores the longitude
  const [latitude, setLatitude] = useState(""); // Stores the latitude
  const [placeName, setPlaceName] = useState("");

  const handleDelayedNavigation = () => {
    props.handleTogglePopup(placeName, longitude, latitude); // تنفيذ الإجراء المطلوب قبل التوجيه
    setTimeout(() => {
      // navigate("/");
    }, 650);
  };
  const classes1 = [
    style[props.popMessageCss],
    props.shown === "entering"
      ? style["popupClose1"]
      : props.shown === "exiting"
      ? style["popupOpen1"]
      : null,
  ];

  const displayNameHandeler = (place, longitude, latitude) => {
    setPlaceName(place);
    setLongitude(longitude);
    setLatitude(latitude);
  };
  const PlaceHandeler =(address,location)=>{
   console.log(address,location);
   
  }
  return (
    <div>
      <div ref={props.ref} className={style["overlay"]}>
        <div className={classes1.join(" ")}>
          <Location containerSize='LargeContainerSize' displayNameHandeler={displayNameHandeler}/>
          {/* <LocationGoogltMap containerStyle="pop" PlaceHandeler={PlaceHandeler} /> */}
          <div style={{marginTop:'30px'}}>
           
            <Button
              btnCss={props.btnCss}
              name="okay"
              onClickAction={handleDelayedNavigation}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopMap;
