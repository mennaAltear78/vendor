import React, { useState } from "react";
import styles from "./Menue.module.css";
import arrow from "../../../Assets/arrow-down.png";
function Menue({ options, label ,NObtn}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("options");
  const [TimeOption, setTimeOption] = useState(null);
  const toggleDropdown = () => {
    if (selectedOption === "options") {
      setSelectedOption(null);
      setTimeOption(null);
    }
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    if (selectedOption === null) setTimeOption("Am");
  };
  const HandleTimeOption = (option) => {
    setTimeOption(option);
  };

  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.dropdown}>
        <div className={styles.selectedOption} onClick={toggleDropdown}>
          {selectedOption && `${selectedOption} `}
          {!NObtn&&TimeOption}
          <img src={arrow} />
        </div>
        <div className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.optionsStyle} ${
                selectedOption === option.value ? styles.checked : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
         {NObtn?'': <div style={{ display: "flex" }}>
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
