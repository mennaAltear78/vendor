import React from "react";
import Style from "./TextField.module.css";

function TextField(props) {
  return (
    <div>
      <div className={Style["label"]}>
        <label>{props.label}</label>
      </div>
      {props.textarea ? (
        <textarea placeholder="" rows="5" cols="40"></textarea>
      ) : (
        <input
          ref={props.ref}
          className={`${Style[props.textfild]} ${
            props.IsError && Style.focusError
          }`}
          type={props.type || "text"} // Default to "text" if no type is provided
          id="name"
          name={props.name}
          placeholder={props.Intext}
          onBlur={props.onblurHandeler}
          value={props.value}
          onChange={props.OnchangeHnadeler}
        />
      )}
    </div>
  );
}

export default TextField;
