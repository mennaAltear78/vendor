import React from "react";
import HorizontalBar from "../../comman/HorizontalBar";
import star from "../../../../../Assets/Star 98.svg";
import Menue from "../../../../Authentication/regular_components/Menue";
const RatingCard = () => {
  const label1 = ["Cleanliness", "Service", "Amenities", "Location"]; // Define the labels for each HorizontalBar

  const label2 = ["Staff", "Facilities", "Value for money rating"];

  const reviewSections = [
    {
      title: "Review Score",

      labelMenu: "Sort by",
    },
    {
      title: "Review Score",

      labelMenu: "Sort by",
    },
    {
      title: "Review Score",

      labelMenu: "Sort by",
    },

  ];

  return (
    <div className="bg-white rounded-lg shadow-md font-usedFont ">
      <div className="flex    mt-[10px] p-4">
        <div className="mr-[50px] grid">
          <b className="bg-gradient-to-r mb-[-40px] w-full flex items-center justify-center from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold text-lg ">
            Good
          </b>

          <div className="w-full flex justify-center items-center mb-[-15px] ">
            <img src={star} />
            <b className="bg-gradient-to-r ml-[9px]   text-[36px] from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold  ">
              4.5
            </b>
          </div>
          <b className="ml-[10px] bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text font-bold text-lg ">
            123+ Reviews
          </b>
        </div>
        <div className="sm:flex gap-6">
          <div>
            {label1.map((label, index) => (
              <HorizontalBar key={index} barLabel={label} />
            ))}
          </div>
          <div>
            {label2.map((label, index) => (
              <HorizontalBar key={index} barLabel={label} />
            ))}
          </div>
        </div>
      </div>

      <p className="ml-[12px] font-bold mb-0 mt-0">Filter</p>
      <div className="sm:flex gap-4 mt-[-20px] p-3">
        {reviewSections.map((section, index) => (
          <div key={index}>
            <p className="text-[13px] mb-[0px]">{section.title}</p>
            <Menue
              options={[]}
              labelMenue={section.labelMenu}
              NObtn={true}
              timeHandeler={()=>{}}
            />
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default RatingCard;
