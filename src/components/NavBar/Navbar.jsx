import { React, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";
import './Navbar.css';
import { CommuterLogo } from "../../assets"; 
import MobileMenu from "./MobileMenu/MobileMenu";

const NavBar = () => {
    const [yPos, setYPos] = useState(0);
    const [displayNav, updateDisplayNav] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setFirstOpen(true);
        SmoothScroll();
    }

    const handleScrollEvent = useCallback(() => {
        const currentYPos = window.pageYOffset;
        updateDisplayNav(currentYPos < yPos || currentYPos < 100);
        setYPos(currentYPos);
    }, [yPos]);
    
    useEffect (() => {
        window.addEventListener("scroll", handleScrollEvent);
    }, [yPos, handleScrollEvent]);
    
    return (
        <div className = {displayNav || isOpen ? "nav-bar__active" : "nav-bar"}>
            <img src={CommuterLogo} alt=''/>
            <span className="nav-container">
                <NavLink to='/' className ="nav-link" onClick={SmoothScroll}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}><p>Join Us</p></NavLink>
                <NavLink to='/tips' className ="nav-link" onClick={SmoothScroll}><p>Tips</p></NavLink>
            </span>
            <span className="nav-mobile-container">
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} firstOpen={firstOpen} setFirstOpen={setFirstOpen} toggleMenu={toggleMenu}/>
            </span>
        </div>   
    );
}

export default NavBar;