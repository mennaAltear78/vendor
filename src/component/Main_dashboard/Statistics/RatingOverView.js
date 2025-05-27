import React from "react";
import HorizontalBar from "../HomeDashboard/comman/HorizontalBar";
import star from "../../../Assets/Star 98.svg";
function RatingOverView() {
  const label1 = [
    "Cleanliness",
    "Service",
    "Amenities",
    "Location",
    "Staff",
    "Facilities",
    "Value for money rating",
  ];
  return (
    <div className="lg:w-[300px]  mr-3   p-4 pt-[1px] h-[360px] rounded-lg font-usedFont bg-white mb-[10px]">
      <p>Property Rating overview</p>
      <div className="flex justify-between cursor-pointer">
        <div className="flex">
          <div className=" flex justify-center items-center p-1 rounded-lg  bg-[#ffa6003f] mb-[30px] ">
            <img src={star} className="w-[40px] " />
            <b className="bg-gradient-to-r ml-[10px] text-[30px] mr-[4px]  from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold  ">
              3.5
            </b>
          </div>
          <div className="ml-[10px]">
            <b className="bg-gradient-to-r mb-[-20px]  from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold text-lg ">
              Good
            </b>
            <p className="text-[10px] mt-[-2px] text-[gray]">
              From 212 Reviews
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-6">
        <div>
          {label1.map((label, index) => (
            <HorizontalBar key={index} barLabel={label} StatPage />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RatingOverView;
