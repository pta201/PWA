import { useEffect, useState } from "react";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}
const useUserLocation = () => {
  const [location, setLocation] = useState<UserLocation>();

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        setLocation({ latitude, longitude, accuracy });
      },
      () => {},
      options
    );
  }, []);

  console.log(location);
  return location;
};
export default useUserLocation;
