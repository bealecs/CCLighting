import React from "react";
import './css/HeroSection.css';
import ReactPlayer from "react-player";

export const HeroSection = () => {

    const video = require("../videos/stockHero.mp4");
    const pic1 = require("../images/ccpic1.webp");
    const pic2 = require("../images/ccpic2.webp");
    const pic3 = require("../images/ccpics.webp");

    return(
        <>
            <div className="container">
                
                <div className="Card-Holder">
               <div className="landing-cards">
                    <div className="cards1">
                    <div style={{color:"#040e1b", width:"fit-content", margin:"auto",padding:"1%"}}>
                        <h2>Locally Owned and Operated</h2>
                        </div>
                        <img src={pic1} alt="Noah and Tyler installing light fixtures" style={{alignItems:"center",paddingTop:"2%"}}/>
                        <p>Cross & Carlile Lighting is born and bred in the 757 and we are proud to serve our neighborhoods with shining smiles.
                        <br /><br /><a href="/about" target="_blank" rel="noopener noreferrer">Contact Us</a>
                        </p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                    <div style={{color:"#040e1b", width:"fit-content", margin:"auto",padding:"1%"}}>
                        <h2>Licensed and Insured</h2>
                        </div>
                        <img src={pic2} alt="Noah and Tyler installing light fixtures" style={{alignItems:"center",paddingTop:"2%"}}/>
                        <p>All employees of Cross & Carlile are properly licensed and ensured for each and every job. We make sure to bring the best to your home, and wouldn't have it any
                            other way. <br /><br /><a href="https://google.com" target="_blank" rel="noopener noreferrer">Click here for certs of noah and ty</a>
                        </p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                        <div style={{color:"#040e1b", width:"fit-content", margin:"auto",padding:"1%"}}>
                        <h2>Custom Solutions Designed for You</h2>
                        </div>
                        <img src={pic3} alt="Noah and Tyler installing light fixtures" style={{alignItems:"center",paddingTop:"2%"}}/>
                        <p>Whether it be a lit up patio, porch, 
                            driveway, or even your favorite tree that was planted decades ago.. We have your back. We'll work with you to decide how we can make your home the brightest on the block!
                            <br /><br /><a href="/products" target="_blank" rel="noopener noreferrer">Check out our products</a>
                        </p>
                    </div>
               </div>
               </div>
            </div>
        </>
    )
}