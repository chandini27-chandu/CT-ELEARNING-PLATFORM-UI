import React from "react";

import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <h2 className="logo">
        E-Learning
      </h2>

      <ul className="nav-links">

        <li>
          <a href="#home">
            Home
          </a>
        </li>

        <li>
          <a href="#courses">
            Courses
          </a>
        </li>

        <li>
          <a href="#progress">
            Progress
          </a>
        </li>

        <li>
          <a href="#videos">
            Videos
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;