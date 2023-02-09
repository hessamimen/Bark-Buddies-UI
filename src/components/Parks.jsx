import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Parks = () => {
  const [parks, setParks] = useState([]);
  const navigate = useNavigate();

  const getParks = async () => {
    const response = await axios.get("http://127.0.0.1:8080/getallparks");
    setParks(response.data);
    console.log(parks);
  };

  useEffect(() => {
    getParks();
  }, []);

  return (
    <div className="flex gap-4 overflow-scroll py-2">
      {parks.map((park) => (
        <div
          key={park.address}
          onClick={() => navigate(`/park/${park.id}`, { state: park })}
        >
          <img
            src={`http://127.0.0.1:8080/${park.photo}`}
            alt="park"
            className="w-[127px] h-[87px] rounded-lg"
          />
          <p className="font-bold text-[#344E41]">{park.name}</p>

          <p className="w-[127px] text-[#060606]"> {park.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Parks;
