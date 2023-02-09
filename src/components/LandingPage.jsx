import React, { useEffect } from "react";
import data from "../data/data.json";
import Searchbar from "./Searchbar";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import axios from "axios";
import { useState } from "react";

const LandingPage = () => {
  const [dogs, setDogs] = useState([]);
  //getting Dogd data from API
  const getDogs = async () => {
    const response = await axios.get("http://127.0.0.1:8080/getalldogs");
    setDogs(response.data);
    console.log(dogs);
  };

  useEffect(() => {
    getDogs();
  }, []);
  // const dogs = data.dogs;
  const parks = data.parks;
  const navigate = useNavigate();
  return (
    <div className="bg-white h-screen p-5 justify-between">
      <div className="flex items-center">
        <div className="w-full">
          <Searchbar />
        </div>
        <img src={profile} alt="" className="w-14 h-14" />
      </div>
      <div className="mt-10">
        <div className="text-[#344E41] text-left font-bold mb-5">
          RECOMMENDED BUDDIES
        </div>
        <div className="flex gap-4 overflow-clip overflow-x-scroll py-2">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              onClick={() => navigate(`/dog/${dog.id}`, { state: dog })}
            >
              <img
                src={`http://127.0.0.1:8080/${dog.photo}`}
                alt="dog"
                className="min-w-[127px] h-[87px] rounded-lg"
              />
              <p className="font-bold text-[#344E41]">{dog.name}</p>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
              <p> {dog.temperament}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="text-[#344E41] text-left font-bold mb-5">
          RECOMMENDED PARKS
        </div>
        <div className="flex gap-4 overflow-scroll py-2">
          {parks.map((park) => (
            <div key={park.address} onClick={() => navigate("/location")}>
              <img
                src={park.photo}
                alt="park"
                className="min-w-[127px] h-[87px] rounded-lg"
              />
              <p className="font-bold text-[#344E41]">{park.name}</p>

              <p className="w-[127px] text-[#060606]"> {park.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <p className="text-[#344E41] text-left font-bold my-5">FIND ON MAP</p>
        <div className="rounded-2xl overflow-hidden">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
