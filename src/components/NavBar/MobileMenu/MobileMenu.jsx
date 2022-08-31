import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../../..";
import "./MobileMenu.css";
import "../Navbar.css"; // Because there is no need to duplicate css for nav-link elements

const MobileMenu = (props) => {
    const sideBarOn = useSelector((store) => store.sidebar_reducer);
    const dispatch = useDispatch();

    const toggleMenu = (e) => {
        e.stopPropagation(); 
        props.setFirstOpen(true);
        dispatch(setSideBar(!sideBarOn));
    }

    return (
        <>
            <div className="nav-mobile-toggle">
                <input onClick={toggleMenu} className={sideBarOn ? "checked" : ""} type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            {/* This complicated looking nested ternary is because we don't want the mobile nav to do the slideOut animation unless clicked on.
                Without this, the user sees the mobile nav slide out on page load, which looks unprofessional and janky. */}
            <div className={`nav-links ${(props.firstOpen ? (sideBarOn ? "inView" : "outOfView") : "")}`} style={{height: window.innerHeight + "px"}} onClick={(e) => {
                e.stopPropagation(); 
                dispatch(setSideBar(true));
            }}>
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