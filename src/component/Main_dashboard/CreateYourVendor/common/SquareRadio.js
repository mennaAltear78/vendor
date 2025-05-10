import React, { act, useEffect, useState } from "react";
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
  round,
  outoFeeInUpdate
}) {
  const [selected, setSelected] = useState([]);
  const [descriptionValue, setDescription] = useState([]);
  const [activeStates, setActiveStates] = useState(
    options.reduce((acc, option) => ({ ...acc, [option.value]: false }), {})
  );
  useEffect(() => {
    if (onChange) {
      onChange(selected, descriptionValue, activeStates);
    }
    console.log(selected);
    
  }, [selected, descriptionValue, activeStates]);

  const handleSelection = (value) => {
    let newSelected;

    if (onevalue) {
      newSelected = [value.label];
    } else {
      newSelected = selected.includes(value.label)
        ? selected.filter((item) => item !== value.label)
        : [...selected, value.label];
    }

    setSelected(newSelected);
    // console.log("valueee",descriptionValue);

    if (activeStates[value.label]) {
      setActiveStates((prevStates) => ({
        ...prevStates,
        [value.label]: false,
      }));
    }
  };

  const toggleActiveState = (value) => {
    if (radio && !selected.includes(value)) return;

    setActiveStates((prevStates) => {
      const updatedStates = {
        ...prevStates,
        [value]: !prevStates[value],
      };
      AllowanceHandling(updatedStates);
      return updatedStates;
    });
  };

  const onChangeDescHandeler = (option, e) => {
    // console.log("meena",option.label,descriptionValue ,activeStates[option.label]);

    setDescription((prev) => {
      const keyToUpdate = option.label;
      //some in js see if there is item in the array applay spasific condtion

      const isExisting = prev.some((item) => keyToUpdate in item);

      if (isExisting) {
        // if it already exist we modify it

        return prev.map((item) =>
          keyToUpdate in item ? { [keyToUpdate]: e.target.value } : item
        );
      } else {
        // if not we add it
        return [...prev, { [keyToUpdate]: e.target.value }];
      }
    });
  };

  return (
    <div>
      <div className={style.square}>
        {options.map((option) => (
          <>
            <div className="flex mb-[-20px]">
              <label
                key={option.value}
                className={
                  "flex items-center cursor-pointer gap-1.5 justify-between w-full mt-5"
                }
              >
                {radio && (
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      name={name}
                      value={option.label}
                      checked={selected.includes(option.label)}
                      onChange={() => handleSelection(option)}
                      className="peer hidden"
                    />
                    <div
                      className={`border-solid border-2 peer-checked:bg-blue-500 ${round} ${style["square-radio"]}`}
                    >
                      {selected.includes(option.label) && "✔"}
                    </div>
                    <div className="text-[15px]">{option.label}</div>
                  </div>
                )}
                {!radio && <div>{option.label}</div>}
              </label>

              {cost && (
                <div className={style.slider}>
                  <div className={style.addCost}>
                    <p>{description}</p>
                    <div className={style.scroll}>
                      <div
                        className={
                         ( outoFeeInUpdate || activeStates[option.label] )
                            ? style.sliderL
                            : style.sliderR
                        }
                        onClick={() => toggleActiveState(option.label)}
                      >
                        <div
                          className={
                            ( outoFeeInUpdate || activeStates[option.label] )
                              ? style.CircleL
                              : style.CircleR
                          }
                        />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              )}
            </div>

            {radio && activeStates[option.label] && (
              <div>
              
                <p>
                  Description<span style={{ color: "gray" }}>(Optional)</span>
                </p>
                <TextField
                  textfild="bigTextBox"
                  name="descriptionValue"
                  OnchangeHnadeler={(e) => onChangeDescHandeler(option, e)}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default SquareRadio;
