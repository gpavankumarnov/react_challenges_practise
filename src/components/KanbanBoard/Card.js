import React from "react";
//tasks prop = stageNames = [[{}], [{}], [{}]]
const Card = ({ stages, tasks }) => {
  return (
    <div>
      {stages.map((e, index) => (
        //make sure wrap multiple elements with in single parent when using map.
        <>
        <h1>{e}</h1>
        <ul>
         { tasks[index].map((ele) => (
          
              <li>{e.name}</li>
         
          ))}
        </ul>
        </>
      ))}
    </div>
  )
};

export default Card;
