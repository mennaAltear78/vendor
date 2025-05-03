import React from "react";

const Facilities = ({ facilities }) => {
  const facilityLabels = {
    local_parking: "Parking",
    pool: "Swimming Pool",
    wifi: "WiFi (Public Area)",
    fitness_center: "Gym",
    bathtub: "Bathroom",
    restaurant: "Restaurant",
    bed: "Bedroom",
    local_activity: "Activities",
  };
console.log(facilities);

  return (
    <div className="sm:w-[700px] font-usedFont w-[360px] mt-[-13px]">
      <h2>Facilities</h2>
      <div className="flex gap-3 mt-[-10px]  flex-wrap items-center ">
        {facilities.map((facility, index) => (
          <div className="flex gap-1 ">
            <span
              key={index} // Add a unique key for each element
              className="material-symbols-outlined text-[15px]"
            >
              {facilityLabels[facility] || "festival"}
              {/* Check if the facility exists */}
            </span>
            <span className="text-[black]  flex text-[16px]">{facility.facility}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
