import React, { useEffect, useState } from "react";
import appData from "../../../../config/appData";
import Button from "../../../Authentication/regular_components/Button";
import { useAddFacilitieMutation } from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const FacilitiesUpdate = ({
  data,
  dataDisplayed,
  title,
  labelKey = "label",
  valueKey = "value",
}) => {
  const [selected, setSelected] = useState([]);
  const [oldDataSelected,setoldDataSelected]=useState([])
  const [newSelection, setNewSlection] = useState([]);
  const [AddFacilitie, { isLoading, error }] = useAddFacilitieMutation();
  // Synchronize `selected` state with `data.facilities` whenever `data` changes
  useEffect(() => {
    if (data?.facilities) {
      setSelected(data?.facilities.map((item) => item.facility));
      setoldDataSelected(data?.facilities.map((item) => item.facility))
    }
  }, []);

  const id = data._id;
  const handleSelection = (item) => {

     let  newSelected = oldDataSelected.includes(item)
      ? newSelection.filter((itemm) => itemm !== item)
      : ( [...newSelection,item]);

     let Selected = selected.includes(item)
      ? selected.filter((itemm) => itemm !== item)
      : ([...selected, item]);

  
    setSelected(Selected);
    setNewSlection(newSelected)
   
  
  };
  // console.log("selected" ,selected);
  const handelingFacilities = () => {
    const facilities = [];
    selected.forEach((item) => {
      facilities.push({
        facility: { en: item },
        additional_cost: false,
      });
    });
    // console.log({ ...facilities });
    const newSelectionn = [...new Set(newSelection)]; //remove duplicate values
    console.log("new selected",newSelectionn);
    AddFacilitie({
      id: id,
      body: { facility: { en: "24-Hour Front Desk" }, additional_cost: false },
    });
  };
  // console.log(selected);
  
  return (
    <div className="mt-[10px]">
      <b className="text-[20px]">{title}</b>
      <div className="flex flex-wrap gap-2 mt-5 w-full ">
        {dataDisplayed.map((item) => (
          <div key={item.value} className="flex flex-col ">
            <label className="flex items-center gap-4 cursor-pointer ">
              <input
                type="checkbox"
                name={item[labelKey]}
                value={item[labelKey]}
                checked={selected.includes(item[labelKey])}
                onChange={() => {handleSelection(item[labelKey])


                }}
                className="peer hidden"
              />
              <div
                className={`w-3 h-3  border-solid border-2 text-[10px] border-[#000000a4] text-white  rounded-[2px] flex items-center justify-center peer-checked:bg-blue-500`}
              >
                {selected.includes(item[labelKey]) && "✔"}
              </div>
              <span className="text-sm text-gray-700 text-[10px]">
                {item[labelKey]}
              </span>
            </label>
          </div>
        ))}
      </div>
      {error && (
        <div className="text-red-500 text-sm">
          Error: {error?.data?.message || "Failed to update image"}
        </div>
      )}
      <div className="flex justify-end mb-[10px]  ">
        {isLoading ? (
          <SpinnerLoading dimentians="h-[30px] ml-[100px] text-[blue]" />
        ) : (
          <Button
            className="border-none rounded-[8px] h-[30px] w-[60px] bg-[blue] cursor-pointer text-white "
            type="button"
            name={
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-[15px] mt-[-9px]">
                  edit
                </span>
                <p className="text-[15px] mt-[4px]">edit</p>
              </div>
            }
            onClickAction={handelingFacilities}
          />
        )}
      </div>
    </div>
  );
};

export default FacilitiesUpdate;
