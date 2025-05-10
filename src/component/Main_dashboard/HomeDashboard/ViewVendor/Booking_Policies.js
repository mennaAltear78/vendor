import React, { memo } from "react";
import icon1 from "../../../../Assets/logos_paypal.svg";
import icon2 from "../../../../Assets/fa6-brands_cc-visa.svg";
import icon3 from "../../../../Assets/logos_mastercard.svg";
import icon4 from "../../../../Assets/fontisto_american-express.png";
import PolicySection from "../comman/PolicySection";

const Booking_Policies = ({ data }) => {
  const policies = data?.data?.hotel?.policies || {};
  const facilities = data?.data?.hotel?.facilities || [];
  const images = [icon1, icon2, icon3, icon4];

  return (
    <div className="mt-3 bg-white grid rounded-t-lg font-usedFont p-4 sm:w-[700px] w-[360px] pb-[50px] shadow-md">
      <h2 className="text-[22px] font-bold">Booking Policies</h2>

      {/* Check-in and Check-out */}
      <PolicySection
        title="Check-in and Check-out"
        content={`Check-in From ${policies.check_in?.from?.time || "N/A"} ${
          policies.check_in?.from?.date || ""
        } onward and Check-out By ${policies.check_out?.from?.time || "N/A"} ${
          policies.check_out?.from?.date || ""
        }`}
      />

      {/* Children and Extra Bed Policies */}
      <PolicySection
        title="Children and Extra Bed Policies"
        content={policies.children_and_families || "No information available."}
      />

      {/* Pet Policies */}
      <PolicySection
        title="Pet Policies"
        content={policies.pet_policy || "No information available."}
      />

      {/* Room Policies */}
      <PolicySection
        title="Room Policies"
        content={policies.smoking_policy || "No information available."}
      />

      {/* Additional Services */}
      <div className="mb-[10px]">
        <b>Additional Services</b>
        <div className="text-orange-500 text-[12px] mt-[-10px] flex flex-col ">
          <p>Charges may apply for services such as:</p>
          <ul className="list-disc pl-5 mt-[-10px] ">
            {facilities.map((facility, index) => (
              <li key={index}>{facility.facility || "N/A"}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <b>Payment</b>
        <div className="mt-[-10px] ">
          <div className="flex gap-2">
            <p>We accept:</p>
            <div className="flex items-center gap-2 text-[13px]">
              {policies.payment_agreed_options?.map((pay, index) => (
                <span key={index}>{pay.payment_method || "N/A"}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Payment method ${index}`}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Booking_Policies);
