import { DollarSign, Users } from "lucide-react";
import InputField from "../../Main_dashboard/CreateYourVendor/common/InputField";


const pricingFields = [
  {
    name: "adult_price",
    icon: <DollarSign className="w-4 h-4 inline mr-1" />,
    label: "Adult Price *",
    type: "number",
    parser: parseFloat,
  },
  {
    name: "child_price",
    icon: <DollarSign className="w-4 h-4 inline mr-1" />,
    label: "Child Price *",
    type: "number",
    parser: parseFloat,
  },
  {
    name: "max_capacity",
    icon: <Users className="w-4 h-4 inline mr-1" />,
    label: "Max Capacity *",
    type: "number",
    parser: parseInt,
  },
];

const PricingSection = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-2">
          <span className="text-emerald-600 text-sm font-bold">2</span>
        </div>
        Pricing & Capacity
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingFields.map(({ name, icon, label, type, parser }) => (
          <InputField
            key={name}
            editt={false}
            type={type}
            required
            placeholder="0"
            className="w-[98%] h-[20px] disabled:bg-[#4947470c]"
            label={
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {icon}
                {label}
              </label>
            }
            value={formData[name]}
            onChange={(e) => handleInputChange(name, parser(e.target.value))}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
