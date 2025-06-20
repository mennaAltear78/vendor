import React from 'react'
import style from './Title.module.css'
function Tiltle(props) {
  return (
    <div className="text-center font-usedFont sm:text-[20px] text-[17px] w-[400px]"> 
       <b >{props.title}</b>
       <p className='text-[gray] text-[14px]'>
         {props.title_discription}</p>
         
        </div>
  )
}

export default Tiltle