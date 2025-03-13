import React from "react";
import classes from "../CreateYours/CreateHotel.module.css";
import Apartement from "../../../../Assets/icons/house.svg";
import completed from "../../../../Assets/ep_success-filled.svg";
import Button from "../../../Authentication/regular_components/Button";
import ImgContainer from "./ImgContainer";

export const StepCard = ({ stepNumber, title, description,stepCompleted,handlingBtnAction }) => {
  return (
    <div className={classes.CompleteProfie}>
      <div style={{ display: "flex", height: "100%" ,alignItems: 'center' ,marginTop:"10px"}}>
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
