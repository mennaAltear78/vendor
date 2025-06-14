import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PaginationFooter({ numberOfPages, currentPage, setCurrentPage }) {
  const [windowStart, setWindowStart] = useState(0);
  useEffect(() => {
    if (currentPage > windowStart + 10) {
      setWindowStart(Math.floor((currentPage - 1) / 10) * 10);
    } else if (currentPage <= windowStart) {
      setWindowStart(Math.floor((currentPage - 1) / 10) * 10);
    }
  }, [currentPage, windowStart]);

  const pageButtons = Array.from(
    { length: Math.min(10, numberOfPages - windowStart) },
    (_, index) => index + 1 + windowStart
  );

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-between md:w-[50%]  lg:w-[87%] items-center py-3 sm:px-10 sm:ml-[100px] mr-[10px]  rounded-lg ">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="flex items-center ml-10 lg:ml-2 md:ml-2 border-solid p-0 border-[#80808049] px-4 py-2 sm:text-sm font-medium text-white bg-[#0000ffc4] rounded-lg
                  hover:bg-[#0000ffb0] transition-colors duration-200 ease-in-out
                  disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>

      <div className="hidden sm:flex space-x-1">
        {pageButtons.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`min-w-[40px] h-[40px] px-3 py-2 text-sm border-solid border-[#80808049] font-medium rounded-lg transition-colors duration-200
                      ${
                        currentPage === page
                          ? "bg-[#0000ffc4] text-white"
                          : "bg-[#d1c8c817] text-[#5a5959] hover:bg-[#8080808a]"
                      }`}
          >
            {page}
          </button>
        ))}
      </div>
      <span className="sm:hidden sm:text-sm text-gray-700">
        Page {currentPage} of {numberOfPages}
      </span>

      <button
        onClick={handleNextPage}
        disabled={currentPage >= numberOfPages}
        className="flex items-center px-4 mr-10 sm:mr-0 py-2 sm:text-sm  font-medium text-white bg-[#0000ffc4] rounded-lg
                  hover:bg-[#0000ffb0] transition-colors duration-200 ease-in-out border-solid border-[#80808049]
                  disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}

export default PaginationFooter;
