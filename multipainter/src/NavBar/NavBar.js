import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("/Home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open => !open))
    }

    return (
        <nav className="header">
            {/* Left */}
            <Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Home")}>
                <div>
                    <img src={logo} className="logo" alt="Logo" />
                </div>
            </Link>


            <li class ="trigger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </li>

            {/* Middle */}
            <div className={`NavBar ${isOpen ? "is-open" : ""}`}>
                <ul>
                    <li><Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Home")}>Home</Link></li>
                    <li><Link to="/create" className={activeTab === "/create" ? 'active-page' : ''} onClick={() => handleTabClick("/create")}>Free Draw</Link></li>
                    <li><Link to="/Paint" className={activeTab === "/Paint" ? 'active-page' : ''} onClick={() => handleTabClick("/Paint")}>Paint</Link></li>
                    <li><Link to="/Community" className={activeTab === "/Community" ? 'active-page' : ''} onClick={() => handleTabClick("/Community")}>Community</Link></li>
                    <li><Link to="/Signin" className={activeTab === "/Signin" ? 'active-page' : ''} onClick={() => handleTabClick("/Signin")}>Sign-In</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;