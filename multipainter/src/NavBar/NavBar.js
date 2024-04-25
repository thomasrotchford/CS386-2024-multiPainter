// General React Imports 
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Imports our logo, for easy use for later
import logo from "../assets/logo.png";

// Import symbols
/* Box Icons */
import * as FaIcons from 'react-icons/fa';


import "./NavBar.css";

// function for the nav bar
const NavBar = () => {
    const [activeTab, setActiveTab] = useState("/Home");

    // handTabClick sets the page to active to have the active color be different from the rest
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Used for the burger menu to add a class to a class to show or hide the menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the burger menu
    const toggleMenu = () => {
        setIsOpen((open => !open))
    }

    // main HTML for the navbar
    return (
        <nav className="header">
            {/* Left Side of Header*/}
            {/* This line below allows the logo image to link to the home page */}
            <Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Home")}>
                <div>
                    {/* This Effects our Logo, Imported at the top to give simpler code*/}
                    <img src={logo} className="logo" alt="Logo" />
                </div>
            </Link>

            {/*Burger menu*/}
            <li className="trigger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </li>

            {/* Right*/}
            <div className={`NavBar ${isOpen ? "is-open" : ""}`}>
                <ul>
                    {/* Each of these list items lead to one page 
                        Link to : Links to source folder () -- Affects output
                        active tab : Which tab we MUST be on for the tab to Darken
                        onclick HandleTab : which tabe we ARE on
                        Title: What shows when you Hover
                          -- In theory these are all the same, Possible use of varible? -- */}

                    {/* No titles on top 4, its better without them */}      
                    <li><Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''}onClick={() => handleTabClick("/Home")} >Home</Link></li>
                    <li><Link to="/Create" className={activeTab === "/Create" ? 'active-page' : ''} onClick={() => handleTabClick("/Create")} >FreeDraw</Link></li>
                    <li><Link to="/Paint" className={activeTab === "/Paint" ? 'active-page' : ''} onClick={() => handleTabClick("/Paint")} >Paint</Link></li>
                    <li><Link to="/Community" className={activeTab === "/Community" ? 'active-page' : ''} onClick={() => handleTabClick("/Community")}>Community</Link></li>

                    {/* These 2 use symbols */}
                    <li><Link to="/Signin" className={activeTab === "/Signin" ? 'active-page' : ''} onClick={() => handleTabClick("/Signin")} title="SignIn"><FaIcons.FaSignInAlt/></Link></li>
                    <li><Link to="/Settings" className={activeTab === "/Settings" ? 'active-page' : ''} onClick={() => handleTabClick("/Settings")} title="Settings"><FaIcons.FaCog /></Link></li>
                    {/* Will automatically link to Thomas Page if given empty/null Link to */}

                </ul>
            </div>
        </nav>
    );
};

{/* This Export lets us use this code elsewhere */}
export default NavBar;
