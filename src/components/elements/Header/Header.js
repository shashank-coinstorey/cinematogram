import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <p className="rmdb-logo"> CINEMATOGRAM </p>
          {/* <br/>  <br/>   
          <p className="rmdb-sublogo"> Search what you want to watch </p> */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
