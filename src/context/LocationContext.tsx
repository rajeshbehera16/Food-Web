
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Location, LocationError, getCurrentLocation } from '../utils/locationUtils';

interface LocationContextType {
  userLocation: Location | null;
  locationError: LocationError | null;
  isLoadingLocation: boolean;
  requestLocation: () => void;
  hasLocationPermission: boolean;
}

const LocationContext = createContext<LocationContextType>({
  userLocation: null,
  locationError: null,
  isLoadingLocation: false,
  requestLocation: () => {},
  hasLocationPermission: false,
});

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<LocationError | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  const requestLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError(null);
    
    try {
      const location = await getCurrentLocation();
      setUserLocation(location);
      setHasLocationPermission(true);
      console.log('Location obtained:', location);
    } catch (error) {
      setLocationError(error as LocationError);
      setHasLocationPermission(false);
      console.error('Location error:', error);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  // Check for existing location permission on mount
  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          requestLocation();
        }
      });
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        locationError,
        isLoadingLocation,
        requestLocation,
        hasLocationPermission,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
