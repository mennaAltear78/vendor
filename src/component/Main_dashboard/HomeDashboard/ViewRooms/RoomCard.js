import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import DotMenu from "../DotMenu";
import image from "../../../../Assets/Image.svg";
import AuthContext from "../../../Authentication/Context/auth-context";

const RoomCardInList = ({ data = {},setOpen}) => {
 const ctx=useContext(AuthContext)
console.log(data._id,"id");

const data2 = {
    primary_images: data.images,
  };

const handelRoomId=()=>{
  setOpen(true)
  ctx.setIdSpesificRoom(data?._id)
}
  return (
    <Link
      style={{ textDecoration: "none" }}
      className="border-solid h-[170px] text-[black] flex cursor-pointer justify-between p-1 mt-[30px] rounded-[10px] hover:border-[#0000ff79] border-[#8080805a] border-[1px] font-usedFont hover:bg-blue-50 hover:shadow-md transition duration-300 w-full"
      onClick={handelRoomId}
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

          <div className="flex mt-[5px] ">
            <div className="flex flex-wrap gap-2 mt-[-14px]">
              {data.bed.map((bed) => (
                <div className="bg-[#ffa60065] text-[orange] px-[3px] text-[13px] rounded-[3px]">
                  {bed.type}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end h-[80px] ">
            <div className="mt-[10px] ">
              <div className="flex justify-end items-center gap-1">
                <p>Available Rooms </p>{" "}
                <span className="text-[gray] "> {data.available_rooms}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-end items-center gap-2">
          <DotMenu id={data?.id} />
        </div>
        <div className="w-full flex justify-end">
          <div
            className={`${
              data.is_completed
                ? "bg-[#23e62334] text-[green]"
                : "bg-[#535353b7]"
            } rounded-md w-[65px]   h-[15px] text-[10px] flex justify-center items-center`}
          >
            <div
              className={`${
                data.is_completed ? "bg-[green] " : "bg-[#535353b7]"
              } rounded-full h-2 w-2  mr-[3px] `}
            />
            {data.is_completed ? "Active" : "not Active"}
          </div>
        </div>

        <div className="flex items-end h-[150px]">
          <div className="mt-[10px] ">
            <div className="flex justify-end mb-3 ">
              {data.price_per_night}/<span className="text-[gray] ">night</span>
              {data.currency}
            </div>
            <div className="bg-[#b736de29] mb-[10px] rounded-[4px] text-[#e100ff] p-[4px] text-[10px] flex justify-center">
              {data?.promotion || "No promotions available"}
            </div>
            <div className="bg-[#f5702329] mb-[10px] rounded-[4px] text-[#ff8800e3] p-[4px] text-[10px] flex justify-center">
              {data?.size.value} {data?.size.unit}
            </div>
            <div className=" mb-[10px] rounded-[4px]  text-[10px] flex justify-center ">
             
              <p className="mb-0 mr-2"> <span class="material-symbols-outlined text-[10px] mr-1">
                family_restroom
              </span>adults:{data?.capacity.adults} </p>
              <p>children:{data?.capacity.children} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCardInList;
