// components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { VendorData } from "../HomeDashboard/comman/Data";
import { AnimatePresence, motion } from "framer-motion";
import icon2 from "../../../Assets/Ellipse 411.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext1 from "../../Authentication/Context/Mian-Page-Context";

const MobileMenu = ({profileViewHandeler}) => {
  const navigate =useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(AuthContext1); // Use correct context name

  const toggleMenu = () => setIsOpen((prev) => !prev);
   const handleTogglePopup = () => {
     ctx.logout(); // Call logout function from context
   };
  return (
    <nav className="  fixed top-0 left-0 w-full  z-50">
      <div className="max-w-7xl bg-[#2222af] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo placeholder */}
          <div className="flex items-center justify-center gap-3">
              <img src={icon2} className="cursor-pointer w-10 h-10" onClick={profileViewHandeler} />

          <div className="text-[white] font-bold text-lg">sphinx</div>
        
          </div>
              
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">   
            <div className="relative">
                    <Bell size={30} className="black" onClick={()=>navigate('/MainDashboaed/nNotifications')} />
                    {4 > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                        {4 > 99 ? '99+' : 4}
                      </span>
                    )}
                  </div>
            <button
              onClick={toggleMenu}
              className="text-[#090960] focus:outline-none p-2 rounded-md border-none bg-[#ffffff65]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div className="flex items-center justify-end w-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10  }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden  bg-[#2222af] rounded-b-lg px-4 py-4 shadow-md"
          >
            {VendorData.icons.map((item,index) => (
           <NavLink
           key={index}
           to={item.path || "#"}
           className={({ isActive }) =>`
             block no-underline mb-1 px-1 py-2 rounded-lg  transition-colors duration-200 
              text-white hover:bg-orange-300 w-[200px] ${
                isActive ? "bg-[orange] text-white" : "bg-blue-600"
              }
           `}
         >

           {item.label}
         </NavLink>
            ))}
                    <NavLink
           onClick={handleTogglePopup}
           to={"/"}
           className={({ isActive }) =>`
             block no-underline mb-1 px-1 py-2 rounded-lg  transition-colors duration-200 
              text-white hover:bg-white/10 w-[200px] ${
                isActive ? "bg-[orange] text-white" : "bg-blue-600"
              }
          ` }
         >
           logout
         </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    
    </nav>
  );
};

export default MobileMenu;
