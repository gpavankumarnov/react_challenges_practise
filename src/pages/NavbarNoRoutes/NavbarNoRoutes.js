import React, { useState } from "react";

import './Navbar.css'

const NavbarNoRoutes = () => {
  const [tab, setTab] = useState("");

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    // setTab()
  };

  return (
    <div>
      <nav>
        <ul>
<li onClick={handleClick} ><a href=""> </a>Home</li>
<li onClick={handleClick}><a href=""> </a>About</li>
<li onClick={handleClick}><a href=""> </a>Contact</li>
<li onClick={handleClick}><a href=""></a>Details</li>
        </ul>         
      </nav>
    </div>
  );
};

export default NavbarNoRoutes;
