import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//http://127.0.0.1:8080/get_dog/1
export const DogInfo = () => {
  const [dog, setDog] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(id);
  const getDog = async () => {
    const response = await axios.get(`http://127.0.0.1:8080/get_dog/${id}`);
    setDog(response.data);
  };
  //   console.log(dog);

  useEffect(() => {
    getDog();
  }, []);
  return (
    <div className="">
      <div className="rounded-xl overflow-hidden">
        <img
          src={`http://127.0.0.1:8080/${dog.photo}`}
          alt="dog"
          className="w-[350px] rounded-xl"
        />
      </div>
      <div className="text-left">
        <div>
          <h2>{dog.name}</h2>
        </div>
        <div>
          {dog.breed}/{dog.temperament}/{dog.age}
        </div>
        <div>
          <p>{dog.bio}</p>
        </div>
      </div>
    </div>
  );
};
