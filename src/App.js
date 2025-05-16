import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FacingProblem from "./component/Authentication/Sin_In/FacingProblem/FacingProblem";
import ForgetPasswordCard from "./component/Authentication/Sin_In/forgetPassword/ForgetPasswordCard";
import Sin_in_main from "./component/Authentication/Sin_In/Sin_in_main/Sin_in_main";
import ContactSupport from "./component/Authentication/Sin_In/ContactSupport/ContactSupport";
import Creater_your_partner1 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner1";
import Creater_your_partner2 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner2";
import Creater_your_partner3 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner3";
import NotFound from "./helpers/NotFound";
import SendingCode from "./component/Authentication/Sin_In/FacingProblem/SendingCode";
import { AuthContext1Provider } from "./component/Authentication/Context/Mian-Page-Context";
import AuthenRequire from "./Layout/AuthenRequire";

import WelcomePage from "./component/Main_dashboard/CreateYourVendor/CreateYours/WelcomePage";

//import Speak from "./component/Main_dashboard/CreateYourVendor/CreateYours/Speak";
import Facilities from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/Facilities";
import Polices from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/Polices";
import Payment from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/Payment";
import CompleteProfie from "./component/Main_dashboard/CreateYourVendor/CreateYours/CompleteProfie";
import RoomDetail from "./component/Main_dashboard/CreateYourVendor/CreateYours/CreateRoom/RoomDetail";
import BedDetails from "./component/Main_dashboard/CreateYourVendor/CreateYours/CreateRoom/BedDetails";
import RoomFacilities from "./component/Main_dashboard/CreateYourVendor/CreateYours/CreateRoom/RoomFacilities";
import BathRoomFacilities from "./component/Main_dashboard/CreateYourVendor/CreateYours/CreateRoom/BathRoomFacilities";
import HotelImages from "./component/Main_dashboard/CreateYourVendor/CreateYours/UploadImages/HotelImages";
// import main_dashboard from '../src/component/Authentication/Context/Mian-Page-Context'
import LocattionDataHotel from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/LocationDataHotel";
import Property_List from "./component/Main_dashboard/HomeDashboard/Property_List";
import ChooseHotel from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/ChosienType";
import AboutHotel from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/AboutHotel";
import Speak from "./component/Main_dashboard/CreateYourVendor/CreateYours/createHotel/Speak";

import Profile_View from "./component/Profile_View/Profile_View";
import VendorView from "./component/Main_dashboard/HomeDashboard/ViewVendor/VendorView";
import ReviewView from "./component/Main_dashboard/HomeDashboard/ViewVendor/ViewReview/ReviewView";
import ScrollToTop from "./helpers/ScrollToTop";
import Rooms_List from "./component/Main_dashboard/HomeDashboard/ViewRooms/Rooms_List";
import HotelEdit from "./component/Main_dashboard/Edit/EditHotel/HotelEdit";
import RoomView from "./component/Main_dashboard/HomeDashboard/ViewRooms/RoomView";
import RoomEdit from "./component/Main_dashboard/Edit/EditRoom/RoomEdit";

const routes = [
  { path: "/", element: <Sin_in_main /> },
  { path: "/FacingProblem", element: <ForgetPasswordCard /> },
  { path: "/ForgetPasswordCard", element: <FacingProblem /> },
  { path: "/ContactSupport", element: <ContactSupport /> },
  { path: "/CreateAccount", element: <Creater_your_partner1 /> },
  { path: "/CreateAccount2", element: <Creater_your_partner2 /> },
  { path: "/CreateAccount3", element: <Creater_your_partner3 /> },
  { path: "/SendingCode", element: <SendingCode /> },
];

function App() {
  return (
    <AuthContext1Provider>
      <div>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Protected Routes (Require Authentication) */}
          <Route element={<AuthenRequire />}>
            <Route path="/MianDahboard" element={<WelcomePage />} />
            <Route path="/MianDahboard/CreateHotel" element={<ChooseHotel />} />
            <Route path="/AboutHotel" element={<AboutHotel />} />
            <Route path="/speak" element={<Speak />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/polices" element={<Polices />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/CompleteProfie" element={<CompleteProfie />} />
            <Route path="/RoomDetail" element={<RoomDetail />} />
            <Route path="/BedDetails" element={<BedDetails />} />
            <Route path="/RoomFacilities" element={<RoomFacilities />} />
            <Route path="/BathRoomFacilities" element={<BathRoomFacilities />} />
            <Route path="/HotelImages"element={<HotelImages title="Primary Images"  limits="(Must upload 3 images)" HotelImages={true} />}/>
           
           
            <Route path="/RoomImage" element={<HotelImages title="Room Images"limits="(Must upload 5 images atleast)"/>}/>
            <Route path="/LocattionDataHotel"element={<LocattionDataHotel />}/>

          </Route>
          <Route path="/PropertyList" element={<Property_List />} />
          <Route path="/PropertyList/:id" element={<VendorView />} /> 
          <Route path="/PropertyList/EditHotel" element={<HotelEdit />} />
          <Route path="/profileView/:id/Reviews" element={<ReviewView />} />

          <Route path="/RoomsList/:id" element={<Rooms_List />} />
          <Route path="/RoomsList/RoomView/:id" element={<RoomView />} />
          <Route path="/RoomsList/EditHotel" element={<RoomEdit />} />

          <Route path="/profileView" element={<Profile_View />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContext1Provider>
  );
}

export default App;
