import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
        <div className="navbar-outer-div">
          <div className="w-10">
            <NavLink
              to="/"
              className='logo-btn'
            >
              LOGO
            </NavLink>
          </div>
          <div className="w-10">
            <NavLink to="/" className='nav-btn'>
              Home
            </NavLink>
          </div>
          <div className="w-10">
            <NavLink to="/home_ground/building" className='nav-btn'>
              Building
            </NavLink>
          </div>
          <div className="w-10">
            <NavLink to="/home_ground/apartment" className='nav-btn'>
              Apartment
            </NavLink>
          </div>
          <div className="w-10">
            <NavLink to="/home_ground/location" className='nav-btn'>
              Location
            </NavLink>
          </div>
        </div>
  );
};

export default Navbar;
