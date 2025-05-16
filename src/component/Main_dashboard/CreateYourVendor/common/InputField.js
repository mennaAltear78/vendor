import { useState } from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  className,
  margin,
  value,
  textarea = false,
  onChange,
  name,

}) => {
  const [edit, setEdit] = useState(false);


  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex items-center">
        <p className={`mb-1 text-sm ${margin} w-full`}>{label}</p>
        <div className="w-full flex justify-end ">
          <span
            className="material-symbols-outlined text-[15px] w-4 h-4 p-1 rounded-lg mb-[-10px] bg-[#0000ff2a] mt-[-9px] text-[blue] cursor-pointer"
            onClick={() => {
    setEdit((prev) => !prev);
  }}
          >
            edit
          </span>
        </div>
      </div>

      {textarea ? (
        <textarea
          type={type}
          value={value}
          placeholder={placeholder || label}
          onChange={onChange}
          name={name}
          disabled={!edit} // Enable editing when `edit` is true
          className={`h-[50px] rounded-[5px] font-usedFont px-2 mt-[0px] border border-solid focus:border-[blue] ${
            !edit ? "bg-[#4947470c]" : ""
          } ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder || label}
          onChange={onChange}
          name={name}
          disabled={!edit} // Enable editing when `edit` is true
          className={`h-[30px] rounded-[5px] font-usedFont px-2 border  border-solid focus:border-[blue] ${
            !edit ? "bg-[#4947470c]" : ""
          } ${className}`}
        />
      )}
      
    </div>
  );
};

export default InputField;
