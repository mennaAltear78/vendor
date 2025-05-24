import React from "react";
import image from "../../../../Assets/Image.svg";
const PrimaryImage_View = ({
  data,
  DimensionsS,
  DimentionsB,
  wd,
  ViewAll = false,
}) => {
  return (
    <div>
      <div
        className={`w-full mr-[20px] mb-[10px] overflow-hidden ${DimentionsB} rounded-sm`}
      >
        <img
          src={data?.primary_images[0] || image}
          alt="hotel"
          // width={`${wd}`}
          className={` h-full object-cover rounded-lg w-[100px] sm:w-[${wd}px] `}
        />
      </div>

      <div className="flex gap-1 overflow-hidden">
        {data?.primary_images.slice(0, 3).map((imgSrc, index) => (
          <div
            key={index}
            className={`overflow-hidden  ${DimensionsS}  rounded-md`}
          >
            <img
              src={imgSrc || image}
              alt={`sub ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {ViewAll ? (
          <div className="flex items-center cursor-pointer bg-[#ffa6005e] h-[90px] w-[90px] rounded-lg justify-center">
            <p className="text-[orange] ">View All</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default PrimaryImage_View;
