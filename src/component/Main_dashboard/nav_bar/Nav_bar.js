import React, { useContext } from "react";
import style from "./Nav_bar.module.css";
import icon2 from "../../../Assets/Ellipse 411.png";
import icon3 from "../../../Assets/icon.svg";
import search from '../../../Assets/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import notification from '../../../Assets/notifications_active_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg'
function Nav_bar(props) {

  return (
    <div
      className={`bg-[#1C1EB0] text-white flex justify-between py-1 transition-all duration-500 ${
        !props.hover
          ? "ml-[90px] pr-[20px]" // عندما يكون الـ hover مفعّل
          : "ml-[34px] pr-[40px] pl-[10px] sm:ml-[200px] transition-all duration-300 ease-in-out" // عندما يكون الـ hover غير مفعّل
      }`}>
      <div className={style["headerSection1"]}>
        <div style={{marginRight:'20px'}}>
      
        </div>
        <div>
          <img src={icon2} />
        </div>
        <div className={style.NameCode} >
          <p>Yona Hotel</p>
          <div className={style.Code}>#123423</div>
        </div>
      </div>
      <div className={style["headerSection2"]}>
        <div>
         <div className={style["seachInput"]}>  
          <img style={{width:'30px' ,marginRight:'10px'}} src={search}/>
           <input 
            type="text"
            id="search"
            name="query"
            placeholder="What are you Looking for ?"
          /></div>
       
        </div>
        <div style={{marginLeft:'20px',gap:'5px',display:'flex', marginBottom:'9px'} }>
        <div style={{marginTop:'15px'}} >
          <img src={icon3} />
        </div>
        <div style={{marginTop:'15px',marginRight:'10px'}}>
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
