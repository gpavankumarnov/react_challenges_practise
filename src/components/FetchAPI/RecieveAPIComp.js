import React from "react";
import useFetch from "./useFetch";

const RecieveAPIComp = () => {
  //const usersAPI = "https://jsonplaceholder.typicode.com/users";
  const todoAPI = 'https://jsonplaceholder.typicode.com/todos'
  //const postAPI = 'https://jsonplaceholder.typicode.com/users'

  const data = useFetch(todoAPI);

console.log("data ", data)
  return <div>Title</div>;
};

export default RecieveAPIComp;
