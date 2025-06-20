import React from 'react'
import InputField from '../../Main_dashboard/CreateYourVendor/common/InputField'

function TourPolice({handleNestedInputChange,formData}) {
  return (
  <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                                <span className="text-red-600 text-sm font-bold">5</span>
                            </div>
                            Policies
                        </h3>

                        <div>
                            <InputField
                             editt={false}
                                required
                                className="w-[98%] h-[60px] disabled:bg-[#4947470c]"
                                label={"Cancellation Policy *"}
                                placeholder="Describe your cancellation policy..."
                                textarea={true}
                                value={formData.policies?.cancelation_policy?.en}
                                onChange={(e) => handleNestedInputChange('policies', 'cancelation_policy', { en: e.target.value })}
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="cancelation_allowed"
                                checked={formData.policies?.cancelation_allowed}
                                onChange={(e) => handleNestedInputChange('policies', 'cancelation_allowed', e.target.checked)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="cancelation_allowed" className="ml-2 text-sm text-gray-700">
                                Allow cancellations
                            </label>

                        </div>
                    </div>
  )
}

export default TourPolice
