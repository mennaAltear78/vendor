import React, { useState } from "react";

function CustomHook(fields) {
  const [enteredValue, setenterValue] = useState("");
  const [formValueTouched, setFormIsValueTouched] = useState(false);

//   const valueIsValied = handelvalueValidation(enteredValue);
  const IsError = formValueTouched && enteredValue.trim()==='';
 
 
  const onbluerHnadeler = () => {
    setFormIsValueTouched(true);
  };
  const inputChangeHandeler = (e) => {
    setenterValue(e.target.value);
  };
//   const resetValueAfterSubmit = () => {
//     setenterValue("");
//     setFormIsValueTouched(false);
//   };
  return {
    IsError: IsError, //i will take those
    // value: enteredValue,
    blurHander: onbluerHnadeler, //i will play with those
    inputChange: inputChangeHandeler,
    
  };
}

export default CustomHook;
