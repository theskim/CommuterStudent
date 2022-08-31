import { React, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../..";
import './Navbar.css';
import { CommuterLogo } from "../../assets"; 
import MobileMenu from "./MobileMenu/MobileMenu";

const NavBar = () => {
    const [yPos, setYPos] = useState(0);
    const [displayNav, updateDisplayNav] = useState(true);

    const sideBarOn = useSelector((store) => store.sidebar_reducer);
    const dispatch = useDispatch();
    const [firstOpen, setFirstOpen] = useState(false);

    const handleScrollEvent = useCallback(() => {
        const currentYPos = window.pageYOffset;
        updateDisplayNav(currentYPos < yPos || currentYPos < 100);
        setYPos(currentYPos);
    }, [yPos]);
    
    useEffect (() => {
        window.addEventListener("scroll", handleScrollEvent);
    }, [yPos, handleScrollEvent]);
    
    return (
        <div className = {displayNav || sideBarOn ? "nav-bar__active" : "nav-bar"} onClick={(e) => {
            e.stopPropagation(); 
            dispatch(setSideBar(false));
        }}>
            <img src={CommuterLogo} alt=''/>
            <span className="nav-container">
                <NavLink to='/' className ="nav-link" onClick={SmoothScroll}><p>Home</p></NavLink>
                <NavLink to='/about-us' className ="nav-link" onClick={SmoothScroll}><p>About Us</p></NavLink>
                <NavLink to='/events' className ="nav-link" onClick={SmoothScroll}><p>Events</p></NavLink>
                <NavLink to='/join-us' className ="nav-link" onClick={SmoothScroll}><p>Join Us</p></NavLink>
                <NavLink to='/tips' className ="nav-link" onClick={SmoothScroll}><p>Tips</p></NavLink>
            </span>
            <span className="nav-mobile-container">
                <MobileMenu firstOpen={firstOpen} setFirstOpen={setFirstOpen}/>
            </span>
        </div>   
    );
}

export default NavBar;