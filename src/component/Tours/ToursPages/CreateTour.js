import React, { useState } from 'react';
import { Save, Upload, X, MapPin } from 'lucide-react';
import BasicInformation from '../CreatTour/BasicInformation';
import PricingSection from '../CreatTour/PricingSection';
import Schedual from '../CreatTour/Schedual';
import LocationInformation from '../CreatTour/LocationInformation';
import TourPolice from '../CreatTour/TourPolice';
import { useCreateTourMutation } from '../../../services/ToursApi';
import ToursHeaders from '../ToursLayout/ToursHeaders';
import { useNavigate } from 'react-router-dom';
import HotelImages from '../../Main_dashboard/CreateYourVendor/CreateYours/UploadImages/HotelImages';
import ImageContianer from '../../Main_dashboard/CreateYourVendor/CreateYours/UploadImages/ImageContianer';

export const CreateTour = ({ initialData }) => {
    const navigate = useNavigate()
    const [
        createTour,
        { isLoading, error },
    ] = useCreateTourMutation();
    const [loading, setLoading] = useState(false);
    const [primaryImage, setPrimaryImage] = useState(null);
    const [coverImages, setCoverImages] = useState([]);
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        type: { en: initialData?.type?.en || 'Leisure Trip' },
        description: { en: initialData?.description?.en || '' },
        adult_price: initialData?.adult_price || 0,
        child_price: initialData?.child_price || 0,
        launch_from: {
            latitude: initialData?.launch_from?.longitude || 0,
            longitude: initialData?.launch_from?.latitude || 0,
        },
        tour_guides: ["67f9c27b91e66a1c04f8909a"],
        max_capacity: initialData?.max_capacity || 10,
        destination: {
            name: initialData?.destination?.name || '',
            latitude: initialData?.destination?.longitude || 0,
            longitude: initialData?.destination?.latitude || 0,
            local_currency: initialData?.destination?.local_currency || 'USD',
            description: { en: initialData?.destination?.description?.en || '' },
            points_of_interest: { en: ["Golden Dunes"]},
        },
        departure_time: {
            prefix:  '9:00',
            suffix:  'AM',
        },
        arrival_time: {
            prefix:  '6:00',
            suffix:  'PM',
        },
        start_date: initialData?.start_date || '',
        end_date: initialData?.end_date || '',
        policies: {
            cancelation_policy: { en: initialData?.policies?.cancelation_policy?.en || '' },
            cancelation_allowed: initialData?.policies?.cancelation_allowed || false,
            payment_agreed_options: [
            {
                payment_method: {
                    en: "Paymob"
                },
                payment_icon: "Paymob.jbg"
            }
        ]
        
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData, "tour data");
        await createTour({body:formData})
        setLoading(false)
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNestedInputChange = (parent, field, value) => {
        console.log(value);
        
        setFormData(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                [field]: value,
            },
        }));
    };

    return (
        <div>
            <ToursHeaders />
            <div className="max-w-4xl mx-auto font-usedFont space-y-8 mt-10 mb-10">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r flex from-blue-600 to-emerald-600 p-6 text-white">
                     <div>
                              <h2 className="text-2xl font-bold flex items-center">
                            <MapPin className="w-6 h-6 mr-2" />
                            {initialData ? 'Edit Tour' : 'Create New Tour'}
                        </h2>
                        <p className="text-blue-100 mt-1">
                            Fill in the details below to create an amazing tour experience
                        </p>
                     </div>
                  <div className='flex w-full justify-end items-start'>
                    <button
                                type="button"
                                onClick={() => { navigate('/TourList') }}
                                className="px-6 py-3 border-none text-gray-70  bg-transparent text-white cursor-pointer transition-colors flex items-center space-x-2"
                            >
                                <X className="w-6 h-6" />
                              
                            </button>
                  </div>
                    </div>
                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        <BasicInformation handleInputChange={handleInputChange} handleNestedInputChange={handleNestedInputChange} formData={formData} />
                        <PricingSection formData={formData} handleInputChange={handleInputChange} />
                        <Schedual formData={formData} handleInputChange={handleInputChange} handleNestedInputChange={handleNestedInputChange} />
                        <LocationInformation formData={formData} handleNestedInputChange={handleNestedInputChange} />
                        <TourPolice formData={formData} handleNestedInputChange={handleNestedInputChange} />
                        {/* Form Actions */}
                        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                           
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3 border-none bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                            >
                                <Save className="w-4 h-4" />
                                <span>{loading ? 'Creating...' : 'Create Tour'}</span>
                            </button>
                        </div>
                        <p className='text-red'>{error}</p>
                        {/* Images */}

                     
                         {/* <ImageContianer title="d" limits="" imagesHotal={[]} HotelImages={()=>{}} onAddImageHandeler={()=>{}} images={[]} setImages={()=>{}} setHotalImage={()=>{}}/> */}
                        {/* <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-indigo-600 text-sm font-bold">6</span>
                                </div>
                                Images
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Primary Image
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600 mb-2">Choose primary image</p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setPrimaryImage(e.target.files?.[0] || null)}
                                            className="text-xs"
                                        />
                                    </div>
                                    <div className='w-full flex mt-4 justify-end'>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 border-none bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                                >
                                    <Save className="w-4 h-4" />
                                    <span>{loading ? 'Uploading...' : 'upload images'}</span>
                                </button>
                                    </div>
                             
                                </div>
                              
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Cover Images
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600 mb-2">Choose multiple cover images</p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={(e) => setCoverImages(Array.from(e.target.files || []))}
                                            className="text-xs"
                                        />
                                    </div>
                                           <div className='w-full flex mt-4 justify-end'>
                                                 <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 border-none bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                                >
                                    <Save className="w-4 h-4" />
                                    <span>{loading ? 'Uploading...' : 'upload images'}</span>
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </form>
                </div>
            </div>
        </div>

    );
};