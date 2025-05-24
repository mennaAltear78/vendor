import React, { useContext } from "react";
import style from "./Nav_bar.module.css";
import icon2 from "../../../Assets/Ellipse 411.png";
import icon3 from "../../../Assets/icon.svg";
import search from '../../../Assets/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import notification from '../../../Assets/notifications_active_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg'
import { useNavigate } from "react-router-dom";
function Nav_bar(props) {
  const navigate=useNavigate()
 const profileViewHandeler=()=>{
navigate('/profileView')

 }

  return (
    <div
      className={`bg-[#1C1EB0]  font-usedFont text-white flex justify-between py-1 transition-all duration-500 ${
        !props.hover
          ? "sm:ml-[90px] pr-[20px] " // عندما يكون الـ hover مفعّل
          : "ml-[34px] pr-[40px] pl-[10px] sm:ml-[200px] transition-all duration-300 ease-in-out" // عندما يكون الـ hover غير مفعّل
      }`}>
      <div className={style["headerSection1"]}>
        <div className="mr-[20px]" >
      
        </div>
        <div>
          <img src={icon2} className="cursor-pointer" onClick={profileViewHandeler} />
        </div>
        <div className={style.NameCode} >
          <p>Yona Hotel</p>
          <div className={style.Code}>#123423</div>
        </div>
      </div>
      <div className={style["headerSection2"]}>
        <div>
  
<div className="sm:flex hidden  w-[400px]  h-[40px]  items-center border-solid border-[1px] border-white/50 focus-within:border-white overflow-hidden rounded-[10px] pl-[20px] bg-transparent">
 <img className="w-[30px] mr-[10px]" src={search}/>
  <input
    type="text"
    placeholder="Search..."
    className="w-[400px] text-white text-[17px] placeholder-white placeholder:text-[15px] bg-transparent outline-none border-none"
  />
</div>

        </div>
        <div className="ml-[20px] hidden mb-[9px] gap-[5px] sm:flex">
        <div className="mt-[15px]"
 >
          <img src={icon3} />
        </div>
        <div className="mt-[15px] mr-[10px]"
>
          <img src={icon3} />
        </div></div>
        <div className={style.notification}>
          <img src={notification} />
        </div>
      </div>
    </div>
  );
}

export default Nav_bar;
