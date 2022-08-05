import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "../SmoothScroll";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements


const MobileMenu = () => {

    // const hamburger = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(false);
    
    const openMenu = () => {
        setIsOpen(!isOpen);
        setFirstOpen(true);
    }

    return (
        <>
            <div className="nav-mobile-toggle">
                <input onClick={openMenu} type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            {/* This complicated looking nested ternary is because we don't want the mobile nav to do the slideOut animation unless clicked on.
                Without this, the user sees the mobile nav slide out on page load, which looks unprofessional and janky. */}
            <div className={`nav-links ${(firstOpen ? (isOpen ? "inView" : "outOfView") : "")}`}>
                <NavLink to='/' className ="nav-link" onClick={SmoothScroll}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}><p>Join Us</p></NavLink>
            </div>
        </>
    )

}



export default MobileMenu;