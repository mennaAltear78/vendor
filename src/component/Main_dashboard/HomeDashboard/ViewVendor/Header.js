import React, { useContext } from "react";

import closeImge from "../../../../Assets/icons/Frame 1707481067.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import Button from "../../../Authentication/regular_components/Button";
const Header = ({ data }) => {
  const navigate = useNavigate();

  const ctx =useContext(AuthContext)

  const openPageHandeler=()=>{
    navigate(`/PropertyList/${ctx.IdSpesificHotel}`)
  }
  return (
    <div className="bg-white rounded-b-lg p-4 sm:h-[60px] font-usedFont place-content-center sm:w-[700px] w-[360px] flex shadow-md">
      <div className="w-full mt-[-20px] ">
        <h1 className="font-bold ">{data?.data?.hotel?.name}</h1>
      </div>

      <div className="flex w-full justify-end pr-3 gap-3">
           
                      <Button style='border-none rounded-[4px] h-6 w-[40px] bg-[blue] cursor-pointer text-white' type="button" name="Edit" />
                
        <span onClick={openPageHandeler}  class="material-symbols-outlined   bg-[#8080801e] p-[4px] rounded-[4px] h-4 cursor-pointer text-[18px]">open_in_full</span>
        <img
          src={closeImge}
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default Header;
