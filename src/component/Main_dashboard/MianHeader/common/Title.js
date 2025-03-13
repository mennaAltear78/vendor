import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
function Title(props) {
  return (
    <div className={classes.mainBody}>
      <p>
       <b style={{ fontSize: "22px" }}>{props.Title}</b>
        <br />
        <span className={classes.description}>{props.description}</span>
      </p>
    </div>
  );
}

export default Title;
