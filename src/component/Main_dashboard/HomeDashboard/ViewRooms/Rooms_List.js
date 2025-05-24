import {useState}  from "react";
import Header from "../Tabel_Header";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import PaginationFooter from "../PaginationFooter";
import { useNavigate, useParams } from "react-router-dom";
import { useGetHotelRoomQuery } from "../../../../services/PostApi";
import RoomsContainer from "./RoomsContainer";
import { VendorData } from "../comman/Data";

const Rooms_List = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [sortValue,SetsortValue]=useState({value:''})
  const [FilterValue,SetFilterValue]=useState({value:''})
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const { id: paramId } = useParams();

  const { data, error, isLoading } = useGetHotelRoomQuery({
    id: paramId,
    page: currentPage,
    limit: 10,
    keyword: searchKeywords,
    sort: sortValue.value,
    typeEn:FilterValue.value?FilterValue.value:null
  });


  const AddRoomHandeler = () => {
    navigate("/CreateRoom");
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
            optionFilter={VendorData.optionFilterRoom} 
            optionSort={VendorData.optionSort}
            sortValueHandeler={(e)=>{console.log(e,":)")
              SetsortValue(e)
            }}
            filterValueHandeler={(e)=>{console.log(e,":)")
              SetFilterValue(e)
            }}
          />
          <RoomsContainer isLoading={isLoading} error={error} data={data?.data.rooms||[]}/>
        </div>

           <PaginationFooter
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={data?.pagination?.numberOfPages || 1}
          />
      </div>
    </MainDashBoardWrapper>
  );
};

export default Rooms_List;
