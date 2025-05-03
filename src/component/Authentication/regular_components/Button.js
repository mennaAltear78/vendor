import React from "react";
import style from "./Button.module.css";
function Button(props) {
  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClickAction}
        className={style[props.btnCss] ||props.style}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
