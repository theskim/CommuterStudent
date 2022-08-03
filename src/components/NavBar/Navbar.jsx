import React from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";

const NavBar = () => {
    return (
        <>
            <NavLink to='/' className ="nav-link" onClick={SmoothScroll}>Home</NavLink>
            <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}>About Us</NavLink>
            <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}>Events</NavLink>
            <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}>Join Us</NavLink>
        </>
    );
}

export default NavBar;