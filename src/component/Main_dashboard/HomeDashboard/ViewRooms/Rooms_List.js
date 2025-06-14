import { useState } from "react";
import Header from "../Tabel_Header";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import PaginationFooter from "../PaginationFooter";
import { useNavigate, useParams } from "react-router-dom";

import RoomsContainer from "./RoomsContainer";
import { VendorData } from "../comman/Data";
import { useGetHotelRoomQuery } from "../../../../services/RoomApi";

const Rooms_List = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [sortValue, SetsortValue] = useState({ value: "" });
  const [FilterValue, SetFilterValue] = useState({ value: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const { id: paramId } = useParams();

  const { data, error, isLoading } = useGetHotelRoomQuery({
    id: paramId,
    page: currentPage,
    limit: 10,
    keyword: searchKeywords,
    sort: sortValue.value,
    typeEn: FilterValue.value ? FilterValue.value : null,
  });

  return (
    <MainDashBoardWrapper>
      <div className="pb-[100px] pt-5  m-auto bg-gray-200 ">
        <div className=" p-4 sm:ml-[143px] ml-1  sm:w-[85%] w-[89%]  m-auto mt-[30px] rounded-[20px] bg-white pr-[30px] ">
          <Header
            Room={true}
            keyword={searchKeywords}
            setKeyword={setSearchKeywords}
            totaldata={data?.results}
            PageName="Rooms"
            addName={"Add Room"}
            addFunction={() => navigate("/CreateRoom")}
            optionFilter={VendorData.optionFilterRoom}
            optionSort={VendorData.optionSort}
            sortValueHandeler={(e) => {
              // console.log(e, ":)");
              SetsortValue(e);
            }}
            filterValueHandeler={(e) => {
              // console.log(e, ":)");
              SetFilterValue(e);
            }}
          />
          <RoomsContainer
            isLoading={isLoading}
            error={error}
            data={data?.data.rooms || []}
          />
        </div>
        {!error ? (
          <PaginationFooter
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={data?.pagination?.numberOfPages || 1}
          />
        ) : null}
      </div>
    </MainDashBoardWrapper>
  );
};

export default Rooms_List;
