import React, { useState } from "react";

const TimePaker = ({ label, TimePakerObject,value }) => {
  const [edit, setEdit] = useState(true);
  function convert12to24(value) {
    const [time, modifier] = value.toLowerCase().split(/(am|pm)/);
    let [hours, minutes] = time.split(":");

    if (!minutes) minutes = "00";

    hours = parseInt(hours);
    if (modifier === "pm" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "am" && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
  }
  function convert24To12(time24h) {
    let [hours, minutes] = time24h.split(",");
    hours = parseInt(hours);
    const ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
    return `${hours}.00${ampm}`;
  }
  const handleEditClick = () => {
    setEdit(!edit);
  };
  const onChangePackerHandler =(e)=>{
   const arr=convert24To12(e.target.value).split(" ")
    const obj={time:arr[0],date:arr[1]}
    TimePakerObject(obj)
 }
  return (
    <div className="grid">
      <div className="w-full flex justify-end ">
        <span
          className="material-symbols-outlined text-[15px] w-4 h-4 p-1 rounded-lg mb-[-10px] bg-[#0000ff2a] mt-[-9px] text-[blue] cursor-pointer"
          onClick={handleEditClick}
        >
          edit
        </span>
      </div>
      <label htmlFor={label} className="font-medium ">
        {label}
      </label>
      <input
        type="time"
        id={label}
        disabled={edit}
        value={convert12to24(value)}
        onChange={onChangePackerHandler}
        className="border border-gray-300 rounded-md w-[320px] px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-[#00000010]"
        required
      />
    </div>
  );
};

export default TimePaker;
