import React from "react";

function TotalCard({bgImageCss,IconCss,iconName,precent}) {
  return (
    <div className="w-[229px] h-[80px] mb-[10px] p-2 pt-0 bg-white rounded-lg font-usedFont ">
      <div className="flex items-center ">
        <div className={` ${bgImageCss} mb-[-10px] rounded-full w-[40px] h-[40px] flex items-center justify-center `}> 
            <span class={`material-symbols-outlined ${IconCss} `}>{iconName}</span></div>
        <div>
          <p className="text-[gray] mb-0 ">Total Booking</p>
          <b>802</b>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px]">
        <p className={`${precent} p-[2px] rounded-lg flex items-center`}>
          <span class="material-symbols-outlined text-[14px]" >moving</span> 20%
        </p>
        <p className="text-[gray]">From Last Month</p>
      </div>
    </div>
  );
}

export default TotalCard;
