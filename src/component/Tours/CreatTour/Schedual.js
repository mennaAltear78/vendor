import React from "react";
import { Calendar, Clock } from "lucide-react";
import InputField from "../../Main_dashboard/CreateYourVendor/common/InputField";

const dateFields = [
  {
    name: "start_date",
    label: "Start Date *",
    icon: <Calendar className="w-4 h-4 inline mr-1" />,
  },
  {
    name: "end_date",
    label: "End Date *",
    icon: <Calendar className="w-4 h-4 inline mr-1" />,
  },
];

const timeFields = [
  {
    name: "departure_time",
    label: "Departure Time *",
    icon: <Clock className="w-4 h-4 inline mr-1" />,
    marginTop: "mt-12",
  },
  {
    name: "arrival_time",
    label: "Arrival Time *",
    icon: <Clock className="w-4 h-4 inline mr-1" />,
    marginTop: "mt-11",
  },
];

const Schedual = ({ formData, handleInputChange, handleNestedInputChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
          <span className="text-purple-600 text-sm font-bold">3</span>
        </div>
        Schedule & Timing
      </h3>

      {/* Date Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dateFields.map(({ name, label, icon }) => (
          <InputField
            key={name}
            editt={false}
            type="date"
            required
            className="w-[98%] h-[20px] disabled:bg-[#4947470c]"
            label={
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {icon}
                {label}
              </label>
            }
            value={formData[name]}
            onChange={(e) => handleInputChange(name, e.target.value)}
          />
        ))}
      </div>

      {/* Time Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {timeFields.map(({ name, label, icon, marginTop }) => (
          <div key={name}>
            <div className="flex space-x-2 items-center gap-3">
              <InputField
                editt={false}
                type="time"
                required
                className="w-[98%] h-[20px] disabled:bg-[#4947470c]"
                label={
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {icon}
                    {label}
                  </label>
                }
                value={formData[name]?.prefix}
                onChange={(e) => handleNestedInputChange(name, "prefix", e.target.value)}
              />

              <select
                value={formData[name]?.suffix}
                onChange={(e) => handleNestedInputChange(name, "suffix", e.target.value)}
                className={`px-4 py-3 border ${marginTop} h-10 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedual;
