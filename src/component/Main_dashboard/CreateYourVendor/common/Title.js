import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
function Title(props) {
  return (
    <div className="ml-2 font-[Poppins]">
      <p>
       <b style={{ fontSize: "22px" }}>{props.Title}</b>
        <br />
        <span className={classes.description}>{props.description}</span>
      </p>
    </div>
  );
}

export default Title;
