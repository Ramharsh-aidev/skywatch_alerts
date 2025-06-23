import { useState, useEffect } from 'react';

export default function useLocation() {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation(position);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { 
    coords: location?.coords, 
    error,
    formatted: location?.coords 
      ? `${location.coords.latitude.toFixed(4)}, ${location.coords.longitude.toFixed(4)}` 
      : null
  };
}
          