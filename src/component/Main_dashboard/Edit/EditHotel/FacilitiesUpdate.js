import React, { useEffect, useState } from "react";
import appData from "../../../../config/appData";
import Button from "../../../Authentication/regular_components/Button";
import { useAddFacilitieMutation, useDeleteFacilityMutation } from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const FacilitiesUpdate = ({
  data,
  dataDisplayed,
  title,
  labelKey = "label",
  valueKey = "value",
  Room,
  id,
  AddFunction,
  DeleteFunction,
  isLoading = false,
  error = false,
  bathroom_facilities,
  view,
  facilitie
}) => {
console.log(id ,"data");

  const [selected, setSelected] = useState([]);
  const [oldDataSelected, setoldDataSelected] = useState([])
  const [newSelection, setNewSlection] = useState([]);

  // Synchronize `selected` state with `data.facilities` whenever `data` changes
  useEffect(() => {
    if (data) {
      setSelected(Room ? data : data.map((item) => item.facility));
      setoldDataSelected(Room ? data : data.map((item) => item.facility))
    }
  }, [data]);
console.log(selected,'selected');


  const handleSelection = (item) => {

    let newSelected = oldDataSelected.includes(item)
      ? newSelection.filter((itemm) => itemm !== item)
      : ([...newSelection, item]);

    //remove duplicate items
    let Selected = selected.includes(item)
      ? selected.filter((itemm) => itemm !== item)
      : ([...selected, item]);

    console.log(selected, "selected");
    console.log(oldDataSelected, "new");

    setSelected(Selected);
    setNewSlection(newSelected)


  };
  // console.log("selected" ,selected);
  const handelingFacilities = () => {

    console.log("data before Add All Element Selected", selected);

    const facilities = [];
    selected.forEach((item) => {
     Room ? facilities.push(item) : facilities.push({
        facility: { en: item },
        additional_cost: false,
      });
    });
  

    //remove duplicate values
    const newSelectionn = [...new Set(newSelection)]; 


    console.log("new selected", newSelectionn);
    let newAddFacilities = []

    //new selection on formate
    newSelectionn.forEach((item) => {
      !Room ? newAddFacilities.push({
        facility: { en: item },
        additional_cost: false,
      }) : newAddFacilities.push(item)
    });

    //remove
    const removed = oldDataSelected.filter(item => !selected.includes(item));

    //remove selected formate
    let deletedFacility = []
    removed.forEach((item) => {
      !Room ? deletedFacility.push({
        facility: { en: item },
      }) : deletedFacility.push(item)
    });

    console.log({ ...{ ...deletedFacility[0] } }, "deleted");
    //send to backend
    // Hotel
    //remove
    if(!Room){
         if (removed.length != 0) {
      DeleteFunction({ id: id, body: { ...deletedFacility[0] } })
      deletedFacility = []
    }
    console.log({ ...deletedFacility[0] });
    console.log("data after Add", newAddFacilities);
    //Add 
    if (newSelection.length != 0) {
      AddFunction({
        id: id,
        body: { facilities: newAddFacilities },
      });
      newAddFacilities = []
      setNewSlection([])
      
    } 
   return }else if(Room){
   //Room
  //remove
  let finalDeleteFacilities={}
  let finalAddFacilities={}
  // console.log({facilities:{en:deletedFacility}},"room");
  // console.log({view:{en:deletedFacility}},"room");
  // console.log({bathroom_facilities:{en:deletedFacility}},"room");

  if (facilitie) {
    finalAddFacilities = { facilities: { en: deletedFacility } };
    finalDeleteFacilities = { facilities: { en: deletedFacility } };
  } else if (view) {
    finalAddFacilities = { view: { en: deletedFacility } };
    finalDeleteFacilities = { view: { en: deletedFacility } };
  } else if (bathroom_facilities) {
    finalAddFacilities = { bathroom_facilities: { en: deletedFacility } };
    finalDeleteFacilities = { bathroom_facilities: { en: deletedFacility } };
  }
  
 console.log("final",finalDeleteFacilities,finalAddFacilities);
 
  if (removed.length != 0) {
    DeleteFunction({ id: id, body:finalDeleteFacilities})
    deletedFacility = []
  }
  //Add
 
  console.log({ view:{en:newAddFacilities } } ,"room");
  console.log({facilities:{en:newAddFacilities}} ,"room");
  console.log({bathroom_facilities:{en:newAddFacilities}} ,"room");

  
  if (newSelection.length != 0) {
    AddFunction({
      id: id,
      body:finalAddFacilities,
    });
    newAddFacilities = []
    setNewSlection([])
    
  } 
    }

   


    // console.log({ ...deletedFacility[0] });
    // console.log("data after Add", newAddFacilities);
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
                onChange={() => {
                  handleSelection(item[labelKey])


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
