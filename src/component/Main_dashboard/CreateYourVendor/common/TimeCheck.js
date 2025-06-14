import React from "react";
import Menue from "../../../Authentication/regular_components/Menue";
import InputField from "./InputField";

function TimeCheck({
  checkType,
  checkKey,
  checkFromOPtions,
  checkUntilPtions,
  handleTimeChange,
  InputFieldHnadeler,
}) {
  return (
    <div>
      <p>{checkType}</p>
      <div className="sm:flex gap-10 mt-[-10px] mb-[10px]">
        <Menue
          textfild="textBoxSmall"
          label="from"
          options={checkFromOPtions}
          timeHandeler={(time, date) =>
            handleTimeChange(checkKey, "from", time, date)
          }
        />

        <Menue
          textfild="textBoxSmall"
          label="until"
          options={checkUntilPtions}
          timeHandeler={(time, date) =>
            handleTimeChange(checkKey, "until", time, date)
          }
        />
      </div>
      <InputField
        editt={false}
        label="Description(Optional)"
        name="Description"
        className="w-[96%]"
        textarea
        onChange={InputFieldHnadeler}
      />
    </div>
  );
}

export default TimeCheck;
