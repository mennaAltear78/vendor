import React, { useState } from "react";
import style from "./SquareRadio.module.css";
import TextField from "../../../Authentication/regular_components/TextField";

function SquareRadio({
  options,
  name,
  onChange,
  cost,
  radio,
  description,
  AllowanceHandling,
  onevalue,
  round
}) {
  const [selected, setSelected] = useState([]);
  const [activeStates, setActiveStates] = useState(
    options.reduce((acc, option) => ({ ...acc, [option.value]: false }), {})
  );


  const handleSelection = (value) => {
    let newSelected;

    if (onevalue) {
      newSelected = [value];
    } else {
      newSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
    }

    setSelected(newSelected);

    if (onChange) {
      onChange(newSelected);
    }

    if (activeStates[value]) {
      setActiveStates((prevStates) => ({
        ...prevStates,
        [value]: false,
      }));
    }
  };


  const toggleActiveState = (value) => {
    console.log(selected);
    if (radio) {
      if (!selected.includes(value)) return;
    }

    setActiveStates((prevStates) => ({
      ...prevStates,
      [value]: !prevStates[value],
    }));
    console.log(activeStates, "?????????");
    AllowanceHandling(activeStates);
  };
  
  return (
    <div >
      <div className={style.square}>
        {options.map((option) => (
          <>
          <div className={style["radio-container"]}>
          <label key={option.value} className={"flex items-center cursor-pointer gap-1.5 justify-between w-full mt-5"}>
            {radio && (
              <div className="flex items-center gap-1.5 mb-2">
                <input
                  type="checkbox"
                  name={name}
                  value={option.label}
                  checked={selected.includes(option.value)}
                  onChange={() => handleSelection(option.value)}
                  className={style["hidden-radio"]}
                />
              <div className={`border-solid border-2 border-blue-600  ${round} ${style["square-radio"]}`}>
                  {selected.includes(option.value) && "✔"}
                </div>
                <div className="text-[15px]">{option.label}</div>
              </div>
            )}
            {!radio && <div>{option.label}</div>}
   
        
          </label>
     
       {   cost &&
        <div className={style.slider}>
       
       
          
              <div className={style.addCost}>
                <p className="">{description}</p>
                <div className={style.scroll}>
                  <div
                    className={
                      activeStates[option.value] ? style.sliderL : style.sliderR
                    }
                    onClick={() => toggleActiveState(option.value)}
                  >
                    <div
                      className={
                        activeStates[option.value]
                          ? style.CircleL
                          : style.CircleR
                      }
                    />
                  </div>
                </div>
                
              </div>  </div>  }
              </div>
          
      

       { radio&&activeStates[option.value] &&   <div >    <p>
         Description<span style={{color:'gray'}}>(Optional)</span>
       </p>
       <TextField textfild="bigTextBox" name="Description" /></div>}
      
    
      </>
        ))}
      </div>

    </div>
  );
}

export default SquareRadio;
