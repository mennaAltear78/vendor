import React, { forwardRef } from "react";
import Style from "./TextField.module.css";

const TextField = forwardRef((props, ref) => {
  return (
    <div>
      <div className={Style["label"]}>
        <label>{props.label}</label>
      </div>
      {props.textarea ? (
        <textarea placeholder="" rows="5" cols="40"></textarea>
      ) : (
        <input
          ref={ref} // ✅ استخدم ref هنا بشكل صحيح
          className={`${Style[props.textfild]} ${
            props.IsError && Style.focusError
          }`}
          type={props.type || "text"} // Default to "text" if no type is provided
          name={props.name}
          placeholder={props.Intext}
          onBlur={props.onblurHandeler}
          value={props.value}
          onChange={props.OnchangeHnadeler}
        />
      )}
    </div>
  );
});

export default TextField;
