import React from "react";
import style from "./Button.module.css";
function Button({name,type,onClickAction ,btnCss,className}) {
  return (
    <div>
      <button
        type={type}
        onClick={onClickAction}
        className={style[btnCss] ||className}
      >
        
        {name}
      </button>
    </div>
  );
}

export default Button;
