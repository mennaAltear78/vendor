import React from 'react'
import style from './Card.module.css'
function Card(props) {
  return (
    <div className={style[props.cssCard]}>
    {props.children}
  </div>
  )
}

export default Card
