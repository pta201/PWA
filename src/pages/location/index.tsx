import { Card, CardBody, Text } from "@chakra-ui/react";
import useUserLocation from "./hooks";

export default function LocationMain() {
  const userLocation = useUserLocation();
  return (
    <Card>
      <CardBody>
        <Text>{userLocation?.longitude}</Text>
        <Text>{userLocation?.latitude}</Text>
        <Text>{userLocation?.accuracy}</Text>
      </CardBody>
    </Card>
  );
}
