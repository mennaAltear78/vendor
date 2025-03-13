import React, { useState } from 'react'
import classes from './ChoisenHotel.module.css'
function Counter(props) {
    const [number ,setnumber]=useState(0)
    const decHandeler=()=>{
        if(number<1)return
        setnumber(number-1)
    }
    const incHandeler=()=>{
        setnumber(number+1)
    }
  return (
    <div className={props.big&&classes.counetrContainer}>
        <p>
           { props.label}
        </p>
    <div className={props.frame?classes.Counter2:classes.Counter} style={{height:props.big?'38px':'27px',width:props.big? '150px':'110px'}}>
     <div > <button className={props.frame&&classes.counetrGray}  type='button'onClick={decHandeler}>
        -
       </button>  </div>  
      <p> {number}</p>
      <div >  < button className={props.frame&&classes.counterBlue}type='button'onClick={incHandeler}>
        +
       </button>  </div> 
    </div></div>
  )
}

export default Counter