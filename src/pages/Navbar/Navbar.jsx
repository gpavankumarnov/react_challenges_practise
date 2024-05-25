import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <div> 
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        about
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        contact
      </NavLink>
      <NavLink activeClassName="active" to="/details">
        details
      </NavLink>
    </div>
  );
};

export default Navbar;
