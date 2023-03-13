import React from "react";
import './css/Navbar.css';

export const Navbar = (props) => {

    const logo = require('../images/cclightinglogo.webp');

    return (
        <>
            <div className="nav-container">
                <img src={logo} alt="Cross & Carlile Logo"/>
                <ul>
                    <li>Contact</li>
                    <li>Gallery</li>
                    <li>About Us</li>
                    <li>Products & Warranties</li>
                    <li style={{fontSize:"3rem"}}>💡</li> 
                    {/*🌙 This will be for the darkmode*/}
                </ul>
            </div>
        </>
    )
}