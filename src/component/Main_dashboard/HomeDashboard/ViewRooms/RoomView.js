import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import { useGetSpecificRoomQuery } from "../../../../services/PostApi";

// Components
import Header from "../ViewVendor/Header";
import RoomEdit from "../../Edit/EditRoom/RoomEdit";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import FacilitiesView from "../../../Main_dashboard/HomeDashboard/ViewVendor/FacilitiesView";
import HotelDetailsSkeleton from "../ViewVendor/HotelDetailsSkeleton";
import BedTypeView from "../comman/BedTypeView";
import Active from "../comman/Active";

// Assets
import defaultImage from "../../../../Assets/Image.svg";

// Config
const roomFacilitiesConfig = [
  { name: "Room Bathroom Facilities", icon: "bathtub", dataKey: "available_in_your_own_bathroom" },
  { name: "Room Facilities", icon: "room_preferences", dataKey: "facilities" },
  { name: "Room view Facilities", icon: "visibility", dataKey: "view" },
  { name: "Room Main Facilities", icon: "room_preferences", dataKey: "main_facilities" },
];

const RoomView = () => {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("Edit", JSON.stringify(editMode));
  }, [editMode]);

  const { data, error, isLoading } = useGetSpecificRoomQuery({
    id: ctx?.IdSpesificRoom,
  });

  const handleBackToRoomList = () => {
    navigate(`/RoomsList/RoomView/${ctx?.IdSpesificRoom}`);
  };

  if (isLoading) return <HotelDetailsSkeleton />;
  if (error || !data?.data?.room) return <p>No Hotels Found</p>;

  const room = data.data.room;

  const images = room.images?.length > 0 ? room.images : [defaultImage, defaultImage, defaultImage, defaultImage];

  return (
    <div className="w-full font-usedFont px-2 bg-[#80808015]">
      <div className="grid justify-center pb-[100px]">
        <Header data={room.name} setEdit={setEditMode} openPageHandeler={handleBackToRoomList} Room />
        
        {editMode ? (
          <RoomEdit data={data} />
        ) : (
          <div className="bg-white pb-10 sm:w-[99%] mt-[10px] p-2 pr-0 rounded-lg">
            <div className="sm:flex">
              <PrimaryImage_View
                data={{ primary_images: images }}
                DimensionsS="w-[90px] h-[90px]"
                DimentionsB="sm:h-[250px] h-[200px]"
                wd="370px"
                ViewAll
              />

              <div className="sm:w-[320px] w-[370px]">
                <div className="flex justify-between items-center">
                  <b className="text-[24px]">{room.name}</b>
                  <div>
                    <Active complete={room.status === "Available"?true:false} ActiveName="Available" NotActiveName="Not Available" />
                    <p className="text-[10px] mt-[3px] ml-3">
                      Size:
                      <span className="text-[orange]"> {room.size.value} {room.size.unit}</span>
                    </p>
                  </div>
                </div>

                <p className="text-[gray]">{room.description}</p>

                <BedTypeView beds={room.bed} />

                <p className="text-[10px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">escalator_warning</span>
                  Capacity: {room.capacity.adults} adults, {room.capacity.children} children, {room.capacity.maxGuests} max guests
                </p>

                <div className="flex justify-between text-[14px] items-end mt-2">
                  <p>
                    Available Room:
                    <span className="text-[orange]"> {room.available_rooms}</span>
                  </p>
                  <p>
                    Price per night:
                    <span className="text-[orange]"> {room.price_per_night} {room.currency}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 mt-4">
              {roomFacilitiesConfig.map(({ name, icon, dataKey }) => (
                <FacilitiesView
                  key={dataKey}
                  RoomFacilityName={name}
                  iconName={icon}
                  room
                  facilities={room[dataKey]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomView;
