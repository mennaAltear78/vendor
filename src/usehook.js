import React, { useState } from "react";

function hook(handelvalueValidation) {
  const [enteredValue, setenteredValue] = useState("");
  const [formValueTouched, setFormIsValueTouched] = useState(false);

  const inputValueNotEmpty = handelvalueValidation(enteredValue); //condition of the textFiled
  // const errorValidation = !inputValueNotEmpty && formValueTouched;

  // const classFormate = !errorValidation ? "" : "formwithoutErr";

  const inputHnadeler = (e) => {
    setenteredValue(e.target.value);
  };

  const onBlurHandeler = () => {
    setFormIsValueTouched(true);
  };
  const reset = () => {
    setenteredValue("");
    setFormIsValueTouched(false);
  };
  return {
    value: enteredValue,
    hasError: errorValidation,
    cssvalueFormate: classFormate,
    valueChangeHandeler: inputHnadeler,
    inputBlurHander: onBlurHandeler,
    resetValue: reset,
  };
}

export default hook;
