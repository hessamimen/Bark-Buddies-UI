import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import profile from "../assets/profile.png";
import { Map, Marker } from "pigeon-maps";

const ParkInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.coords);
  const [park, setPark] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(id);
  const getPark = async () => {
    const response = await axios.get(`http://127.0.0.1:8080/get_park/${id}`);
    setPark(response.data);
  };

  useEffect(() => {
    getPark();
  }, []);
  return (
    <div className="pt-2 bg-white h-screen gap-4 flex flex-col items-center">
      <div className="flex w-screen p-1 items-center justify-between">
        <div>
          <BsFillArrowLeftSquareFill
            size={43}
            color="#344E41"
            className="ml-2"
            onClick={() => navigate("/")}
          />
        </div>
        <img src={profile} alt="profile" className="w-14 h-14" />
      </div>
      <div className="rounded-xl overflow-hidden">
        <img
          src={`http://127.0.0.1:8080/${park.photo}`}
          alt="dog"
          className="w-[350px] rounded-xl"
        />
      </div>
      <div className="w-full px-5 text-left">
        <div>
          <h2 className="text-[42px] text-[#344E41] font-bold">{park.name}</h2>
        </div>
        <div>
          <p className="text-xs">{park.address}</p>
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden mb-2">
        <Map
          height={600}
          width={350}
          defaultCenter={[
            location.state.coords.latitude,
            location.state.coords.longitude,
          ]}
          defaultZoom={10}
        >
          <Marker
            width={50}
            anchor={[
              location.state.coords.latitude,
              location.state.coords.longitude,
            ]}
          />
        </Map>
      </div>
    </div>
  );
};

export default ParkInfo;
