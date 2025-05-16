import React, { useState } from "react";
import Select from "react-select";
function Menu({ value, onChange, placeholder, isSearchable, label, options }) {
  const [edit, setEdit] = useState(true);
  return (
    <div className="w-full flex flex-col items-start">
  
        <div className="w-full flex justify-end ">
          <span
            className="material-symbols-outlined text-[15px] z-0  w-4 h-4 p-1 rounded-lg mb-[-40px] bg-[#0000ff2a]  text-[blue] cursor-pointer"
            onClick={() => {
              setEdit((prev) => !prev);
            }}
          >
            edit
          </span>
     
      </div>
      <div className={"w-full "}>
        <p className={`mb-1 text-sm  `}>{label}</p>
        <Select
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          isSearchable={isSearchable}
          isDisabled={edit}  
        />
      </div>
    </div>
  );
}

export default Menu;
