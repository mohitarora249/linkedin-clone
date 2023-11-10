import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition(pos);
      });
    }
  }, []);

  return position;
}

export default useGeoLocation;