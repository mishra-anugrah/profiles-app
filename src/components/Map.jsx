import React from "react";
import { useMap, MapContainer, TileLayer } from "react-leaflet";

export const Map = (props) => {
  const { center, zoom, scrollWheelZoom, boundingBox } = props;

  const ChangeView = (properties) => {
    const { center, zoom } = properties;
    const map = useMap();
    map.setView(center, zoom);
    boundingBox &&
      map.fitBounds([
        [boundingBox[0], boundingBox[2]],
        [boundingBox[1], boundingBox[3]],
      ]);
    return null;
  };

  return (
    <MapContainer
      center={center}
      zoom={!boundingBox ? zoom : undefined}
      scrollWheelZoom={scrollWheelZoom}
    >
      <ChangeView center={center} zoom={zoom} />
      {/* <Marker position={position} /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
