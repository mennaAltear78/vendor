import React, { useState } from "react";
import style from "./PopupMessage.module.css";
import Button from "../../../regular_components/Button";
import { useNavigate } from "react-router-dom";
import Location from "./Location";

function PopMap(props) {
  const navigate = useNavigate();

  const [longitude, setLongitude] = useState(""); // Stores the longitude
  const [latitude, setLatitude] = useState(""); // Stores the latitude
  const [placeName, setPlaceName] = useState("");

  const handleDelayedNavigation = () => {
    props.handleTogglePopup(placeName, longitude, latitude); // تنفيذ الإجراء المطلوب قبل التوجيه
    setTimeout(() => {
  
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

  return (
    <div>
      <div ref={props.ref} className={style["overlay"]}>
        <div className={classes1.join(" ")}>
          <Location containerSize='LargeContainerSize' displayNameHandeler={displayNameHandeler}/>
        
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
