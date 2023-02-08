import React from "react";
import data from "../data/data.json";
import Searchbar from "./Searchbar";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dogs = data.dogs;
  const navigate = useNavigate();
  return (
    <div className="bg-white h-screen p-5 justify-between">
      <div className="flex items-center">
        <div className="w-full">
          <Searchbar />
        </div>
        <img src={profile} alt="" className="w-14 h-14" />
      </div>
      <div className="mt-16 flex flex-col items-start">
        <div className="text-[#344E41] font-bold mb-5">RECOMMENDED BUDDIES</div>
        <div className="flex gap-4 overflow-scroll">
          {dogs.map((dog) => (
            <div key={dog.email}>
              <img
                src={dog.photo}
                alt="dog"
                className="min-w-[127px] h-[87px] rounded-lg"
              />
              <p className="font-bold text-[#344E41]">Lucky</p>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
              <p> {dog.temperament}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-start">
        <div className="text-[#344E41] font-bold mb-5">RECOMMENDED PARKS</div>
        <div className="flex gap-4 overflow-scroll">
          {dogs.map((dog) => (
            <div key={dog.email} onClick={() => navigate("/map")}>
              <img
                src={dog.photo}
                alt="dog"
                className="min-w-[127px] h-[87px] rounded-lg"
              />
              <p className="font-bold text-[#344E41]">Lucky</p>

              <p> {dog.temperament}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
