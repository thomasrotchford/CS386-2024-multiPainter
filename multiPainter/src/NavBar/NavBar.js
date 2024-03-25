import React from "react";
import logo from "../assets/logo.png";
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            {/* Left */}
            <div className="thing1">
                <div className="thing3">
                <img src={logo} className="logo" />
                </div>
            </div>
        {/* Middle */}
        <div>
            <ul>
                <li><a href="/Home">Home</a>
                </li>
                <li><a href="/create">Free Draw</a>
                </li>
                <li><a href="/Paint">Paint</a>
                </li>
                <li><a href="/WorkShop">WorkShop</a>
                </li>
                <li><a href="">Portfolio</a>
                </li>
                <li><a href="/Signin">Sign-In</a>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default NavBar;