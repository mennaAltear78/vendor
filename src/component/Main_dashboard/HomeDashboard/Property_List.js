import { useState } from "react";
import Table_View from "./Table_View";
import Card_View from "./Card_View";
import Header from "./Tabel_Header";
import MainDashBoardWrapper from "../../Authentication/regular_components/MainDashBoardWrapper";

import PaginationFooter from "./PaginationFooter";
import { useNavigate } from "react-router-dom";
import { VendorData } from "./comman/Data";
import { useGetHotelsQuery } from "../../../services/HotelApi";

function Property_List() {
  const navigate = useNavigate();
  const [sortValue, SetsortValue] = useState({ value: "" });
  const [FilterValue, SetFilterValue] = useState({ value: "" });

  const view = localStorage.getItem("veiwMode") || "table";

  const [viewMode, setViewMode] = useState(view); // or "card"
  const [searchKeywords, setSearchKeywords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useGetHotelsQuery({
    page: currentPage,
    limit: 10,
    keyword: searchKeywords,
    sort: sortValue.value,
    typeEn: FilterValue.value ? FilterValue.value : null,
  });
  return (
    <MainDashBoardWrapper>
      <div className="pb-[100px] pt-5 m-auto bg-gray-200 ">
        <div className=" p-4 sm:ml-[143px] sm:pr-1 pr-4 lg:w-[85vw] md:w-[79vw]   m-auto mt-[30px] rounded-[20px] bg-white  ">
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
            addFunction={() => navigate("/CompleteProfie")}
            optionFilter={VendorData.optionFilterHotel}
            optionSort={VendorData.optionSort}
            sortValueHandeler={(e) => {
              SetsortValue(e);
            }}
            filterValueHandeler={(e) => {
              SetFilterValue(e);
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
        {!error  ?<PaginationFooter
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfPages={data?.pagination?.numberOfPages || 1}
        />:null}
      
      </div>
    </MainDashBoardWrapper>
  );
}

export default Property_List;
