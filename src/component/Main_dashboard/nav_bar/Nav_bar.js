import React, { useContext } from "react";
import style from "./Nav_bar.module.css";
import icon2 from "../../../Assets/Ellipse 411.png";
import icon3 from "../../../Assets/icon.svg";
import search from "../../../Assets/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import notification from "../../../Assets/notifications_active_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../Side_bar/SideBarMobile";
import AuthContext1 from "../../Authentication/Context/Mian-Page-Context";
import { AuthContext } from "../../Authentication/Context/auth-context";
function Nav_bar(props) {
  const ctx =useContext(AuthContext)
  const navigate = useNavigate();
  const profileViewHandeler = () => {
    navigate("/profileView");
  };

  return (
    <div>
      <div className="mb-[60px] sm:hidden flex">
        <MobileMenu profileViewHandeler={profileViewHandeler} />
      </div>
      <div
        className={`bg-[#1C1EB0] sm:flex hidden   font-usedFont text-white  justify-between py-1 transition-all duration-500 ${
          !props.hover
            ? "sm:ml-[90px] pr-[20px] " // عندما يكون الـ hover مفعّل
            : "ml-[34px] pr-[40px] pl-[10px] sm:ml-[200px] transition-all duration-300 ease-in-out" // عندما يكون الـ hover غير مفعّل
        }`}
      >
        <div className={style["headerSection1"]}>
          <div className="mr-[20px]"></div>
          <div>
            <img
              src={icon2}
              className="cursor-pointer"
              onClick={profileViewHandeler}
            />
          </div>
          <div className={style.NameCode}>
            <p >Yona Hotel</p>
            <div className={style.Code}>#123423</div>
          </div>
        </div>
        <div className={style["headerSection2"]}>
          <div>
            <div className="sm:flex hidden lg:w-[400px] md:w-[150px]  h-[40px]  items-center border-solid border-[1px] border-white/50 focus-within:border-white overflow-hidden rounded-[10px] pl-[20px] bg-transparent">
              <img className="w-[30px] mr-[10px]" src={search} />
              <input
                type="text"
                placeholder="Search..."
                className="lg:w-[400px] md:w-[150px] text-white text-[17px] placeholder-white placeholder:text-[15px] bg-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="ml-[20px] hidden mb-[9px]  gap-[5px] sm:flex">
            <div className="mt-[15px] ">
              <img src={icon3} />
            </div>
            <div className="mt-[15px]  m ">
              <img src={icon3} />
            </div>
          </div>
          <div className={style.notification} >
                 <div className="relative">
                   <img className="cursor-pointer" src={notification} onClick={()=>navigate('/MainDashboaed/nNotifications')}/>
                    {ctx.notificationNumber > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5  text-center">
                        {ctx.notificationNumber> 99 ? '99+' : ctx.notificationNumber}
                       
                      </span>
                    )}
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav_bar;
