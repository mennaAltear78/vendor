import React from "react";
import DotMenu from "../comman/DotMenu";


const RoomCard = ({ bed, name, images, description,price_per_night,currency,available_rooms}) => {
  return (
    <div>
      <div className="h-[80%]">
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

        <p className="text-[gray] font-normal mt-[-17px] text-[14px] line-clamp-2">{description}</p>
        <div className="flex mt-[5px] ">
          <div className="flex flex-wrap gap-2 mt-[-14px]">
            {bed.map((bed) => (
              <div className="bg-[#ffa60065] text-[orange] px-[3px] text-[13px] rounded-[3px]">
                {bed.type}
              </div>
            ))}
          </div>
        </div>   
      </div>

      </div>

        <div className="flex justify-between h-[80px] w-[90%] ml-4 mt-[-9px] font-normal text-md items-end">
          <p>
           {price_per_night}/<span className="text-[#808080be]">night</span> {currency}
          </p>

          <p className="text-[#808080b0]">Availability {available_rooms}</p>
        </div>
     
    </div>
  );
};

export default RoomCard;
        {/* <div className="flex flex-wrap gap-2 mt-[-14px]">
          {main_facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-center text-[#383737] font-normal leading-tight"
            >
              <span class="material-symbols-outlined text-[10px]">
                festival
              </span>
              <span className="text-[10px]">{facility?.name}</span>
            </div>
          ))}
        </div> */}