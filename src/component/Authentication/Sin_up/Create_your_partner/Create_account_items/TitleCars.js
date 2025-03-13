import React from 'react'
import style from './TitleCard.module.css'
import icon from '../../../../../Assets/buildings-2.svg'
function TitleCars(props) {
  return (
    <div className={style['titleCss']}>
        <img src={props.icon}/>
        <p>{props.name}</p>
    </div>
  )
}

export default TitleCars