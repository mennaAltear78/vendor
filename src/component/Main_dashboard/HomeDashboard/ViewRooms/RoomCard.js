import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import DotMenu from "../DotMenu";
import defaultImage from "../../../../Assets/Image.svg";
import AuthContext from "../../../Authentication/Context/auth-context";
import Active from "../comman/Active";
import BedTypeView from "../comman/BedTypeView";
import { useDeleteRoomMutation } from "../../../../services/PostApi";

const RoomCardInList = ({ data = {},setOpen}) => {

const ctx=useContext(AuthContext)
const data2 = {
    primary_images: data.images?.length > 0 ? data.images : [defaultImage, defaultImage, defaultImage, defaultImage],
  };
  const [deleteRoom, { isLoading: Loading, isError, isSuccess }] =
  useDeleteRoomMutation();
const handelRoomId=()=>{
  setOpen(true)
  ctx.setIdSpesificRoom(data?._id)
}
console.log(data._id,":data in room card");

  return (
    <Link
    style={{ textDecoration: "none" }}
    className="border-solid text-[black] flex cursor-pointer sm:justify-between p-1 mt-[30px] rounded-[10px] hover:border-[#0000ff79]  border-[#8080805a] border-[1px] font-usedFont hover:bg-blue-50 hover:shadow-md
    transition duration-300 sm:w-full w-[380px]"
    onClick={handelRoomId}
    >
      <div className="flex">
        <PrimaryImage_View
          data={data2}
          DimensionsS="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]"
          DimentionsB="sm:h-[110px] h-[100px]"
             // wd="914"
Drawer="w-[157px]"
          
        />
        <div className="">
          <h1 className="sm:text-[20px] text-[15px] break-words sm:w-full w-[100px]">{data?.name || "Room Name"}</h1>
          <p className="text-[#8080809a] sm:text-sm text-[12px] sm:w-full w-[100px] break-words">
            {data?.description || "No description available."}
          </p>

          <div className="flex mt-[5px] ">
            <div className="flex flex-wrap gap-2">
   <BedTypeView beds={data.bed}/>
            </div>
          </div>
          <div className="flex items-end h-[80px] ">
            <div className="mt-[10px] ">
              <div className="flex  justify-end items-center gap-1">
                <p>Available Rooms </p>{" "}
                <span className="text-[gray] "> {data.available_rooms}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-end items-center gap-2">
          <DotMenu id={ctx.IdSpesificRoom}   Loading={Loading} error={isError} deleteFunction={deleteRoom}  />
        </div>
      <Active complete={data.is_completed} ActiveName={"Active"} NotActiveName={"Not Active"}/>

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
