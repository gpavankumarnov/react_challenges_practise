import React, { useState, useRef } from "react";

//username, pwd, age, phone num, male or female checkbox, department dropdown, active/In-active radio button.

const FormData = () => {
  const [userData, setUserData] = useState({
    username: "",
    pwd: "",
    phoneNum: "",
    age: "",
    activeStatus: "",
    dropdown: "",
    Gender: "",
  });

  const usernameRef = useRef("");
  const pwdRef = useRef("");
  const phoneRef = useRef("");
  const ageRef = useRef("");
  const checkboxRef = useRef("");
  const activeStatusRef = useRef("");

  const handleSubmit = (e) => {
e.preventDefault()
    if(usernameRef.current.value !== "" && usernameRef.current.value.includes("@")){
        console.log("not empty")
    }else{
        console.log("empty")
    }
     console.log("form values are", usernameRef.current.value, pwdRef.current.value, activeStatusRef.current.value, phoneRef.current.value,checkboxRef.current.value, ageRef.current.value )   

  };

  return (
    <>
      <h2 className="fs-2 text-center bg-primary">User Form</h2>
      <form
        className="container d-flex flex-column py-4 gap-3"
        onSubmit={handleSubmit}
      >
        <label for="username">username</label>
        <input type="text" ref={usernameRef} />
        <label for="password">password</label>
        <input type="password" ref={pwdRef} />
        <label for="age">age</label>
        <input type="number" max={30} min={10} ref={phoneRef} />
        <label for="phone num">Phone Num</label>
        <input type="tel" ref={phoneRef} />
        <div className="d-flex align-center gap-2">
          <label for="male">male</label>
          <input type="radio" name="radio" />
          <label for="female">female</label>
          <input type="radio" name="radio" />
        </div>
        <div className="d-flex align-center gap-2">
          <label for="active">Aactive</label>
          <input type="checkbox" name="checkbox" ref={checkboxRef}/>
          <label for="active">Inactive</label>
          <input  type="checkbox"  ref={checkboxRef}/>
        </div>
        <div className="d-flex align-center gap-2"> 
            <label>Select your class</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default FormData;
