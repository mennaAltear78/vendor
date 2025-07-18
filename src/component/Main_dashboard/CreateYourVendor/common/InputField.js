import { useEffect, useState } from "react";
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
  editt = true,
  ref,
 
}) => {
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (!editt) {
      setEdit(true);
    }
  }, [edit]);

  return (
    <div className="w-full flex flex-col items-start font-usedFont ">
      <div className="w-full flex items-center">
        <p className={`mb-1 text-sm ${margin} w-full `}>{label}</p>
        {editt ? (
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
        ) : null}
      </div>

      {textarea ? (
        <textarea
      
         ref={ref}
          type={type}
          value={value}
          placeholder={placeholder || label}
          onChange={onChange}
          name={name}
          disabled={!edit} // Enable editing when `edit` is true
          className={`h-[50px] rounded-[5px]  text-[14px] font-usedFont  border-gray-300 focus:outline-none  px-2 border  border-solid focus:border-[blue] ${
            !edit ? "bg-[#4947470c]" : ""
          } ${className}`}
        />
      ) : (
        <input
        ref={ref}
          type={type}
          value={value}
          placeholder={placeholder || label}
          onChange={onChange}
          name={name}
          disabled={!edit} // Enable editing when `edit` is true
          className={`h-[34px] rounded-[5px]  border-gray-300 focus:outline-none focus:border-[blue] font-usedFont  px-2 border  border-solid  ${
            !edit ? "bg-[#4947470c]" : ""
          } ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
