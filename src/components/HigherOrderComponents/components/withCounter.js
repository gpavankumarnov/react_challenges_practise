import React, {useState} from "react";

const UpdatedComponent = (OriginalComponent) => {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prev) => prev = count+1)
  }
  


  const NewComponent = () => {
    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  };

  return NewComponent;
};

export default UpdatedComponent;
