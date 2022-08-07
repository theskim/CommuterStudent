import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "../SmoothScroll";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements


const MobileMenu = () => {

    // const hamburger = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setFirstOpen(true);
        SmoothScroll();
    }

    return (
        <>
            <div className="nav-mobile-toggle">
                <input onClick={toggleMenu} className={isOpen ? "checked" : ""} type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            {/* This complicated looking nested ternary is because we don't want the mobile nav to do the slideOut animation unless clicked on.
                Without this, the user sees the mobile nav slide out on page load, which looks unprofessional and janky. */}
            <div className={`nav-links ${(firstOpen ? (isOpen ? "inView" : "outOfView") : "")}`}>
                <NavLink to='/' className ="nav-link__mobile" onClick={toggleMenu}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link__mobile" onClick={toggleMenu}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link__mobile" onClick={toggleMenu}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link__mobile" onClick={toggleMenu}><p>Join Us</p></NavLink>
                <NavLink to='/tips' className ="nav-link__mobile" onClick={toggleMenu}><p>Tips</p></NavLink>
            </div>
        </>
    )

}



export default MobileMenu;