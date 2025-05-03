import React from "react";
import MainDashBoardWrapper from "../Authentication/regular_components/MainDashBoardWrapper";
import img from "../../Assets/Ellipse 411.png";
import TitleCars from "../Authentication/Sin_up/Create_your_partner/Create_account_items/TitleCars";
import icon1 from "../../Assets/buildings-2.svg";
import icon2 from "../../Assets/location.svg";
import icon3 from "../../Assets/message-sent-P4zHrKyEAE.svg";
import Button from "../Authentication/regular_components/Button";
import { useGetProfileQuery } from "../../services/PostApi";

// Reusable Menu Item Component
const MenuItem = ({ label, isDanger, isActive, onclick }) => (
  <button
    className={`
      cursor-pointer border-none text-xl bg-white flex justify-start
      ${
        isActive
          ? "w-[70%] bg-[#ffa60065] h-[30px] rounded-e-md border border-solid border-[#fa7b31]"
          : ""
      }
      ${isDanger ? "text-red-600" : "text-black"}
    `}
    onClick={onclick}
  >
    {label}
  </button>
);

// Reusable Input Field Component
const InputField = ({
  label,
  type = "text",
  disabled = false,
  placeholder,
  className,
  margin,
}) => (
  <div className="w-full flex flex-col items-start">
    <p className={`mb-1 text-sm ${margin}`}>{label}</p>
    <input
      type={type}
      placeholder={placeholder || label}
      name={label}
      disabled={disabled}
      className={`h-[30px] rounded-[5px] font-usedFont px-2 ${
        disabled ? "bg-[#4947470c]" : ""
      } ${className}`}
    />
  </div>
);

// Reusable Section Component
const Section = ({ title, icon, children }) => (
  <div>
    <TitleCars name={title} icon={icon} />
    <div className="grid gap-4 place-items-center w-full">{children}</div>
  </div>
);

// Data Configuration
const menuItems = [
  { label: "User Information", isActive: true },
  { label: "Notifications Settings" },
  { label: "Security" },
  { label: "Manage Users" },
  { label: "Log out", isDanger: true },
];

const companyFields = [
  { label: "Company Name", key: "company_name"  },
  { label: "service Type", key:"service_type" }, // Duplicate, consider fixing in original data
  { label: "Company Email", key: "contact_email" },
  { label: "Contact Phone" ,key: "contact_phone"},
];


const passwordFields = [
  { label: "Email", type: "email" },
  { label: "Current Password", type: "password" },
  { label: "New Password", type: "password" },
];

function ProfileView() {
  const { data, Loading, isError, isSuccess } = useGetProfileQuery();

  const updatedcompanyFields=companyFields.map(field=>({
    ...field,value:data?.data?.profile?.[field.key]
  }))

console.log(updatedcompanyFields);

  return (
    <MainDashBoardWrapper>
      <div className="font-usedFont block sm:flex bg-[#80808019] w-full mb-[100px]">
        {/* Sidebar */}
        <div className="ml-[120px] p-3">
          <div className="bg-white p-3 w-[310px] rounded-md mb-4">
            <b>User Profile</b>
            <div className="grid place-content-center">
              <img
                src={img}
                height="90px"
                width="100px"
                className="rounded-[60%]"
                alt="User avatar"
              />
              <span>Menna Ahmed</span>
              <div className="bg-[#ff00ea48] ml-[5px] grid place-content-center w-20 text-[#c915a5] p-[5px] text-[10px] rounded-[5px]">
                receptionist
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 w-[310px] grid gap-2">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                label={item.label}
                isDanger={item.isDanger}
                isActive={item.isActive}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[340px] p-3 place-content-center sm:w-[600px] ml-[130px] sm:ml-[50px] mb-[100px] mr-[20px] bg-white rounded-md mt-4">
          {/* Company Information */}
          <Section title="Company information" icon={icon1}>
            <div className="grid place-content-center gap-4 sm:flex">
              <div className="grid sm:grid-cols-2 gap-4">
                {updatedcompanyFields.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.value}
                    disabled
                    className="w-[250px]"
                  />
                ))}
              </div>
            </div>
            <div className="w-full grid justify-center">
              <p>Business Brief</p>
              <textarea
               placeholder={data?.data?.profile.bussiness_breif
                } 
                disabled
                name="Business Brief"
                className="w-[300px] h-[100px] rounded-lg font-usedFont sm:w-[540px] bg-[#4947470c]"
              />
            </div>
          </Section>

          {/* Location Details */}
          <Section title="Location Details" icon={icon2}>
            <div className="grid place-content-center sm:flex gap-4 ">
              <InputField label="Country" placeholder={data?.data?.profile.location.country
              }  disabled className="w-[260px]" />
              <InputField label="City" placeholder={data?.data?.profile.location.city
              }  disabled className="w-[260px]" />
            </div>
            <InputField
              placeholder={data?.data?.profile.location.address}
              label="Address"
              margin="ml-4"
              disabled
              className="sm:w-[555px] w-[280px] ml-4"
            />
          </Section>



          {/* Change Password */}
          <Section title="Change password">
            {passwordFields.map((field, index) => (
              <InputField
                key={index}
                label={field.label}
                type={field.type}
                className="sm:w-[565px] w-[280px]"
              />
            ))}
            <div className="grid sm:flex gap-4 justify-end mr-[20px] mt-[20px]">
              <Button btnCss="completeProfileBtn" type="button" name="Edit" />
            </div>
          </Section>
        </div>
      </div>
    </MainDashBoardWrapper>
  );
}

export default ProfileView;
