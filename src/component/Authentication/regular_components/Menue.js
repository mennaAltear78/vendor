import { useEffect, useState } from "react";
import styles from "./Menue.module.css";
import arrow from "../../../Assets/arrow-down.png";
function Menue({
  options,
  label,
  NObtn,
  timeHandeler,
  table = false,
  labelMenue,
  chart,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("options");
  const [TimeOption, setTimeOption] = useState("");

  useEffect(() => {
    timeHandeler(selectedOption, TimeOption);
  }, [TimeOption, selectedOption]);
  const toggleDropdown = () => {
    if (selectedOption === "options") {
      setSelectedOption(null);
      setTimeOption(null);
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (option, Time) => {
    setSelectedOption(option);
    if (selectedOption === null) setTimeOption("AM");
  };

  const HandleTimeOption = (option) => {
    setTimeOption(option);
  };

  return (
    <div
      className={`relative items-center font-usedFont ${
        table ? "display flex" : ""
      }`}
    >
      <label className="text-[16px] text-[#333] mb-1.5 font-[Poppins]">
        {label}
      </label>
      <div
        className={`${
          chart ? "bg-[#da3853] text-[#ffffffde]" : "bg-white text-gray-500"
        }   border border-solid border-[#56595c44] rounded-lg px-[6px] py-0 cursor-pointer flex justify-between items-center text-[16px]  transition-[width] duration-300 ease-in-out ${
          table ? "w-[120px] h-[30px]" : "w-[180px] h-[30px]"
        }`}
      >
        <div className="display  flex items-center " onClick={toggleDropdown}>
          <div className={table ? "w-[100px]" : "w-[144px]"}>
            {table ? (
              <p>{labelMenue} </p>
            ) : selectedOption ? (
              `${selectedOption} `
            ) : null}
            {!NObtn && TimeOption}
          </div>
          {chart ? null : (
            <div className="flex items-end ">
              <img className="w-[20px] h-[20px]" src={arrow} />
            </div>
          )}
        </div>
        <div className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.optionsStyle} ${
                selectedOption === option.value ? styles.checked : ""
              }`}
              onClick={() => handleSelect(option.value, TimeOption)}
            >
              {option.label}
            </div>
          ))}
          {NObtn ? (
            ""
          ) : (
            <div className="flex">
              <button
                className={`${styles.btn1} ${
                  TimeOption === "AM" ? styles.checked : ""
                }`}
                onClick={() => HandleTimeOption("AM")}
              >
                Am
              </button>
              <div className={styles.line}>
                <div />
              </div>
              <button
                type="button"
                className={`${styles.btn2} ${
                  TimeOption === "PM" ? styles.checked : ""
                }`}
                onClick={() => HandleTimeOption("PM")}
              >
                Pm
              </button>
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Menue;
