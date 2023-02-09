import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapSection = () => {
  return (
    <div className="">
      <div>
        <Map height={600} defaultCenter={[-33.879, 151.1997]} defaultZoom={11}>
          <Marker width={50} anchor={[-33.879, 151.1997]} />
        </Map>
      </div>
    </div>
  );
};

export default MapSection;
