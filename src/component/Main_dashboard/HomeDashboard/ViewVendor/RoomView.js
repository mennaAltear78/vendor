import React from "react";
import Scroller from "../comman/Scroller";
import RoomCard from "./RoomCard";
import { useGetHotelRoomQuery } from "../../../../services/PostApi";
import { useNavigate } from "react-router-dom";

const RoomView = ({ id }) => {
  const navigate=useNavigate()
  const { data: dataRoom, error, isLoading } = useGetHotelRoomQuery({ id: id });
   console.log("room",dataRoom?.data?.rooms);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>No Room Found</p>;
  }
  return (
    <div className="mt-3  rounded-lg font-usedFont  sm:w-[730px] w-[360px]  ">
      <div className="flex justify-between items-center  hover:text-[blue] cursor-pointer">
        <h2>Rooms </h2>


        <div className="flex " onClick={()=>navigate(`/RoomsList/${id}`)}>
          <b className="hover:text-[blue] mr-[5px]">show All</b>
          <div className="w-5 h-5 bg-[#8080801e] rounded-full flex items-center">
            <span class="material-symbols-outlined hover:text-[blue] text-[15px] ml-[3px] ">
              chevron_right
            </span>
          </div>
        </div>
       
      </div>
      <Scroller
        key={'rooms'}
        items={dataRoom?.data?.rooms}
        numberCardShown={2}
        Component={RoomCard}
        hightdiv={"h-[300px]"}
      />
    </div>
  );
};

export default RoomView;
