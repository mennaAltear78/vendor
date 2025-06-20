import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Plus } from 'lucide-react';
import { TourCard } from './TourCard';
import ToursHeaders from '../ToursLayout/ToursHeaders';
import { useNavigate } from 'react-router-dom';
import { useGetTourQuery } from '../../../services/ToursApi';


export const TourList= ({ onCreateTour }) => {
  const navigate=useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const { data, error, loading, isSuccess} = useGetTourQuery();
  console.log(data?.data?.tours,"tours");
  
  const TourData=data?.data?.tours
  const filteredTours = TourData?.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || tour.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
        <ToursHeaders/>
     <div className="max-w-6xl mx-auto font-usedFont space-y-8 mt-10 mb-10">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tours Management</h2>
          <p className="text-gray-600 mt-1">Manage and organize your tour offerings</p>
        </div>
        <button
          onClick={()=>{navigate('/CreatTour')}}
          className="bg-gradient-to-r cursor-pointer border-none from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          <span>Create New Tour</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tours or destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" pl-10 pr-4 py-2 border border-[#8080802c] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="leisure">Leisure Trip</option>
            <option value="adventure">Adventure Trip</option>
            <option value="cultural">Cultural Trip</option>
          </select>

          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border-none ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 border-none ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {data?.data?.tours?.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tours found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button
            onClick={()=>{navigate('/CreatTour')}}
            className="bg-blue-600 border-none text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Your First Tour
          </button>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {filteredTours?.map((tour) => (
            <TourCard 
              key={data?.data?.tours._id} 
              tour={tour}
              id={tour._id}
              onView={(tour) => console.log('View tour:', tour)}
           
            />
          ))}
        </div>
      )}
    </div>   
    </div>
   
  );
};
