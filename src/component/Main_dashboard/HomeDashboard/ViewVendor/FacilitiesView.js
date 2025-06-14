
const Facilities = ({ facilities, room, RoomFacilityName, iconName }) => {
  return (
    <div className="sm:w-[700px] sm:ml-0 ml-3 font-usedFont w-[360px] mt-[-10px]">
      <div className="flex items-center mb-0">
        <h2>
          {RoomFacilityName ? (
            <p>
              <span class="material-symbols-outlined text-[orange] text-[16px]">
                {iconName}
              </span>
              {RoomFacilityName}
            </p>
          ) : (
            "Facilities"
          )}
        </h2>
      </div>

      <div className="flex gap-3 mt-[-17px]  flex-wrap items-center ">
        {facilities?.map((facility, index) => (
          <div className="flex items-center gap-1 ">
            <span
              key={index} // Add a unique key for each element
              className={`material-symbols-outlined text-[13px] ${
                room ? "text-[orange]" : "text-[orange]"
              }`}
            >
              {room ? "check_small" : "festival"}
              {/* Check if the facility exists */}
            </span>
            <span className="text-[black]  flex text-[14px] ">
              {room ? facility : facility.facility}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
