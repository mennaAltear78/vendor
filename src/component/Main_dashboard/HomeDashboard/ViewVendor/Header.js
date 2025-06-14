import React, { useContext } from "react";
import closeImge from "../../../../Assets/icons/Frame 1707481067.png";
import Button from "../../../Authentication/regular_components/Button";
import { useNavigate } from "react-router-dom";
const Header = ({ data, setEdit, Edit,  id, Room }) => {
 
  const navigate = useNavigate();
  return (
    <div className="bg-white  items-center justify-center rounded-b-lg p-4 sm:h-[60px] font-usedFont place-content-center sm:max-w-[700px] max-w-[360px]  flex shadow-md ">
      <div >
        <h1 className="font-bold mt-[4px] sm:text-[30px] text-[15px] sm:w-[300px] w-[160px]">
          {data}
        </h1>
      </div>
      <div className="flex w-full justify-end pr-3 ml-[-60px] gap-2">
        {!Edit ? (
          <div className="flex gap-2">
            <Button
              className="border-none rounded-[8px] mt-[-3px]  h-[30px] w-[60px] bg-[blue] cursor-pointer text-white"
              type="button"
              name={
                <div className="flex gap-1  items-center ">
                  <span class="material-symbols-outlined text-[15px] mt-[-9px] ">
                    edit
                  </span>
                  <p className="text-[15px] mt-[4px]">Edit</p>
                </div>
              }
              onClickAction={() => {
                setEdit(true);
              }}
            />{" "}
            <span
              onClick={() => {
                {
                  Room
                    ? navigate(`/RoomsList/RoomView/${id}`)
                    : navigate(`/PropertyList/${id}`);
                }
                setEdit(true);
              }}
              class="material-symbols-outlined   bg-[#8080801e] p-[4px] rounded-[4px] h-4 cursor-pointer text-[18px]"
            >
              open_in_full
            </span>{" "}
          </div>
        ) : null}

        <img
          src={closeImge}
          alt="Close"
          title={Edit ? "Exit Edit Mode" : "Go Back"}
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            Edit ? setEdit(false) : (Room?navigate(`/RoomsList/${id}`):navigate("/PropertyList"))
            // setExpand(true)
          }}
        />
      </div>
    </div>
  );
};

export default Header;
