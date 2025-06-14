import React, { useState, useRef, useEffect } from "react";
import deleteIcon from"../../../../Assets/trash.png"
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";


const DotMenu = ({ id ,Loading,error,deleteFunction }) => {
  const [open, setOpen] = useState(false);


  const [isPop_up, SetPop_up] = useState(false);
  const menuRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const confirmDeletionHandeler = (e) => {
    e.preventDefault()
    e.stopPropagation();
    // console.log("success");
    SetPop_up(true);
   
  };
  const CancelDeleteHandeler = (e) => {
    e.preventDefault()
    e.stopPropagation();

      SetPop_up(false);
     
  };

  const deleteFunctionHandeler = (e) => {
    e.preventDefault()

    deleteFunction({id});
    SetPop_up(false);
    e.stopPropagation();
  };
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={(e) => {setOpen((prev) => !prev)
          e.preventDefault()
          e.stopPropagation();
        }}
        className="p-2 border-none h-[20px] rounded-sm  flex items-center justify-center bg-transparent hover:bg-[#6666db06]  transition"
      >
        <p className="text-[20px] mt-[2px] ">...</p>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right  rounded-md bg-white border-[blue] shadow-lg">
          <div className="py-1">
            <button className="block px-4 py-2 text-sm w-full text-left bg-white border-none hover:bg-gray-100">
              Edit
            </button>
            <button
              onClick={confirmDeletionHandeler}
              className="block px-4 py-2 text-sm w-full text-left bg-white border-none hover:bg-gray-100"
            >
              Delete
            </button>
            <button className="block px-4 py-2 text-sm w-full text-left bg-white border-none hover:bg-gray-100">
              View
            </button>
          </div>
        </div>
      )}
      {isPop_up && (
        <PopupMessage
          error={true}
          popMessageCss="popupRemove"
          title="Delete Hotel"
          details="Are you sure you want to delete this hotel?"
          CancelbtnCss="RedCssS"
           remove={true}
         
          cancel={true}
          btnCss="whiteRCssS"
          btnMessage2="sure"
          btnMessage1="cancel"
          cancelHandeler={CancelDeleteHandeler}
          close={true}
          messageImg={deleteIcon}
          handlebackNavigation={deleteFunctionHandeler}
          handleTogglePopup={CancelDeleteHandeler}
        />
      )}
    </div>
  );
};

export default DotMenu;
