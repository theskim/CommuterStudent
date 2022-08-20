import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements

const MobileMenu = (props) => {
    return (
        <>
            <div className="nav-mobile-toggle">
                <input onClick={props.toggleMenu} className={props.isOpen ? "checked" : ""} type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            {/* This complicated looking nested ternary is because we don't want the mobile nav to do the slideOut animation unless clicked on.
                Without this, the user sees the mobile nav slide out on page load, which looks unprofessional and janky. */}
            <div className={`nav-links ${(props.firstOpen ? (props.isOpen ? "inView" : "outOfView") : "")}`}>
                <NavLink to='/' className ="nav-link__mobile" onClick={props.toggleMenu}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link__mobile" onClick={props.toggleMenu}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link__mobile" onClick={props.toggleMenu}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link__mobile" onClick={props.toggleMenu}><p>Join Us</p></NavLink>
                <NavLink to='/tips' className ="nav-link__mobile" onClick={props.toggleMenu}><p>Tips</p></NavLink>
            </div>
        </>
    )

}

export default MobileMenu;