
import { MapPin, Users, Calendar, DollarSign, Clock, Star } from 'lucide-react';
import PopupMessage from '../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage';
import { useState } from 'react';
import { useDeleteTourMutation } from '../../../services/ToursApi';
import SpinnerLoading from '../../Authentication/regular_components/SpinnerLoading';

export const TourCard = ({ tour, onView ,id}) => {
  const[isPop_up,setispop_up]=useState('false')
  const [deleteTour, { isLoading, isSuccess, isError, error }] = useDeleteTourMutation();
  console.log(tour,"tour");
  const DeleteTourHandeler =()=>{
    deleteTour({id:id})
    
  }
  return (
    <div className="bg-white rounded-xl font-usedFont shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-emerald-400 flex items-center justify-center">
          <MapPin className="w-12 h-12 text-white opacity-80" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {tour?.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">4.8</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {tour?.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            <span>{tour.location.country} ,{tour.location.city}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-emerald-500" />
            <span>Max {tour.max_capacity} guests</span>
          </div>
          {/* <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-purple-500" />
            <span>{formatDate(tour.start_date)} - {formatDate(tour.end_date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-orange-500" />
            <span>{tour.departure_time.prefix} {tour.departure_time.suffix} - {tour.arrival_time.prefix} {tour.arrival_time.suffix}</span>
          </div> */}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="flex items-center text-lg font-bold text-gray-900">
                 
                {tour.adult_price} {tour.currency} <span className="text-xs text-gray-500"> Adult</span>
              </div>
             
            </div>
            <div className="text-center">
              <div className="flex items-center text-lg font-bold text-gray-900">
              
                {tour.child_price}  {tour.currency} <span className="text-xs text-gray-500"> Child</span>
              </div>
             
            </div>
          </div>
          {/* <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            tour.policies.cancelation_allowed 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {tour.policies.cancelation_allowed ? 'Cancelable' : 'Non-cancelable'}
          </span> */}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onView?.(tour)}
            className="flex-1 border-none bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
          >
            View Details
          </button>
{      !isLoading?    <button
            onClick={DeleteTourHandeler}
            className="flex-1 border-none  bg-[#ff0000a8] text-[white] py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
          Delete
          </button>:<SpinnerLoading/>}
        </div>
   
      </div>          
    </div>
  );
};