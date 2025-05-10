import React from "react";
import ReviewCard from "../ReviewCard";
import star from '../../../../../Assets/Star 98.svg'
const ReviewCardDetails = () => {
  return (
    <div className="sm:w-[700px] w-[360px]  bg-white h-[120px] mt-[10px] rounded-lg p-4 shadow-lg ">
      <div className="flex justify-between text-sm  ">
        <ReviewCard />
        <div className="flex gap-1 mr-[-40px]">
          <span className="text-white font-bold h-4  flex text-[12px] items-center bg-[blue] px-1  rounded">
          <img src={star} className="h-3 w-3"/>  4.3
          </span>
          <span className="text-pink-500 font-bold w-[100px] ">Great <span className="bg-pink-500  text-white p-[2px] rounded-sm text-[12px]">10</span></span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardDetails;
