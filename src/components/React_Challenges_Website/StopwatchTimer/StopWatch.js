import React, {useState} from "react";

const StopWatch = () => {
    const [timer, setTimer] = useState(0);

    const startTimer = () => {
      window.myTimer = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    };
    const stopTimer = () => {
      clearInterval(window.myTimer);
    };
    const resetTimer = () => {
      clearInterval(window.myTimer);
      setTimer(0);
    };
    return (
      <div className="container">
        <h1>Timer</h1>
        <span>{Math.trunc(timer / 60)} mins </span>
        <span>{timer % 60} secs</span>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
  
    /** X
  const [timer, setTimer] = useState(0);
  let startTimer;

  const handleStartBtn = () => {
    startTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handleStopBtn = () => {
    clearInterval(startTimer);
 
    console.log("cleared")
  };
  const handleResetBtn = () => {
    clearInterval(startTimer);
    setTimer((timer) => (timer = 0));
  };

  return (
    <div className="container">
      <h1 className="fs-1">Timer</h1>
      <span>{Math.trunc(timer / 60)} mins</span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={handleStartBtn}>Start</button>
        <button onClick={handleStopBtn}>Stop</button>
        <button onClick={handleResetBtn}>Reset</button>
      </div>
    </div>
  );
};
*/

export default StopWatch;
