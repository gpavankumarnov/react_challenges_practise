import React, { useEffect, useState } from "react";
import axios from "axios";
const InputField = () => {
  const [inputValue, setInputVal] = useState("");
  const [apiData, setApiData] = useState([]);

  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/movies/drama"
        );

        setApiData(response.data);
      } catch (err) {
        console.log("error is", err);
      }
    };
    getApiData();
  }, []);

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const filteredValues = apiData.filter((ele) =>
    ele.title.includes(inputValue)
  );
  // const handleBtn = () => {
  //   setCounter((prev) => prev + 1);
  //   setCounter((prev) => prev + 2);
  //   setCounter((prev) => prev + 3);
  // };

  console.log(inputValue);
  return (
    <>
      <h2>Movies List</h2>
      <div>
        <input type="text" onChange={handleInput} />
        {/* understand diff between function form and directly updating state. */}
        {/* <button onClick={handleBtn}>+ {counter}</button> */}
      </div>
      <div>
        <ul>
          {(inputValue === "" ? apiData : filteredValues).map((e) => (
            <li>{e.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InputField;
