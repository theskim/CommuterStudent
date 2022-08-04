import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";
import './Navbar.css';
import { CommuterLogo } from "../../assets"; 
import MobileMenu from "./MobileMenu/MobileMenu";

const NavBar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 850) {
                setMobileNav(true);
            }  else {
                setMobileNav(false);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
    })

    return (
        <div className="nav-bar">
            <img src={CommuterLogo} alt=''/>
            <span className={`nav-container ${mobileNav ? "ohWowLookItsGone" : ""}`}>
                <NavLink to='/' className ="nav-link" onClick={SmoothScroll}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}><p>Join Us</p></NavLink>
            </span>
            <span className={`nav-mobile-container ${mobileNav ? "" : "ohWowLookItsGone"}`}>
                <MobileMenu />
            </span>
        </div>
    );
}

export default NavBar;