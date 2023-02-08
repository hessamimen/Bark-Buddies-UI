import React from "react";
import { Map, Marker } from "pigeon-maps";
import Searchbar from "./Searchbar";

const MapSection = ({ long, lat }) => {
  console.log(long, lat);
  return (
    <div className="">
      <div className="pt-5">
        <Searchbar />
      </div>
      <div className="pt-10">
        <Map height={600} defaultCenter={[-33.879, 151.1997]} defaultZoom={11}>
          <Marker width={50} anchor={[-33.879, 151.1997]} />
        </Map>
      </div>
    </div>
  );
};

export default MapSection;
