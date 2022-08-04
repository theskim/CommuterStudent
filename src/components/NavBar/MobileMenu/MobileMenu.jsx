import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "../SmoothScroll";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements


const MobileMenu = () => {

    const hamburger = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [firstOpen, setFirstOpen] = useState(false);
    
    useEffect(()=> {
        const openMenu = () => {
            setIsOpen(!isOpen);
            setFirstOpen(true);
        }
        const hamburgerElement = hamburger.current;
        hamburgerElement.addEventListener("click", openMenu);
    })

    return (
        <>
            <i ref={hamburger} className="fa-solid fa-bars">Pretend this is icon</i>
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