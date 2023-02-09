import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapSection = () => {
  return (
    <div className="">
      <div>
        <Map
          height={600}
          defaultCenter={[-33.864833432263296, 151.2028515484153]}
          defaultZoom={15}
        >
          <Marker
            width={50}
            anchor={[-33.864833432263296, 151.2028515484153]}
          />
        </Map>
      </div>
    </div>
  );
};

export default MapSection;
