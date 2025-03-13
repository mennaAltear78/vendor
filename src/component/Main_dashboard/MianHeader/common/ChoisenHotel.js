import React from "react";
import classes from "./ChoisenHotel.module.css";

function ChoisenHotel(props) {
  return (
    <div
      className={classes.container}
      style= {props.selected 
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
            <img src={props.icon} alt="Hotel" />
          </div>
          <b>{props.Title}</b>
          <p style={ {color:props.selected &&'orange'}}>{props.desription}</p>
        </div>
      </label>
    </div>
  );
}

export default ChoisenHotel;























// import React, { useState } from "react";
// import classes from "./ChoisenHotel.module.css";

// function ChoisenHotel(props) {
//   const [isSelected, setIsSelected] = useState(false);
// console.log(props.selected,props.onselect);
// const onselect=()=>{
//   setIsSelected(true)
// }
//   return (
//     <div
//       className={classes.container}
//       style={{ backgroundColor: props.isSelected? "rgba(255, 166, 0, 0.507)" : "transparent" }}
//     >
//       <label className={classes.choice}>
//         <div className={classes.OptionDiv}>
//           <input
//             type="radio"
//             name="choice"
//             value="option1"
//             className={classes.custom_radio}
//             onChange={props.onselect}
//           />
//           <span className={classes.custom_radio_label}></span>
//         </div>
//         <div className={classes.mainDescription}>
//           <div className={classes.imgeContainer}>
//             <img src={props.icon} alt="Hotel" />
//           </div>
//           <b>{props.Title}</b>
//           <p>{props.desription}</p>
//         </div>
//       </label>
//     </div>
//   );
// }

// export default ChoisenHotel;
