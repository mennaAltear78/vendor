import React, { useMemo, useState } from "react";
import Header from "../Tabel_Header";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import RoomCardInList from "./RoomCard";
import { RightDrawer } from "../comman/Drawer";
import PaginationFooter from "../PaginationFooter";
import RoomView from "./RoomView";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetHotelRoomQuery,
} from "../../../../services/PostApi";

const Rooms_List = () => {
  const [open, setOpen] = useState(false);
  const [searchKeywords, setSearchKeywords] = useState("");
  const navigate = useNavigate();
  const { id: paramId } = useParams();

  console.log(paramId);

  const { data, error, isLoading } = useGetHotelRoomQuery({
    id: paramId,
    // page: currentPage,
    limit: 10,
    keyword: searchKeywords,
  });
  console.log(data);
  const AddRoomHandeler = () => {
    navigate("/RoomDetail");
  };
  return (
    <MainDashBoardWrapper>
      <div className="w-full pb-[100px]  m-auto bg-gray-200 ">
        <div className=" p-4 ml-[143px] sm:w-[86%]  m-auto mt-[30px] rounded-[20px] bg-white pr-[30px] ">
          <Header
            Room={true}
            keyword={searchKeywords}
            setKeyword={setSearchKeywords}
            totaldata={data?.results}
            PageName="Rooms"
            addName={"Add Room"}
            addFunction={AddRoomHandeler}
          />

          {data?.data.rooms.map((items, index) => (
            <div key={index}>
              <RoomCardInList setOpen={setOpen} data={items} />
              <RightDrawer
                Component={RoomView}
                open={open}
                setOpen={setOpen}
              />
            </div>
          ))}
        </div>
     
        {data?.data.rooms.length < 10 ? null : <PaginationFooter />}
      </div>
    </MainDashBoardWrapper>
  );
};

export default Rooms_List;
