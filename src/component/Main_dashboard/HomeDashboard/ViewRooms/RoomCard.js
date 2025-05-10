import React from "react";
import { Link } from "react-router-dom";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import DotMenu from "../DotMenu";
import image from "../../../../Assets/Image.svg";
const RoomCardInList = ({ data = {},openRoomCard }) => {
  const data2 = {
    primary_images: [
      image,
      image,
      image,
    ],
  };
  return (
    <Link
      style={{ textDecoration: "none" }}
      className="border-solid text-[black] flex cursor-pointer justify-between p-1 mt-[30px] rounded-[10px] hover:border-[#0000ff79] border-[#8080805a] border-[1px] font-usedFont hover:bg-blue-50 hover:shadow-md transition duration-300 w-full"
      onClick={openRoomCard}
    >
      <div className="flex">
        <PrimaryImage_View
          data={data2}
          DimensionsS="w-[50px] h-[50px]"
          DimentionsB="h-[110px]"
          wd="158px"
        />
        <div>
          <h1 className="text-[20px]">{data?.name || "Room Name"}</h1>
          <p className="text-[#8080809a] text-sm">
            {data?.description || "No description available."}
          </p>

          <div className="bg-[#e4d960a0] mt-[-10px] w-14 rounded-[4px] text-[#ffae00] p-[4px] text-[10px]">
            {data?.type || "Room Type"}
          </div>
          <div className="flex items-end h-[80px]">
          <div className="mt-[10px] ">
            <div className="flex justify-end items-center gap-1">
             <p>Available </p>  <span className="text-[gray] "> 2/12</span>
            </div>
    
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-end items-center gap-2">
          <DotMenu id={data?.id} />
        </div>
        <div className="flex items-end h-[150px]">
          <div className="mt-[10px] ">
            <div className="flex justify-end ">
              143/<span className="text-[gray] ">night</span>
            </div>
            <div className="bg-[#b736de29] mb-[10px] rounded-[4px] text-[#e100ff] p-[4px] text-[10px]">
              {data?.facilities || "No facilities available"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCardInList;
