import React from "react";
import style from "../common/ChoisenHotel.module.css";
function ImgContainer({img, stepCompleted}) {
 
    return (
   <div className={`${style.imgeContainer} ${stepCompleted ? style.imgeContainerColor:null}`}>
          <img src={img} alt="Step Icon" />
        </div>
      );
 
}

export default ImgContainer