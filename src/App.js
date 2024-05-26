import logo from "./logo.svg";
import "./App.css";
import React, { lazy } from "react";
import RecieveAPIComp from "./components/FetchAPI/RecieveAPIComp";


import StopWatch from "./components/React_Challenges_Website/StopwatchTimer/StopWatch";
import ProgressBar from "./components/React_Challenges_Website/ProgressBar/ProgressBar";
import Accordion from "./components/StateUplifting/Accordion";
import AppComp from "./components/HigherOrderComponents/AppComp";
import UserListData from "./components/HocExample/UserListData";
import TodoList from "./components/HocExample/TodoList";
import react from 'styled-components'
import styled from "styled-components";
//space commented

// import SearchUsers from "./components/HocExample/UserListData";
// import { KanbanBaord } from "./components/KanbanBoard/KanbanBaord";
// import Accordion from "./components/Accordion/Accordion";
// import MaterialTable from "./components/MaterialTable/MaterialTable";
// import TodoApp from "./components/TodoListAppwithRedux/TodoApp";
// const NavBar = lazy(() => import("./pages/NavbarNoRoutes/NavbarNoRoutes"));
// const Homepage = lazy(() => import("./pages/ShoppingApp/Homepage/HomePage"));
// const RoutesComp = lazy(()=> import("./components/NavigationRoutesHR/Routes/Routes"));

function App() {
  return (
 
      <div className="container">
<RecieveAPIComp/>
   </div>
 


  );
}

export default App;
