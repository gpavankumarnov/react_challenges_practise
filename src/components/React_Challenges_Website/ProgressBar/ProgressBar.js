import React, {useState} from "react";
import './ProgressBar.css'

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  const handleInput= (e) => {
setTimeout(() => {
    setPercentage(e.target.value)
},1000)
  }

  return (
    <div className="container">
      <div className="outerdiv">
        <div className="innerdiv" style={{width: `${percentage}%`}}></div>
      </div>

      <input type="number" onChange={handleInput} max={100} min={0}/>
    </div>
  );
};

export default ProgressBar;
