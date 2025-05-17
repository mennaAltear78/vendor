import React, { useState } from "react";
import { RightDrawer } from "../comman/Drawer";
import RoomCardInList from "./RoomCard";
import RoomView from "./RoomView";
import SkeletonCardView from "../../../Skeletons/SkeletonCardView";

function RoomsContainer({ isLoading, data, error }) {
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <SkeletonCardView />;
  } else if (error) {
    return (
      <div className="h-screen font-usedFont text-[30px] flex justify-center items-center w-full m-auto">
        NOT FOUND....{" "}
      </div>
    );
  }

  return (
    <div>
      {data.map((items, index) => (
        <div key={index}>
          <RoomCardInList setOpen={setOpen} data={items} />
          <RightDrawer Component={RoomView} open={open} setOpen={setOpen} />
        </div>
      ))}
    </div>
  );
}

export default RoomsContainer;
