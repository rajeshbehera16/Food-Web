
import React from 'react';
import { MapPin, Navigation, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const LocationBanner = () => {
  const { userLocation, locationError, isLoadingLocation, requestLocation, hasLocationPermission } = useLocation();

  if (hasLocationPermission && userLocation) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 backdrop-blur-sm border-2 border-orange-200/50 rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-orange-200/30 rounded-full blur-2xl" />
      
      <div className="flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {isLoadingLocation ? (
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
              </div>
            ) : locationError ? (
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">
                {isLoadingLocation ? 'Getting your location...' : 
                 locationError ? 'Location access needed' : 
                 'Find restaurants near you'}
              </h3>
              <Sparkles className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-sm text-muted-foreground">
              {locationError ? 
                locationError.message : 
                'Enable location to see nearby restaurants and accurate delivery times'}
            </p>
          </div>
        </div>
        
        {!isLoadingLocation && (
          <button
            onClick={requestLocation}
            disabled={isLoadingLocation}
            className="flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Navigation className="w-5 h-5" />
            <span>Enable Location</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationBanner;
