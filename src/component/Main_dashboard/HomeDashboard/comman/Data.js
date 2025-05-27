import home from "../../../../Assets/icons/home.png";
import graph from "../../../../Assets/icons/graph.svg";

export const VendorData = {
  icons : [
    { ActiveLine: true, img: graph, label: "Home" ,path:'/MianDahboard' },
    { ActiveLine: false, img: home, label: "Reservations" ,path:'/'},
    { ActiveLine: false, img: graph, label: "Hotel Creating" ,path:'/CompleteProfie' },
    { ActiveLine: false, img: home, label: "Guest Reviews",path:'/' },
    { ActiveLine: false, img: graph, label: "Property",path:'/PropertyList' },
    { ActiveLine: false, img: home, label: "Analytics",path:'/' },
    { ActiveLine: false, img: graph, label: "Inbox" ,path:'/'},
    { ActiveLine: false, img: home, label: "Rates & Aviablity",path:'/' },
    
  ],
optionSort:[
  { value: '-price_per_night', label: 'Price per night (descending)' },
  { value: 'price_per_night', label: 'Price per night (ascending)' },
  { value: '-createdAt', label: 'Creation date (descending)' },
  { value: 'createdAt', label: 'Creation date (ascending)' },
  { value: 'size_value', label: 'Size value (ascending)' },
  { value: '-size_value', label: 'Size value (descending)' },
  { value: 'capacity_maxGuests', label: 'Max guests (ascending)' },
  { value: '-capacity_maxGuests', label: 'Max guests (descending)' },
],
optionFilterHotel : [
    { value: "Hotel", label: "Hotel" },
    { value: "Apartment", label: "Apartment" },
    { value: "Villa", label: "Villa" },
    { value: "Hostel", label: "Hostel" },
    { value: "Resident", label: "Resident" },
     { value: null, label: "All" },

],
 optionFilterRoom :[
   { value: "Single Room", label: "Single Room" },
    { value: "Double Room", label: "Double Room" },
    { value: "Triple Room", label: "Triple Room" },
    { value: "Quad Room", label: "Quad Room" },
    { value: "Suit Room", label: "Suit Room" },
    { value: "Junior Suite Room", label: "Junior Suite Room" },
    { value: "Executive Suite Room", label: "Executive Suite Room" },
    { value: null, label: "All" },

]
}
