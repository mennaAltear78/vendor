import InputField from "../../Main_dashboard/CreateYourVendor/common/InputField";
import Menu from "../../Main_dashboard/CreateYourVendor/common/Menue";

const tripTypeOptions = [
    { value: "Leisure Trip", label: "Leisure Trip" },
    { value: "Adventure Trip", label: "Adventure Trip" },
    { value: "Cultural Trip", label: "Cultural Trip" },
    { value: "Business Trip", label: "Business Trip" },
];
function BasicInformation({handleInputChange,handleNestedInputChange,formData}) {
  return (
    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                <span className="text-blue-600 text-sm font-bold">1</span>
                            </div>
                            Basic Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                            editt={false}
                                required
                                placeholder="Enter tour name"
                                className="w-[98%] h-[20px] disabled:bg-[#4947470c]"
                                label={"Tour Name *"}
                                value={formData.name || ""}
                                name="name"
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                            <Menu
                               editt={false}
                                label="Tour Type *"
                                required
                                value={tripTypeOptions.find(option => option.value === formData?.type?.en) || null}
                                onChange={(selectedOption) =>
                                    handleNestedInputChange('type', 'en', selectedOption?.value)
                                }
                                options={tripTypeOptions}
                                isSearchable={false}
                            />
                        </div>
                        <InputField
                         editt={false}
                            required
                            className="w-[98%] h-[60px] disabled:bg-[#4947470c]"
                            label={"Description *"}
                            value={formData.description?.en}
                            textarea={true}
                            name="check_in_description"
                            onChange={(e) => handleNestedInputChange('description', 'en', e.target.value)}
                        />

                    </div>
  )
}

export default BasicInformation
