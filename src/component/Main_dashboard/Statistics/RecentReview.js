import React from "react";
import ReviewCard from "./ReviewCard";

function RecentReview() {
  return (
    <div className="w-[300px] p-4 pt-[1px]  overflow-y-scroll custom-scroll h-screen rounded-lg bg-white mb-[10px]">
    <div className="flex justify-between items-center cursor-pointer">
         <p>Recent Reviews</p>  
         <div className="flex ">
          <b className="text-[blue] mr-[3px]">show All</b>
          <div className="w-5 h-5 bg-[#8080801e] rounded-full flex items-center">
            <span class="material-symbols-outlined text-[blue] text-[15px] ml-[3px]">
              chevron_right
            </span>
          </div>
        </div>
    </div>
    {Array.from({ length: 5 }).map((_, index) => (
  <ReviewCard key={index} />
))}
     
    </div>
  );
}

export default RecentReview;
