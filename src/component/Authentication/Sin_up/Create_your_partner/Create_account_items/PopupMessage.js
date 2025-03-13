import React from "react";
import style from "./PopupMessage.module.css";
import Button from "../../../regular_components/Button";
import closeImge from "../../../../../Assets/icons/Frame 1707481067.png";
function PopupMessage(props) {
  const classes1 = [
    style[props.popMessageCss],
    props.shown === "entering"
      ? style["popupClose1"]
      : props.shown === "exiting"
      ? style["popupOpen1"]
      : null,
  ];
  const classes2 = [
    style["overlay"],
    props.shown === "entering"
      ? style["popupClose"]
      : props.shown === "exiting"
      ? style["popupOpen"]
      : null,
  ];

  return (
    <div>
      <div ref={props.ref} className={classes2.join(" ")}>
        <div className={classes1.join(" ")}>
          {props.close && (
            <div className={style.close}>
        
              <img src={closeImge} onClick={props.cancelHandeler} />
            </div>
          )}
          {props.messageImg && (
            <img style={{ width: "300px" }} src={props.messageImg} />
          )}

          <h2>{props.title}</h2>
          <div className={style.desc} style={{width:'58%'}}>
            {props.highlighted && (
              <span style={{ color: props.color?"green":"red" }}>{props.highlighted}</span>
            )}
            {props.details}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <Button
              btnCss={props.btnCss}
              name={props.btnMessage1 || "okay"}
              onClickAction={props.handleTogglePopup}
            >
              Close
            </Button>
            {props.cancel && (
              <Button
                btnCss={props.CancelbtnCss}
                name={props.btnMessage2 || "okay"}
                onClickAction={props.handlebackNavigation}
              >
                Close
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupMessage;
