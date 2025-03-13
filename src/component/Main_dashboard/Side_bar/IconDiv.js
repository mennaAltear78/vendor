import React from "react";
import classes from "./IconDiv.module.css";
import { NavLink } from "react-router-dom";

function IconDiv(props) {
  return (
    <NavLink
      onClick={props.onclick}
      // className={({ isActive }) => (isActive && classes.activeHover )}
      to={props.path}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div onClick={props.onclick} 
      className={props.isHovered ? classes.MainHover : classes.MainNOHover}>
        <div className={props.isHovered && classes.iconActive }>
          {props.isHovered && props.ActiveLine ? (
            <div className={`${classes.activeHover} ${classes.activeBackground}`} />
          ) : null}
          <div className={classes.icon}>
            <img src={props.img} alt="icon" />
          </div>
          {!props.isHovered && props.ActiveLine ? <div className={classes.activeNoHover} /> : null}
        </div>
        {props.isHovered && <p>{props.label}</p>}
      </div>
    </NavLink>
  );
}

export default IconDiv;

