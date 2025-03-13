import Hotel from "../../src/Assets/icons/buildings.svg";
import Apartement from "../../src/Assets/icons/house.svg";
import Villa from "../../src/Assets/icons/building-3.svg";
import Hostel from "../../src/Assets/icons/house-2.svg";
import Resident from "../../src/Assets/icons/buildings-2.svg";
import bed from "../Assets/Frame 1707481215.png";

const appData = {
  RoomFacilitie: [
    { value: "option1", value: "Free Wi-Fi" },
    { value: "option2", value: "Air conditioning" },
    { value: "option3", value: "Desk" },
    { value: "option4", value: "Tea/Coffee maker" },
    { value: "option5", value: "Flat-screen TV" },
    { value: "option1", value: "Fan" },
    { value: "option2", value: "Electric Katel" },
    { value: "option3", value: "Wake-up service" },
    { value: "option4", value: "Heating" },
    { value: "option5", value: "Safety deposit box" },
    { value: "option4", value: "Towels/sheets (extra fee)" },
    { value: "option5", value: "Entire unit located on ground floor" },
  ],
  RoomViews: [
    { value: "option1", value: "Mountain View" },
    { value: "option2", value: "City View" },
    { value: "option3", value: "Sea View" },
    { value: "option4", value: "Garden View" },
    { value: "option5", value: "Pool View" },
 ],

  BathroomFacilities: [
    { value: "option1", value: "Toilet paper" },
    { value: "option2", value: "Shower" },
    { value: "option3", value: "Toilet" },
    { value: "option4", value: "Hairdryer" },
    { value: "option5", value: "Bath" },
    { value: "option1", value: "Free toiletries" },
    { value: "option2", value: "Garden" },
    { value: "option3", value: "Bidet" },
    { value: "option4", value: "Slippers" },
    { value: "option5", value: "Bathrobe" },
    { value: "option4", value: "Spa bath" },
    { value: "option5", value: "Hot tub/Jacuzzi" },
  ],
  RoomMain: [
    { value: "option1", value: "Dishwasher" },
    { value: "option2", value: "Wardrobe" },
    { value: "option3", value: "Microwave" },
  ],
  bedsData: [
    { img: bed, title: "Single Bed", description: "90 - 130 cm wide" },
    { img: bed, title: "Double Bed", description: "131 - 180 cm wide" },
    { img: bed, title: "Queen Bed", description: "150 - 200 cm wide" },
    { img: bed, title: "King Bed", description: "180 - 220 cm wide" },
    { img: bed, title: "Sofa Bed", description: "Varies in size" },
    { img: bed, title: "Bunk Bed", description: "Twin over Twin" },
    { img: bed, title: "Futon Bed", description: "Multi-functional sofa bed" },
    { img: bed, title: "Day Bed", description: "Can be used as a sofa" },
    { img: bed, title: "Murphy Bed", description: "Foldable into a wall" },
  ],
  RoomType: [
    { value: "Single Room", label: "Single Room" },
    { value: "Double Room", label: "Double Room" },
    { value: "Triple Room", label: "Triple Room" },
    { value: "Quad Room", label: "Quad Room" },
    { value: "Suit Room", label: "Suit Room" },
    { value: "Junior Suite Room", label: "Junior Suite Room" },
    { value: "Executive Suite Room", label: "Executive Suite Room" },
  ],
  stepsData: [
    {
      stepNumber: 1,
      title: "Complete Your Profile",
      description:
        "The basics. Add your property name, address, facilities and more.",
    },
    {
      stepNumber: 2,
      title: "Hotel Details",
      description:
        "The basics. Add your property name, address, facilities and more.",
    },
    {
      stepNumber: 3,
      title: "Hotel Images",
      description:
        "The basics. Add your property name, address, facilities and more.",
    },
    {
      stepNumber: 4,
      title: "Room Details",
      description:
        "The basics. Add your property name, address, facilities and more.",
    },
    {
      stepNumber: 5,
      title: "Room Images",
      description:
        "The basics. Add your property name, address, facilities and more.",
    },
  ],
  times: [
    { label: "1.00", value: "1.00" },
    { label: "12.00", value: "12.00" },
    { label: "2.00", value: "2.00" },
    { label: "3.00", value: "3.00" },
    { label: "4.00", value: "4.00" },
    { label: "5.00", value: "5.00" },
    { label: "6.00", value: "6.00" },
    { label: "7.00", value: "7.00" },
    { label: "8.00", value: "8.00" },
    { label: "9.00", value: "9.00" },
    { label: "10.00", value: "10.00" },
    { label: "11.00", value: "11.00" },
  ],
  petsPolicy: [
    { value: "option2", policy: "Pets are not allowed." },
    { value: "option3", policy: "Pets are allowed at no additional " },
    { value: "option4", policy: "Pets are allowed at  additional Cost " },
  ],
  smokingPolicy: [
    { value: "option2", policy: "No smoking allowed." },
    { value: "option3", policy: "Bar" },
    { value: "option4", policy: "Smoking is allowed." },
  ],
  facilities: [
    { value: "option18", facilitie: "Restaurant" },
    { value: "option2", facilitie: "Room service" },
    { value: "option3", facilitie: "Bar" },
    { value: "option4", facilitie: "24-hour front desk" },
    { value: "option5", facilitie: "Fitness centre" },
    { value: "option6", facilitie: "Garden" },
    { value: "option7", facilitie: "Terrace" },
    { value: "option8", facilitie: "Non-smoking rooms" },
    { value: "option9", facilitie: "Airport shuttSpa and wellness centrele" },
    { value: "option10", facilitie: "Hot tub/Jacuzzi" },
    { value: "option11", facilitie: "Free WiFi" },
    { value: "option12", facilitie: "Air conditioning" },
    { value: "option13", facilitie: "Water park" },
    { value: "option14", facilitie: "Electric vehicle charging station" },
    { value: "option15", facilitie: "Swimming pool" },
    { value: "option16", facilitie: "Beach" },
    { value: "option17", facilitie: "Parking" },
  ],
  languages: [
    { value: "option1", lang: "Arabic" },
    { value: "option2", lang: "English" },
    { value: "option3", lang: "German" },
    { value: "option4", lang: "Mandarin" },
    { value: "option5", lang: "Portugals" },
  ],
  ChoiseHotel: [
    {
      title: "Hotel",
      img: Hotel,
      desc: "Accommodation for travellers often offering restaurants, meeting rooms and other guest services",
    },
    {
      title: "Apartment",
      img: Apartement,
      desc: "Make Tour, sit planning to attraction and more..",
    },
    {
      title: "Villa",
      img: Villa,
      desc: "Make Tour, sit planning to attraction and more..",
    },
    {
      title: "Hostel",
      img: Hostel,
      desc: "Make Tour, sit planning to attraction and more..",
    },
    {
      title: "Resident",
      img: Resident,
      desc: "Make Tour, sit planning to attraction and more..",
    },
  ],
  fileList: [
    { name: "Business Registration Certificate", required: false },
    { name: "Hotel License", required: false },
    { name: "Tax Registration Certificate (TIN)", required: false },
  ],
};

export default appData;
