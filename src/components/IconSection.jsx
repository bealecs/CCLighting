import React from "react";

export const IconSection = () => {

    const face = require("../images/faceicon.png");
    const tools = require("../images/toolsicon.png");
    const lighting = require("../images/lightingicon.png");

    return (
        <>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padding:"4%",backgroundColor:"#040e1b"}}>
                <img src={lighting} alt="lighting icon" />
                <img src={tools} alt="icon of some tools represententing custome support" />
                <img src={face} alt="icon of a face"/>
            </div>
            <div style={{display:"flex", flexDirection:"column",backgroundColor:"#040e1b",color:"#FADF63"}}>
                <div>
                    <h2 style={{fontSize:"4rem", width:"70%",padding:"2%",textAlign:"center"}}>Beautiful Lighting</h2>
                    <p style={{fontSize:"2rem", width:"70%",margin:"auto",padding:"2%"}}>If you haven't checked out our gallery yet, I don't know what you're waiting for... We have beautiful displays of past work; with just a few clicks, your property could be featured next!</p>
                </div>
                <div>
                    <h2 style={{fontSize:"4rem", width:"70%",padding:"2%",textAlign:"center"}}>Excellent Team</h2>
                    <p style={{fontSize:"2rem", width:"70%",margin:"auto",padding:"2%"}}>A team that has been together for over a decade, with a magnitude arsenal of experience between them both, Cross & Carlile have proven time and time again that team work makes the dream work</p>
                </div>
                <div>
                    <h2 style={{fontSize:"4rem", width:"70%",padding:"2%",textAlign:"center"}}>Outstanding Customer Service</h2>
                    <p style={{fontSize:"2rem", width:"70%",margin:"auto",padding:"2%"}}>Our work speaks for itself, but a little love never hurt.. Check out our customer reviews, and see why we are the right option for your next solution.</p>
                </div>
            </div>
        </>
    )
}