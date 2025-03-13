import React from 'react'
import classes from './SpinnerLoading.module.css'
function SpinnerLoading(props) {
  console.log("hello");
  
  return (
    <div className={props.spinner?classes["overlay"]:classes["spinner-container"]}>
    <div className={props.spinner?classes["spinnerbig"]:classes["spinner"]}></div>
  </div>
  )
}

export default SpinnerLoading