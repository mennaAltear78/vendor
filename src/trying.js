// import React, { useState } from "react";
// import Button from "./component/Authentication/regular_components/Button";
// import "./App.css";
// import usehook from "./usehook";

// function trying() {
//   const {
//     value: enteredName,
//     hasError: errorNameValidation,
//     cssvalueFormate: classNameFormate,
//     valueChangeHandeler: inputNameHnadeler,
//     inputBlurHander: onBlurNameHandeler,
//     resetValue:resetName
//   } = usehook((value)=> value.trim() !== "");
 
//   const {
//     value: enteredEmail,
//     hasError: errorEmailValidation,
//     cssvalueFormate: classEamilFormate,
//     valueChangeHandeler: inputEmailHnadeler,
//     inputBlurHander: onBlurEmailHandeler,
//     resetValue:resetEmail
//   } = hook((value)=> value.includes("@"));

//   let formValidatiy = false;
//   console.log(errorNameValidation,errorEmailValidation);
  
//   if (!errorNameValidation && !errorEmailValidation ) {
//     //each time errorValidation change the condition be checked
//     //it will see if all the impots it no error inside them then formValidatity will be true
//     formValidatiy = true;
//   }
//   const onsumbitHnadeler = (e) => {
//     e.preventDefault();
//     if (!formValidatiy) return;  
//     resetName()
//     resetEmail()
//   };

//   return (
//     <form onSubmit={onsumbitHnadeler}>
//       <div>
//         <label>Name</label>
//         <input
//           className={classNameFormate}
//           type="text"
//           onChange={inputNameHnadeler}
//           onBlur={onBlurNameHandeler}
//           value={enteredName}
//         />
//         {errorNameValidation && <p>some thing went wrong !!!</p>}
//         <label>Email</label>
//         <input
//           className={classEamilFormate}
//           type="text"
//           onChange={inputEmailHnadeler}
//           onBlur={onBlurEmailHandeler}
//           value={enteredEmail}
//         />
//         {errorEmailValidation && <p>some thing went wrong !!!</p>}
//       </div>
//       <Button disabled={!formValidatiy } btnCss="blueCss" name="submit" />
//     </form>
//   );
// }

// export default trying;
