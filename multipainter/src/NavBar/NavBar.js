import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("/Home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="header">
            {/* Left */}
            <div>
                <img src={logo} className="logo" alt="Logo" />
            </div>
            {/* Middle */}
            <div className="NavBar">
                <ul>
                    <li><Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Home")}>Home</Link></li>
                    <li><Link to="/create" className={activeTab === "/create" ? 'active-page' : ''} onClick={() => handleTabClick("/create")}>Free Draw</Link></li>
                    <li><Link to="/Paint" className={activeTab === "/Paint" ? 'active-page' : ''} onClick={() => handleTabClick("/Paint")}>Paint</Link></li>
                    <li><Link to="/Community" className={activeTab === "/Community" ? 'active-page' : ''} onClick={() => handleTabClick("/Community")}>Community</Link></li>
                    <li><Link to="/Portfolio" className={activeTab === "/Portfolio" ? 'active-page' : ''} onClick={() => handleTabClick("/Portfolio")}>Portfolio</Link></li>
                    <li><Link to="/Signin" className={activeTab === "/Signin" ? 'active-page' : ''} onClick={() => handleTabClick("/Signin")}>Sign-In</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;