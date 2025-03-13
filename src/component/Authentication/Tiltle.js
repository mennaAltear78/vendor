import React from 'react'
import style from './Title.module.css'
function Tiltle(props) {
  return (
    <div className={style['titlee']}> 
       <b >{props.title}</b>
       <p style={{ color: 'gray',fontSize:'15px'}}>
         {props.title_discription}</p>
         
        </div>
  )
}

export default Tiltle