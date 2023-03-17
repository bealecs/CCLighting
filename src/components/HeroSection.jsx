import React from "react";
import './css/HeroSection.css';

export const HeroSection = () => {

    const video = require("../videos/stockHero.mp4");
    const pic1 = require("../images/ccpic1.webp");
    const pic2 = require("../images/ccpic2.webp");
    const pic3 = require("../images/ccpics.webp");

    return(
        <>
            <div className="container">
                <div style={{paddingTop:"9%",color:"white"}}>
                    <video src={video} autoPlay loop muted></video>
                    <h2> I would like to replace the above video with the drone footage on your FB <br /> </h2>
                    <div style={{borderBottom:"20px solid #FADF63",paddingTop:"2%",width:"70%",margin:"auto",borderRadius:"50%"}}></div>
                </div>
                <div className="Card-Holder">
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Locally Owned and Operated</h2>
                        <div style={{borderBottom:"2px solid #FADF63", width:"40%", margin:"auto",paddingTop:"1%"}}></div>
                        <img src={pic1} alt="Noah and Tyler installing light fixtures" style={{width:"60%",alignItems:"center",paddingTop:"2%"}}/>
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Licensed and Insured</h2>
                        <div style={{borderBottom:"2px solid #FADF63", width:"40%", margin:"auto",paddingTop:"1%"}}></div>
                        <img src={pic2} alt="Noah and Tyler installing light fixtures" style={{width:"60%",alignItems:"center",paddingTop:"2%"}}/>
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
               <div className="landing-cards">
                    <div className="cards1">
                        <h2>Custom Solutions Designed for You</h2>
                        <div style={{borderBottom:"2px solid #FADF63", width:"40%", margin:"auto",paddingTop:"1%"}}></div>
                        <img src={pic3} alt="Noah and Tyler installing light fixtures" style={{width:"60%",height:"",alignItems:"center",paddingTop:"2%"}}/>
                    </div>
                    <div className="cards2">
                        <p></p>
                    </div>
               </div>
               </div>
            </div>
        </>
    )
}