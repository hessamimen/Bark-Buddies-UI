import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Dogs from "./Dogs";
import profile from "../assets/profile.png";
// import Searchbar from "./Searchbar";
// import Footer from "./Footer";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export const DogInfo = () => {
  const navigate = useNavigate();
  const [dog, setDog] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(id);
  const getDog = async () => {
    const response = await axios.get(`http://127.0.0.1:8080/get_dog/${id}`);
    setDog(response.data);
  };

  useEffect(() => {
    getDog();
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
        {/* <div className="w-full">
          <Searchbar />
        </div> */}
        <img src={profile} alt="profile" className="w-14 h-14" />
      </div>
      <div className="rounded-xl overflow-hidden">
        <img
          src={`http://127.0.0.1:8080/${dog.photo}`}
          alt="dog"
          className="w-[350px] rounded-xl"
        />
      </div>
      <div className="w-full px-5 text-left">
        <div>
          <h2 className="text-[42px] text-[#344E41] font-bold">{dog.name}</h2>
        </div>
        <div className="">
          {dog.breed}/{dog.temperament}/{dog.age}
        </div>
        <div>
          <p className="text-xs">{dog.bio}</p>
        </div>
        <div>
          <button className="bg-[#344E41] text-white py-2 px-10  rounded-2xl mt-5">
            Message
          </button>
        </div>
        <div className="text-left mt-5">
          <h3 className="text-[#344E41] text-left font-bold mb-5">
            OTHER RECOMMENDED BODDIES
          </h3>
          <Dogs />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
