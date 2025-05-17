import React, { useContext, useEffect, useMemo, useState } from "react";
import Header from "../ViewVendor/Header";
import RoomEdit from "../../Edit/EditRoom/RoomEdit";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import image from "../../../../Assets/Image.svg";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import { useGetSpecificRoomQuery } from "../../../../services/PostApi";
import FacilitiesView from "../../../Main_dashboard/HomeDashboard/ViewVendor/FacilitiesView";
import HotelDetailsSkeleton from "../ViewVendor/HotelDetailsSkeleton";
const RoomView = () => {
  const navigate = useNavigate();
  const paramId = useParams();
  const [Edit, setEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("Edit", JSON.stringify(Edit));
  }, [Edit]);

  // const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  const id = useMemo(() => ctx?.IdSpesificRoom || paramId, [ctx, paramId]);

  const { data, error, isLoading } = useGetSpecificRoomQuery({
    id: ctx?.IdSpesificRoom,
  });


  if (isLoading) return <HotelDetailsSkeleton />;
  if (error) return <p>No Hotels Found</p>;

  const openPageHandeler = () => {
    navigate(`/RoomsList/RoomView/${ctx?.IdSpesificRoom}`);
  };
  
  const fakeData = {
    primary_images: data.data.room.images||[image, image, image, image],
  };
  return (
    <div className={`w-full font-usedFont px-2 bg-[#80808015]`}>
      <div className="grid justify-center  pb-[100px] ">
        <Header
          data={data?.data?.room?.name}
          setEdit={setEdit}
          openPageHandeler={openPageHandeler}
          Room
        />
        {Edit ? (
          <RoomEdit data={data} />
        ) : (
          <div className="bg-white pb-10 sm:w-[99%] mt-[10px] p-2 pr-0  rounded-lg">
            <div className="sm:flex">
              <PrimaryImage_View
                data={fakeData}
                DimensionsS="w-[90px] h-[90px]"
                DimentionsB=" sm:h-[250px] h-[200px]"
                wd="370px"
                ViewAll={true}
              />
              <div className="sm:w-[320px] w-[370px] ">
                <div className="flex justify-between items-center">
                  <b>{data?.data?.room?.name}</b>
                  <div>
                    {" "}
                    <p className="mb-0 bg-[#0080005b] rounded-[6px] p-1 text-[#188b18] text-[10px]">
                      {data?.data?.room?.status}
                    </p>
                    <p className="text-[10px] mt-[3px] ml-3 ">
                      Size:{" "}
                      <span className="text-[orange]">
                        {data.data.room.size.value} {data.data.room.size.unit}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="flex flex-nowrap text-[gray]">
                  {data.data.room.description}
                </p>
                <div className="flex mt-[5px] ">
                  <div className="flex flex-wrap gap-2 mt-[-14px]">
                    {data?.data?.room?.bed.map((bed) => (
                      <div className="bg-[#ffa60065] text-[orange] px-[3px] text-[13px] rounded-[3px]">
                        {bed.count} {bed.type}
                      </div>
                    ))}
                  </div>
                </div>

               <p className="text-[10px]">
  capacity: {data.data.room.capacity.adults} adults, {data.data.room.capacity.children} children, {data.data.room.capacity.maxGuests} maxmum Guest 
</p> 

                <div className="flex justify-between text-[13px] items-end ">
                  <p>
                    Avalible Room:
                    <span className="text-[orange]">
                      {" "}
                      {data.data.room.available_rooms}
                    </span>
                  </p>
                  <p>
                    Price per night:{" "}
                    <span className="text-[orange]">
                      {data.data.room.price_per_night} {data.data.room.currency}
                    </span>
                  </p>
                </div>
              </div>
            </div>
<div className="grid gap-3">

            <FacilitiesView
              RoomFacilityName={"Room Bathroom Facilities"}
              iconName={"bathtub"}
              room
              facilities={data.data.room.available_in_your_own_bathroom}
            />
            <FacilitiesView
              RoomFacilityName={"Room Facilities"}
              iconName={"room_preferences"}
              room
              facilities={data.data.room.facilities}
            />
            <FacilitiesView
              RoomFacilityName={"Room view Facilities"}
              iconName={"visibility"}
              room
              facilities={data.data.room.view}
            />
            <FacilitiesView
              RoomFacilityName={"Room Main Facilities"}
              iconName={"room_preferences"}
              room
              facilities={data.data.room.main_facilities}
            /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomView;
