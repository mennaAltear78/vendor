import React from "react";
import Scroller from "../comman/Scroller";
import RoomCard from "./RoomCard";
import { useGetHotelRoomQuery } from "../../../../services/PostApi";
import { useNavigate } from "react-router-dom";

const RoomView = ({ id }) => {
  const navigate=useNavigate()
  const { data: dataRoom, error, isLoading } = useGetHotelRoomQuery({ id: id });
  //  console.log("room",dataRoom);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="mt-3  rounded-lg font-usedFont  sm:w-[730px] w-[360px]  ">
      <div className="flex justify-between hover:text-[blue] cursor-pointer">
        <h2>Rooms </h2>

        <span class="material-symbols-outlined text-[40px]  flex mr-[10px]" onClick={()=>navigate('/RoomsList')}>
          read_more
        </span>
      </div>
      <Scroller
        items={dataRoom?.data?.room}
        Component={RoomCard}
        hightdiv={"h-[300px]"}
      />
    </div>
  );
};

export default RoomView;
