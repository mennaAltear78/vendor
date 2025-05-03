import React, { useState } from "react";

function PaginationFooter({ data, currentPage, setCurrentPage }) {
  const [indexUpdate, setIndexUPdate] = useState(0);

  const dataHotelPages = data?.pagination?.currentPage;
  const numberOfPages = data?.pagination?.numberOfPages;

  const nextPage = () => {
    console.log(currentPage);
    if (dataHotelPages >= currentPage) {
      setIndexUPdate((prev) => prev + 10);
    }
  };

  const prevPage = () => {
    if (indexUpdate >= 10) {
      setIndexUPdate((prev) => prev - 10);
    }
  };

  // Function to handle click on a specific page number
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="display flex justify-between p-10 py-3 items-center ml-[120px] mr-[50px]">
      <button
        onClick={prevPage}
        disabled={currentPage === 10}
        className="bg-[#0000ffc4] border-none text-white rounded-lg hover:bg-[#80808085] h-[40px] cursor-pointer disabled:bg-gray disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <div>
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(indexUpdate + index)}
            className={`${
              currentPage === indexUpdate + index
                ? "bg-[blue]"
                : "bg-[#80808062]"
            } text-white  border-[1px] border-none m-1 rounded-[5px]  `}
          >
            {index + indexUpdate + 1}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage >= numberOfPages}
        className="bg-[#0000ffc4] border-none text-white rounded-lg hover:bg-[#80808085] h-[40px] cursor-pointer disabled:bg-gray disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationFooter;
