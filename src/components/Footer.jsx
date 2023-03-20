import React from "react";
import './css/Footer.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

export const Footer = () => {
    
    return(
        <>
        <div className="first-container">
        <h1>Find us on Social Media</h1>
        <div className="footer-container">
            <SocialIcon className="social-icon" bgColor="#FADF63" target="_blank" rel="noopener noreferrer" url="https://www.facebook.com/crossandcarlilelighting/" />
            <SocialIcon className="social-icon" bgColor="#FADF63" target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/crossandcarlilelighting/?igshid=YjNmNGQ3MDY%3D" />
            <SocialIcon className="social-icon" bgColor="#FADF63" target="_blank" rel="noopener noreferrer" url="https://www.yelp.com/biz/cross-and-carlile-lighting-chesapeake" />
        </div>
        <p> © Website created by <Link target="_blank" rel="noopener noreferrer" to="https://clifcodes.netlify.app">Clif Codes 2023</Link></p>
        </div>
        </>
    )
}