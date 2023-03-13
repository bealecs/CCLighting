import React from "react";
import './css/HeroSection.css';

export const HeroSection = () => {

    return(
        <>
            <div className="container">
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Locally Owned and Operated</h2>
                        <img />
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Licensed and Insured</h2>
                        <img />
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Custom Solutions Designed for You</h2>
                        <img />
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
            </div>
        </>
    )
}