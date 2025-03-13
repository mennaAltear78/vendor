import React from 'react'
import icon from '../../Assets/Frame 1707479953.svg'
import icon2 from '../../Assets/Frame 1707481174.svg'
import style from './Header.module.css'
function Header() {
  return (
    <div className={style['header']}>
     <div><img src={icon}/></div> 
     <div><img src={icon2}/></div>
    </div>
  )
}

export default Header
