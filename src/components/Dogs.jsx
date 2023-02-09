import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  //getting Dogs data from API
  const getDogs = async () => {
    const response = await axios.get("http://127.0.0.1:8080/getalldogs");
    setDogs(response.data);
    console.log(dogs);
  };
  const navigate = useNavigate();

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="flex gap-4 overflow-clip overflow-x-scroll">
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
  );
};

export default Dogs;
