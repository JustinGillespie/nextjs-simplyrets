import { memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

type Props = {
  center: { lat: number; lng: number };
  onChange: (map?: any) => void;
  onLoad: (map?: any) => void;
};

const MapView = ({ center, onChange, onLoad }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={center}
      zoom={10}
      onDragEnd={onChange}
      onZoomChanged={onChange}
      onLoad={onLoad}
      options={{ minZoom: 10, maxZoom: 13 }}
    />
  ) : (
    <></>
  );
};

export default memo(MapView);
