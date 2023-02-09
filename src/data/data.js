import axios from "axios";

const getDogs = async () => {
  const response = await axios.get("http://127.0.0.1:8080/getalldogs");
  return response.data;
};

export { getDogs };
