import React from "react";
import img from "../../../Assets/Ellipse 411.png";
function ReviewCard() {
  return (
    <div className="font-usedFont">
      <div className="flex items-center gap-3">
        <div>
          <img src={img} className="w-14 h-14 " />
        </div>
        <div>
      <div className="flex justify-between"><p className="text-[10px]">Mostafa Flutters</p>
      <p className="text-[10px] text-[#8080808c] ">2 Minutes ago</p>
        </div>    
          <div className="bg-[pink] text-[10px] mt-[-6px] rounded-sm h-3 w-[60px] flex justify-center text-[#fa274b]">
            receptionist
          </div>
          <p className="text-[13px] truncate max-w-[200px] mt-1 text-[gray]">
            this hotel is really good and i recommend this 
          </p>
        </div>
      </div>

      <hr className="h-[1px] bg-[#80808075] border-none my-4" />
    </div>
  );
}

export default ReviewCard;
