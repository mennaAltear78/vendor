import React, { useEffect, useState } from "react";
import styles from "./Menue.module.css";
import arrow from "../../../Assets/arrow-down.png";
function Menue({ options, label ,NObtn,timeHandeler}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("options");
  const [TimeOption, setTimeOption] = useState('');
  
  
  const [date,setDate]=useState({})

  useEffect(()=>{
console.log(selectedOption,TimeOption);
  timeHandeler(selectedOption,TimeOption)
  },[TimeOption,selectedOption])
  const toggleDropdown = () => {
    if (selectedOption === "options") {
      setSelectedOption(null);
      setTimeOption(null);
    }
    setIsOpen(!isOpen);
  };
  const handleSelect = (option,Time) => {
    setSelectedOption(option);
    if (selectedOption === null) setTimeOption("Am");
   
    
  };
  const HandleTimeOption = (option) => {
    setTimeOption(option);
  };

  return (
    <div className="relative font-usedFont">
      <label className= "text-[16px]  text-[#333] mb-1.5 font-[Poppins]">{label}</label>
      <div className={styles.dropdown}>
        <div className="flex " onClick={toggleDropdown}>
       <div className="w-[170px]">{selectedOption && `${selectedOption} `} 
         {!NObtn&&TimeOption}</div>  
         <div className="flex items-end"><img className="w-[20px] h-[20px]" src={arrow} /></div> 
        </div>
        <div className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.optionsStyle} ${
                selectedOption === option.value ? styles.checked : ""
              }`}
              onClick={() => handleSelect(option.value ,TimeOption)}
            >
              {option.label}
            </div>
          ))}
         {NObtn?'': <div className="flex">
            <button
              className={`${styles.btn1} ${
                TimeOption === "Am" ? styles.checked : ""
              }`}
              onClick={() => HandleTimeOption("Am")}
            >
              Am
            </button>
            <div className={styles.line}>
              <div />
            </div>
            <button
            type="button"
              className={`${styles.btn2} ${
                TimeOption === "Pm" ? styles.checked : ""
              }`}
              onClick={() => HandleTimeOption("Pm")}
            >
              Pm
            </button>
          </div>}
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Menue;
