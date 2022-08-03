import React from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";
import './Navbar.css';
import { CommuterLogo } from "../../assets"; 

const NavBar = () => {
    return (
        <div className="nav-bar">
            <img src={CommuterLogo} alt=''/>
            <NavLink to='/' className ="nav-link" onClick={SmoothScroll}><p>Home</p></NavLink>
            <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}><p>About Us</p></NavLink>
            <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}><p>Events</p></NavLink>
            <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}><p>Join Us</p></NavLink>
        </div>
    );
}

export default NavBar;