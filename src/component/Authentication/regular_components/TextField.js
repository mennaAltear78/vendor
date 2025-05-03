import React, { forwardRef } from "react";
import Style from "./TextField.module.css";

const TextField = forwardRef((props, ref) => {
  return (
    <div>
      <div className={Style["label"]}>
        <label>{props.label}</label>
      </div>
      {props.textarea ? (
        <textarea    className={`${Style[props.textfild]} ${
          props.IsError && Style.focusError
        }`} placeholder={props.Intext} disabled={props.disabled}  name={props.name} value={props.value}  onChange={props.OnchangeHnadeler} rows="5" cols="2040"  ></textarea>
      ) : (
        <input
          ref={ref} 
          className={`${Style[props.textfild]} ${
            props.IsError && Style.focusError
          }`}
          type={props.type || "text"} // Default to "text" if no type is provided
          name={props.name}
          placeholder={props.Intext}
          onBlur={props.onblurHandeler}
          value={props.value}
          disabled={props.disabled}
          onChange={props.OnchangeHnadeler}
        />
      )}
    </div>
  );
});

export default TextField;
