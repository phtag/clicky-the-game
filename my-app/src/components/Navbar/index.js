import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul>
            <li className="navbar-brand" id="navbar-left-element">Clicky Game</li>
            <li className="navbar-brand">Click on an image to start playing</li>
            <li className="navbar-brand" id="navbar-right-element">Score: 0 | Top Score: 0</li>
        </ul>
    </nav>
);
}

export default Navbar;
