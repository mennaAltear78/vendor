import React, { useState } from "react";
import Table_View from "./Table_View";
import Card_View from "./Card_View";
import Header from "./Tabel_Header";
import MainDashBoardWrapper from "../../Authentication/regular_components/MainDashBoardWrapper";
import { useGetHotelsQuery } from "../../../services/PostApi";
import PaginationFooter from "./PaginationFooter";
import { useNavigate } from "react-router-dom";
import { VendorData } from "./comman/Data";

function Property_List() {
  const navigate = useNavigate();
  const [sortValue,SetsortValue]=useState({value:''})
  const [FilterValue,SetFilterValue]=useState({value:''})

  const view = localStorage.getItem("veiwMode") || "table";

  const [viewMode, setViewMode] = useState(view); // or "card"
  const [searchKeywords, setSearchKeywords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
 
  const { data, isLoading, error } = useGetHotelsQuery({
    page: currentPage,
    limit: 10,
    keyword: searchKeywords,
    sort: sortValue.value,
    typeEn:FilterValue.value?FilterValue.value:null

  });


  const AddnewVendorHandeler = () => {
    navigate("/CompleteProfie");
  };



  return (
    <MainDashBoardWrapper>
      <div className="w-full pb-[100px] pt-5 m-auto bg-gray-200 ">
        <div className=" p-4 sm:ml-[143px]  sm:w-[86%] w-[86%]  m-auto mt-[30px] rounded-[20px] bg-white pr-[30px] ">
          <Header
           sortOPtions
           FilterOptions
            setViewMode={setViewMode}
            viewMode={viewMode}
            keyword={searchKeywords}
            setKeyword={setSearchKeywords}
            totaldata={data?.results}
            PageName="Property List"
            addName={"Create new Property"}
            addFunction={AddnewVendorHandeler}
            optionFilter={VendorData.optionFilterHotel} 
            optionSort={VendorData.optionSort}
            sortValueHandeler={(e)=>{
              // console.log(e,":)")
              SetsortValue(e)
            }}
            filterValueHandeler={(e)=>{
              // console.log(e,":)")
              SetFilterValue(e)
            }}
          />
          <div>
            {viewMode === "table" ? (
              <Table_View data={data} isLoading={isLoading} error={error} />
            ) : (
              <Card_View data={data} isLoading={isLoading} error={error} />
            )}
          </div>
        </div>
        {/* {data?.data.hotels.length === 0 ? null : ( */}
          <PaginationFooter
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={data?.pagination?.numberOfPages || 1}
          />
        {/* )} */}
      </div>
    </MainDashBoardWrapper>
  );
}

export default Property_List;
