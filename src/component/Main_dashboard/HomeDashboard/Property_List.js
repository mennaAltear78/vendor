import React, { useState } from "react";
import Table_View from "./Table_View";
import Card_View from "./Card_View";
import Header from "./Tabel_Header";
import MainDashBoardWrapper from "../../Authentication/regular_components/MainDashBoardWrapper";
import { useGetHotelsQuery } from "../../../services/PostApi";
import PaginationFooter from "./PaginationFooter";
import { useNavigate } from "react-router-dom";

function Property_List() {
  const navigate = useNavigate();

  const view = localStorage.getItem("veiwMode") || "table";

  const [viewMode, setViewMode] = useState(view); // or "card"
  const [searchKeywords, setSearchKeywords] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
 
  const { data, isLoading, error } = useGetHotelsQuery({
    page: currentPage,
    limit: 10,
    keyword: searchKeywords,
  });


  const AddnewVendorHandeler = () => {
    navigate("/CompleteProfie");
  };
  return (
    <MainDashBoardWrapper>
      <div className="w-full pb-[100px]  m-auto bg-gray-200 ">
        <div className=" p-4 ml-[143px] sm:w-[86%]  m-auto mt-[30px] rounded-[20px] bg-white pr-[30px] ">
          <Header
            setViewMode={setViewMode}
            viewMode={viewMode}
            keyword={searchKeywords}
            setKeyword={setSearchKeywords}
            totaldata={data?.results}
            PageName="Property List"
            addName={"Create new Property"}
            addFunction={AddnewVendorHandeler}
          />
          <div>
            {viewMode === "table" ? (
              <Table_View data={data} isLoading={isLoading} error={error} />
            ) : (
              <Card_View data={data} isLoading={isLoading} error={error} />
            )}
          </div>
        </div>
        {data?.data.hotels.length < 10 ? null : (
          <PaginationFooter
            data={data}
            currentPage={2}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </MainDashBoardWrapper>
  );
}

export default Property_List;
