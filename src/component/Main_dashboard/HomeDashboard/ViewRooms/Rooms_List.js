import {useState}  from "react";
import Header from "../Tabel_Header";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import PaginationFooter from "../PaginationFooter";
import { useNavigate, useParams } from "react-router-dom";
import { useGetHotelRoomQuery } from "../../../../services/PostApi";
import RoomsContainer from "./RoomsContainer";

const Rooms_List = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const navigate = useNavigate();
  const { id: paramId } = useParams();

  const { data, error, isLoading } = useGetHotelRoomQuery({
    id: paramId,
    // page: currentPage,
    limit: 10,
    keyword: searchKeywords,
  });


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
          <RoomsContainer isLoading={isLoading} error={error} data={data?.data.rooms||[]}/>
        </div>

        {data?.data.rooms.length < 10 ? null : <PaginationFooter />}
      </div>
    </MainDashBoardWrapper>
  );
};

export default Rooms_List;
