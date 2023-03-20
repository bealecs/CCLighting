import React from "react";
import './css/Contact.css';
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Contact = () => {

    return(
        <>
        <Navbar />
            <div className="contact-container">
                <form>
                    <label htmlFor="first-name">First Name:</label>
                    <input id="first-name" type="text" />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                    <textarea type="text" placeholder="Message..." />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}