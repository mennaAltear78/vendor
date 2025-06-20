import React from 'react'
import icon from '../../Assets/Frame 1707479953.svg'
import icon2 from '../../Assets/Frame 1707481174.svg'

function Header() {
  return (
    <div className=" flex justify-between px-[10px] mb-[50px] items-center mt-[10px] sm:mb-[-60px] sm:w-[95%]">
     <div><img src={icon}/></div> 
     <div><img src={icon2}/></div>
    </div>
  )
}

export default Header
