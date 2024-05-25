import React, {useState} from "react";
import axios from "axios";
import { useEffect } from "react";

const useFetch = (apiEndPoint) => {
    const [data, setData] = useState()
  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    const { data } = await axios.get(apiEndPoint);
    setData(data)
  };

  return data;
};

export default useFetch;
