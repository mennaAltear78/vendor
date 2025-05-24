import React, { useState } from 'react'
import Nav_bar from '../../Main_dashboard/nav_bar/Nav_bar';
import SideBar from '../../Main_dashboard/Side_bar/SideBar';

function MainDashBoardWrapper(props) {
    const [hover, setIsHovered] = useState(false);
    const onHoverHandeler = () => {
      setIsHovered(true);
    };
    const onHoverNoHandeler = () => {
      setIsHovered(false);
    };
  return (
    <div>
    <Nav_bar
      hover={hover}
      onHoverHandeler={onHoverHandeler}
      onHoverNoHandeler={onHoverNoHandeler}
    />
    <div >
      <div    className='sm:flex hidden '>

        <SideBar
  
      hover={hover}
      onHoverHandeler={onHoverHandeler}
      onHoverNoHandeler={onHoverNoHandeler}
    /></div>
    {props.children}
    </div>   
  </div>
  )
}

export default MainDashBoardWrapper