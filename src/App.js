import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FacingProblem from "./component/Authentication/Sin_In/FacingProblem/FacingProblem";
import ForgetPasswordCard from "./component/Authentication/Sin_In/forgetPassword/ForgetPasswordCard";
import Sin_in_main from "./component/Authentication/Sin_In/Sin_in_main/Sin_in_main";
import ContactSupport from "./component/Authentication/Sin_In/ContactSupport/ContactSupport";
import Creater_your_partner1 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner1";
import Creater_your_partner2 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner2";
import Creater_your_partner3 from "./component/Authentication/Sin_up/Create_your_partner/Creater_your_partner3";
import NotFound from "./NotFound";
import SendingCode from "./component/Authentication/Sin_In/FacingProblem/SendingCode";
import { AuthContext1Provider } from "./component/Authentication/Context/Mian-Page-Context";
import AuthenRequire from "./AuthenRequire";
import Trying from "./trying";
import CreateHotel from "./component/Main_dashboard/MianHeader/CreateYours/CreateHotel";
import WelcomePage from "./component/Main_dashboard/MianHeader/CreateYours/WelcomePage";
import ChoiseHotel from "./component/Main_dashboard/MianHeader/CreateYours/ChosienType";
import AboutHotel from "./component/Main_dashboard/MianHeader/CreateYours/AboutHotel";
import Speak from "./component/Main_dashboard/MianHeader/CreateYours/Speak";
import Facilities from "./component/Main_dashboard/MianHeader/CreateYours/Facilities";
import Polices from "./component/Main_dashboard/MianHeader/CreateYours/Polices";
import Payment from "./component/Main_dashboard/MianHeader/CreateYours/Payment";
import CompleteProfie from "./component/Main_dashboard/MianHeader/CreateYours/CompleteProfie";
import RoomDetail from "./component/Main_dashboard/MianHeader/CreateYours/RoomDetail";
import BedDetails from "./component/Main_dashboard/MianHeader/CreateYours/BedDetails";
import RoomFacilities from "./component/Main_dashboard/MianHeader/CreateYours/RoomFacilities";
import BathRoomFacilities from "./component/Main_dashboard/MianHeader/CreateYours/BathRoomFacilities";
import HotelImages from "./component/Main_dashboard/MianHeader/CreateYours/HotelImages";
// import main_dashboard from '../src/component/Authentication/Context/Mian-Page-Context'

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
        <Routes>
          {/* Public Routes */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Protected Routes (Require Authentication) */}
          <Route element={<AuthenRequire />}>
           <Route path="/MianDahboard" element={ <WelcomePage />} />
            <Route path="/MianDahboard/CreateHotel" element={<ChoiseHotel />} />
            <Route path="/AboutHotel" element={<AboutHotel />} />
            <Route path="/speak" element={<Speak />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/polices" element={<Polices />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/CompleteProfie" element={<CompleteProfie />} />
            <Route path="/RoomDetail" element={<RoomDetail />} />
            <Route path="/BedDetails" element={<BedDetails />} />
            <Route path="/RoomFacilities" element={<RoomFacilities/>} />
            <Route path="/BathRoomFacilities" element={<BathRoomFacilities/>} />
            <Route path="/HotelImages" element={<HotelImages title='Primary Images' limits='(Must upload 3 images)' HotelImages={true}/>} />
            <Route path="/RoomImage" element={<HotelImages title='Room Images' limits='(Must upload 5 images atleast)'/>} />
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContext1Provider>
  );
}

export default App;
