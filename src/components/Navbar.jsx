import React, { useState } from "react";
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

export const Navbar = (props) => {

    const logo = require('../images/cclightinglogo.webp');
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="nav-container">
                <Link to="/" className="home-link"><img src={logo} onClick={() => window.scrollTo(0,0)} alt="Cross & Carlile Logo"/></Link>
                <div className="full-size">
                    <ul>
                        <a href="/">Home</a>
                        <a href="/contact">Contact</a>
                        <a href="/Gallery">Gallery</a>
                        <a href="/about">About Us</a>
                        <a href="/products">Products & Warranties</a>
                        <a href="/reviews">Reviews</a>
                        {/* <a href="/Gallery" style={{fontSize:"3rem"}}>💡</a> 
                        🌙 This will be for the darkmode */}
                    </ul>
                </div>
                    <Hamburger toggled={isOpen} toggle={() => {   
                        if(!isOpen){
                            setOpen(true);
                        } else {
                            setOpen(false);
                        }
                    }}
                    size={40} distance="lg" label="Show menu" duration={0.5} />
                {isOpen && 
                <ul>
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/Gallery">Gallery</a>
                    <a href="/about">About Us</a>
                    <a href="/products">Products & Warranties</a>
                    <a href="/reviews">Reviews</a>
                    {/* <a href="/Gallery" style={{fontSize:"3rem"}}>💡</a> 
                    🌙 This will be for the darkmode */}
                </ul>}
            </div>
        </>
    )
}