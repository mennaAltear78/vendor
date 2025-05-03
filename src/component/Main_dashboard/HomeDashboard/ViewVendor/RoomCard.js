import React from "react";
import DotMenu from "../DotMenu";

const RoomCard = ({ images, name, main_facilities}) => {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          src={images[0]}
          className="w-[340px]  h-[100px] rounded-lg object-cover mt-2"
        />
      </div>
      <div className="p-3 mt-[-20px]">
        <div className="flex items-center justify-between">
          <p>{name}</p>
          <DotMenu />
        </div>
        <div className="flex flex-wrap gap-2 mt-[-14px]">
          {main_facilities.map((facility, index) => (
            <div
              key={index}
               className="flex items-center text-[#383737] font-normal leading-tight"
            >
              <span class="material-symbols-outlined text-[10px]">festival</span>
              <span className="text-[10px]">{facility?.name}</span>
            </div>
          ))}
        </div>

        <div className="flex mt-[5px] ">
          <div className="bg-[#ffa60065] text-[orange] px-[3px] text-[13px] rounded-[3px]">
            Twin
          </div>
        </div>
        <div className="flex justify-between mt-[-9px] font-normal">
          <p >
               235/<span className="text-[#808080be]">night</span>
          </p>
     
          <p className="text-[#808080b0]">
          Availability 2/12 
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
