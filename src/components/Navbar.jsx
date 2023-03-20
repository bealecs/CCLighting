import React from "react";
import './css/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {

    const logo = require('../images/cclightinglogo.webp');

    return (
        <>
            <div className="nav-container">
                <Link to="/" className="home-link"><img src={logo} alt="Cross & Carlile Logo"/></Link>
                <ul>
                    <a href="/contact">Contact</a>
                    <a href="/Gallery">Gallery</a>
                    <a href="/Gallery">About Us</a>
                    <a href="/Gallery">Products & Warranties</a>
                    <a href="/Gallery">Reviews</a>
                    <a href="/Gallery" style={{fontSize:"3rem"}}>💡</a> 
                    {/*🌙 This will be for the darkmode*/}
                </ul>
            </div>
        </>
    )
}