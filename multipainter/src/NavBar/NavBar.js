// General React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Imports our logo, for easy use for later
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
            {/* Left Side of Header*/}
            {/* This line below lets our Nav start on the HomePage */}
            <Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Home")}>
                <div>
                    {/* This Effects our Logo, Imported at the top to give simpler code*/}
                    <img src={logo} className="logo" alt="Logo" />
                </div>
            </Link>

            {/*?*/}
            <li class ="trigger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </li>

            {/* Middle ( But Actually Right of the Div bar ) */}
            <div className={`NavBar ${isOpen ? "is-open" : ""}`}>
                <ul>
                    {/* Each of these list items lead to one page 
                        Link to : Links to source folder () -- Affects output
                        active tab : Which tab we MUST be on for the tab to Darken
                        onclick HandleTab : which tabe we ARE on
                          -- In theory these are all the same, Possible use of varible? -- */}
                    <li><Link to="/Home" className={activeTab === "/Home" ? 'active-page' : ''} onClick={() => handleTabClick("/Create")}>Home</Link></li>
                    <li><Link to="/Create" className={activeTab === "/Create" ? 'active-page' : ''} onClick={() => handleTabClick("/Create")}>Free Draw</Link></li>
                    <li><Link to="/Paint" className={activeTab === "/Paint" ? 'active-page' : ''} onClick={() => handleTabClick("/Paint")}>Paint</Link></li>
                    <li><Link to="/Community" className={activeTab === "/Community" ? 'active-page' : ''} onClick={() => handleTabClick("/Community")}>Community</Link></li>
                    <li><Link to="/Signin" className={activeTab === "/Signin" ? 'active-page' : ''} onClick={() => handleTabClick("/Signin")}>Sign-In</Link></li>
                    <li><Link to="/Settings" className={activeTab === "/Settings" ? 'active-page' : ''} onClick={() => handleTabClick("/Settings")}>Settings</Link></li>
                    {/* Will automatically link to Thomas Page if given empty/null Link to */}

                </ul>
            </div>
        </nav>
    );
};

{/* This Export lets us use this code elsewhere */}
export default NavBar;