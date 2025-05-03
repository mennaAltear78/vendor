import React from "react";
import icon1 from "../../../../Assets/logos_paypal.svg";
import icon2 from "../../../../Assets/fa6-brands_cc-visa.svg";
import icon3 from "../../../../Assets/logos_mastercard.svg";
import icon4 from "../../../../Assets/fontisto_american-express.png";

const Booking_Policies = ({ data }) => {
  const policies = data.data.hotel.policies;
  const images = [icon1, icon2, icon3, icon4];

  return (
    <div className="mt-3 bg-white grid rounded-t-lg font-usedFont p-4 sm:w-[700px] w-[360px] pb-[50px] shadow-md ">
      <h2 className="text-[22px] font-bold">Booking Policies</h2>

      {/* Check-in and Check-out */}
      <div className="mb-[10px] text-[13px] ">
        <p >
          Check-in From
          <b>{`${policies.check_in.from.time} ${policies.check_in.from.date}`}</b>
          onward and Check-out
          <b>{`By ${policies.check_out.from.time} ${policies.check_out.from.date}`}</b>
        </p>
      </div>

      {/* Children and Extra Bed Policies */}
      <div className="mb-[10px]">
        <b >Children and Extra Bed Policies</b>
        <p className="mt-[-2px] text-[12px]">{policies.children_and_families}</p>
      </div>

      {/* Pet Policies */}
      <div className="mb-[10px]">
        <b>Pet Policies</b>
        <p className="mt-[-2px] text-[12px]">{policies.pet_policy}</p>
      </div>

      {/* Room Policies */}
      <div className="mb-[10px] ">
        <b>Room Policies</b>
        <p className="mt-[-2px] text-[12px]">{policies.smoking_policy}</p>
      </div>

      {/* Additional Services */}
      <div className="mb-[10px] ">
        <b>Additional Services</b>
        <div className="text-orange-500 text-[12px] flex items-center mt-[-15px] ">
          <p >Charges may apply for services such as: </p>

          {data.data.hotel.facilities.map((facility, index) => (
            <p  key={index}>{facility.facility} </p>
          ))}
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <b >Payment</b>
        <div className=" flex items-center mt-[-10px]  ">
          <p>We accept:</p>
          <div>
            <div className="flex items-center gap-2 text-[13px]">
              {policies.payment_agreed_options.map((pay, index) => (
                <span key={index}>{pay.payment_method}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-2 ">
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
  );
};

export default Booking_Policies;
