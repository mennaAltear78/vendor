import React from "react";
import SquareRadio from "../SquareRadio";
import Title from "../../common/Title";

function RoomSelectFacilities({
  options,
  selectedValue,
  onChange,
  title,
  description,
}) {
  return (
    <div>
      <Title Title={title} />

      <div className="font-usedFont p-[20px]  sm:w-[430px] ml-[10px] border-2 border-solid border-gray-200 rounded-[15px] mt-[14px]">
        <p className="mb-[-8px]">{description}</p>{" "}
           <hr />
        <SquareRadio
          round="rounded-[20%]"
          name="customRadio"
          options={options.map((opt) => ({
            value: opt.value,
            label: opt.value,
          }))}
          radio={true}
          onChange={onChange}
          selectedValue={selectedValue}
        />
      </div>
    </div>
  );
}
export default RoomSelectFacilities;
