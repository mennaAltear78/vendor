import React, { useState } from "react";
import classes from "./ChoisenHotel.module.css";
function Counter(props) {
  const [number, setnumber] = useState(0);
  const decHandeler = () => {
    if (number < 1) return;
    const newNumber = number - 1;
    setnumber(newNumber);
    props.CounterNmberHandeler(newNumber);
  };

  const incHandeler = () => {
    const newNumber = number + 1;
    setnumber(newNumber);
    props.CounterNmberHandeler(newNumber);
  };
  return (
    <div className={props.big && classes.counetrContainer}>
      <p>{props.label}</p>
      <div
        className={`
    ${props.frame ? classes.Counter2 : classes.Counter}
    ${props.big ? "h-[38px] sm:w-[150px]" : "h-[27px] sm:w-[110px]"}
  `}
      >
        {" "}
        <div>
          {" "}
          <button
            className={"bg-[#4e4e505e] flex items-center justify-center"}
            type="button"
            onClick={decHandeler}
          >
            -
          </button>{" "}
        </div>
        <p> {number}</p>
        <div>
          {" "}
          <button
            className={"bg-[blue] flex items-center justify-center"}
            type="button"
            onClick={incHandeler}
          >
            +
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Counter;
