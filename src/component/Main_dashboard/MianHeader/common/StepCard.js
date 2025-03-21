import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
import Apartement from "../../../../Assets/icons/house.svg";
import completed from "../../../../Assets/ep_success-filled.svg";
import Button from "../../../Authentication/regular_components/Button";
import ImgContainer from "./ImgContainer";

export const StepCard = ({ stepNumber, title, description,stepCompleted,handlingBtnAction }) => {
  return (
    <div className="font-usedFont pl-2 p-1 ml-0 ms:ml-5 w-[200px] sm:w-[850px] border-solid border-2 border-gray-400/20 rounded-[25px] text-[15px] flex flex-wrap justify-between items-center mb-4">
     <div className="flex h-full items-center mt-2">
     <ImgContainer stepCompleted={stepCompleted} img={stepCompleted?completed:Apartement}/>
        <div className={classes.StepContent}>
          <p>
            Step {stepNumber} <br />
            <b style={{fontSize:'20px'}}>{title}</b>
            <br />
         <span style={{color:'gray'}}>{description}</span>   
          </p>
        </div>
      </div>
      <Button btnCss="completeProfileBtn" type='button' onClickAction={handlingBtnAction} name={stepCompleted?"Edit":stepNumber===1?'complete your profile':"complete"} />
    </div>
  );
};
