import React from "react";
import classes from "./ChoisenHotel.module.css";

function ChoisenHotel(props) {


  return (
    <div
      className="sm:w-[220px] w-[300px] h-[200px] font-usedFont border-solid text-[13px] border-2 border-[#80808071] rounded-[15px] p-[10px] mt-[50px]"
      style={props.selected
        ? { backgroundColor: "rgba(255, 123, 0, 0.17)", borderColor: "orange" }
        : {}}
    >

      <label className={classes.choice}>
        <div className={classes.OptionDiv}>
          <input
            type="radio"
            name="choice"
            value={props.Title}
            className={classes.custom_radio}
            onChange={props.onSelect}
          // checked={props.selected} 
          />
          <span className={classes.custom_radio_label}></span>
        </div>
        <div className={classes.mainDescription}>
          <div className={classes.imgeContainer}>

            <div
              className="w-10 h-10 bg-center bg-no-repeat bg-contain font-usedFont"
              style={{ backgroundImage: `url(${props.icon})` }}
            >      <props.icon className="w-full text-red-100 fill-current" /></div>

          </div>
          <b className="text-[gray] -mb-[100px]" >{props.Title}</b>
          <p style={{ color: props.selected && 'orange' }} className="-mb-[100px] text-[15px] text-[gray">{props.desription}</p>
        </div>
      </label>
    </div>
  );
}

export default ChoisenHotel;









