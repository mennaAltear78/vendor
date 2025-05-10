import React, { useState } from "react";
import Header from "../Tabel_Header";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import RoomCardInList from "./RoomCard";
import { RightDrawer } from "../comman/Drawer";
import PaginationFooter from "../PaginationFooter";
import RoomView from "./RoomView";

const Rooms_List = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainDashBoardWrapper>
      <div className="w-full pb-[100px]  m-auto bg-gray-200 ">
        <div className=" p-4 ml-[143px] sm:w-[86%]  m-auto mt-[30px] rounded-[20px] bg-white pr-[30px] ">
          <Header
            Room={true}
            // keyword={searchKeywords}
            // setKeyword={setSearchKeywords}
            // totaldata={data?.results}
            PageName="Rooms"
            addName={"Add Room"}
          />

          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <RoomCardInList openRoomCard={()=>setOpen(true)} />
              <RightDrawer
                Component={RoomView}
                open={open}
                setOpen={setOpen}
              />
            </div>
          ))}
        </div>
        <PaginationFooter/>
      </div>
    </MainDashBoardWrapper>
  );
};

export default Rooms_List;
