import React, { useContext, useEffect, useMemo, useState } from "react";
import Header from "../ViewVendor/Header";
import RoomEdit from "../../Edit/EditRoom/RoomEdit";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import image from "../../../../Assets/Image.svg";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import { useGetSpecificRoomQuery } from "../../../../services/PostApi";
import FacilitiesView from'../../../Main_dashboard/HomeDashboard/ViewVendor/FacilitiesView'
import HotelDetailsSkeleton from "../ViewVendor/HotelDetailsSkeleton";
const RoomView = () => {
  const navigate = useNavigate();
 const paramId =useParams()
  const [Edit,setEdit]=useState(false)


  useEffect(() => {
    localStorage.setItem("Edit", JSON.stringify(Edit));
  }, [Edit]);

  // const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  const id = useMemo(() => ctx?.IdSpesificRoom || paramId, [ctx, paramId]);

  const { data, error, isLoading } = useGetSpecificRoomQuery({id} );
  console.log(data,"room");

  if (isLoading) return <HotelDetailsSkeleton/>;
  if (error) return <p>No Hotels Found</p>;

  const openPageHandeler = () => {
    navigate(`/RoomsList/RoomView/${ctx.IdSpesificHotel}`);
  };
  const fakeData = {
    primary_images: [image, image, image, image],
  };
  return (
    <div className={`w-full font-usedFont px-2 bg-[#80808015] `}>
      <div className="grid justify-center">
        <Header
          data={data?.data?.room?.name}
          setEdit={setEdit}
          openPageHandeler={openPageHandeler}
        />
        {Edit ? <RoomEdit data={data} />:   <div className="bg-white sm:w-[99%] mt-[10px] p-2 pr-0  rounded-lg">
          <PrimaryImage_View
            data={fakeData}
            DimensionsS="w-[90px] h-[90px]  "
            DimentionsB=" sm:h-[250px] h-[200px]"
            wd="370px"
            ViewAll={true}
          />
          <FacilitiesView facilities={[]} />
        </div>}
     

      </div>
    </div>
  );
};

export default RoomView;
