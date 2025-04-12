import React, { act, useState } from "react";
import style from "./SquareRadio.module.css";
import TextField from "../../../Authentication/regular_components/TextField";
import { set } from "react-hook-form";

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
  const [descriptionValue ,setdescription]=useState([])
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
      onChange(newSelected,descriptionValue);
    }

    if (activeStates[value]) {
      setActiveStates((prevStates) => ({
        ...prevStates,
        [value]: false,
      }));
    }
  };


  const toggleActiveState = (value) => {
    console.log(value,"??ff");
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
  const onChangeDescHandeler =(e)=>{
    const value=e.target.value
    setdescription(value)
    console.log(value);
    
  }
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
                  checked={selected.includes(option.label)}
                  onChange={() => handleSelection(option.label)}
                  className={style["hidden-radio"]}
                />
              <div className={`border-solid border-2 border-blue-600  ${round} ${style["square-radio"]}`}>
                  {selected.includes(option.label) && "✔"}
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
                      activeStates[option.label] ? style.sliderL : style.sliderR
                    }
                    onClick={() => toggleActiveState(option.label)}
                  >
                    <div
                      className={
                        activeStates[option.label]
                          ? style.CircleL
                          : style.CircleR
                      }
                    />
                  </div>
                </div>
                
              </div>  </div>  }
              </div>
          
      

       { radio&&activeStates[option.label] &&   <div >    <p>
         Description<span style={{color:'gray'}}>(Optional)</span>
       </p>
       <TextField textfild="bigTextBox" name="descriptionValue" OnchangeHnadeler={onChangeDescHandeler} /></div>}
      
    
      </>
        ))}
      </div>

    </div>
  );
}

export default SquareRadio;
