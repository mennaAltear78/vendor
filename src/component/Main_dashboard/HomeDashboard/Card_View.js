import React, { useState } from "react";
import HotelCard from "./HotelCard";
import SkeletonCardView from "../../Skeletons/SkeletonCardView";
import { RightDrawer } from "./comman/Drawer";
import VendorView from "./ViewVendor/VendorView";

function Card_View({  data, isLoading, error }) {
  const [open, setOpen] = useState(false)

  const dataHotel = data?.data?.hotels || [];

  if (isLoading) {
    return <SkeletonCardView />;
  } else if (error) {
    return (
      <div className="h-screen font-usedFont text-[30px] flex justify-center items-center w-full m-auto">
        NOT FOUND....{" "}
      </div>
    );
  }

  return (
    <table className="w-full ">
      <tbody>
        {dataHotel.map((data, index) => (
          <tr key={index}>
            <td colSpan={6}>
              <HotelCard data={data} setOpen={setOpen}/> 
              <RightDrawer Component={VendorView} open={open} setOpen={setOpen} />
            </td>
          </tr>
        ))}
      </tbody>
     
    </table>
  );
}

export default Card_View;
