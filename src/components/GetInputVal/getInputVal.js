import React, { useState } from "react";

const InputRender = () => {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal((prev) => (prev = e.target.value));
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInput} />
      </div>
      <div>
        <h3>{inputVal}</h3>
      </div>
    </>
  );
};

export default InputRender;
