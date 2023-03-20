import React from "react";
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './css/Gallery.css';

export const Gallery = () => {
    
    const pic1 = require("../images/gallery/pic1.webp");
    const pic2 = require("../images/gallery/pic2.webp");
    const pic3 = require("../images/gallery/pic3.webp");
    const pic4 = require("../images/gallery/pic4.webp");
    const pic5 = require("../images/gallery/pic5.webp");
    const pic6 = require("../images/gallery/pic6.webp");
    const pic7 = require("../images/gallery/pic7.webp");
    const pic8 = require("../images/gallery/pic8.webp");
    const pic9 = require("../images/gallery/pic9.webp");
    const pic10 = require("../images/gallery/pic10.webp");
    const pic11 = require("../images/gallery/pic11.webp");
    const pic12 = require("../images/gallery/pic12.webp");
    const pic13 = require("../images/gallery/pic13.webp");
    const pic14 = require("../images/gallery/pic14.webp");

    return (
        <>
            <Navbar />
            <div className="gallery-container">
                <img src={pic1} alt="An example of C&C Previous work"/>
                <img src={pic2} alt="An example of C&C Previous work"/>
                <img src={pic3} alt="An example of C&C Previous work"/>
                <img src={pic4} alt="An example of C&C Previous work"/>
                <img src={pic5} alt="An example of C&C Previous work"/>
                <img src={pic6} alt="An example of C&C Previous work"/>
                <img src={pic7} alt="An example of C&C Previous work"/>
                <img src={pic8} alt="An example of C&C Previous work"/>
                <img src={pic9} alt="An example of C&C Previous work"/>
                <img src={pic10} alt="An example of C&C Previous work"/>
                <img src={pic11} alt="An example of C&C Previous work"/>
                <img src={pic12} alt="An example of C&C Previous work"/>
                <img src={pic13} alt="An example of C&C Previous work"/>
                <img src={pic14} alt="An example of C&C Previous work"/>
            </div>
            <Footer />
        </>
    )
}