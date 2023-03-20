import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import './css/Products.css';

export const Products = () => {

    const light1 = require("../images/light1.webp");
    const light2 = require("../images/light2.webp");
    const light3 = require("../images/light3.webp");

    return (
        <>
        <Navbar />
            <div className="products-container">
                <div className="light-example">
                    <img src={light1} alt="One of the light fixtures that is used by Cross and Carlile" />
                    <h3>Product Name</h3>
                    <p>A description of the light and any warranties that it may have. Maybe boast a little bit about why you went with this brand or something<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas</p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">View the Product directly here</a>  
                </div>
                <div className="light-example">
                    <img src={light2} alt="One of the light fixtures that is used by Cross and Carlile" />
                    <h3>Product Name</h3>
                    <p>A description of the light and any warranties that it may have. Maybe boast a little bit about why you went with this brand or something<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas</p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">View the Product directly here</a>                  
                </div>
                <div className="light-example">
                    <img src={light3} alt="One of the light fixtures that is used by Cross and Carlile" />
                    <h3>Product Name</h3>
                    <p>A description of the light and any warranties that it may have. Maybe boast a little bit about why you went with this brand or something<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas</p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">View the Product directly here</a>                
                </div>
            </div>
            <Footer />
        </>
    )
}