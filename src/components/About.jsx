import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import './css/About.css';

export const About = () => {

    return (
        <>
        <Navbar />
        <div className="about-container">
            <h1>About Cross & Carlile...</h1>
            <h4>How we got to where we are today, how we came together as a team, and an in-depth look at our company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin felis ut massa egestas, ut fermentum sem varius. Aliquam erat volutpat.
                Pellentesque semper nec lorem sed imperdiet. Ut suscipit ornare libero at posuere. In hac habitasse platea dictumst. Nam nec luctus ipsum.
                Pellentesque quis velit finibus, auctor augue in, porta nisl. <br /><br /> Fusce non blandit ex, vestibulum vestibulum diam. Sed non porttitor nunc. 
                Curabitur eu nisi ut tellus rhoncus porta. Vivamus et venenatis urna, non ultricies ipsum. Cras orci tortor, bibendum ac finibus a, vestibulum id metus. 
                Maecenas at viverra est, id fermentum elit. Proin blandit facilisis eros, vestibulum sodales justo faucibus ac. Nulla nec egestas orci. 
                Quisque id nisl at metus aliquet tempor volutpat nec nisl. Duis auctor est in neque blandit, ac ultricies leo malesuada. 
                Vivamus sapien nulla, consectetur porttitor est venenatis, laoreet consectetur mi. Pellentesque commodo arcu eget dolor ultrices convallis. 
                Etiam nisl libero, lobortis et ante a, aliquet lacinia odio. Duis et faucibus purus.</p>
        </div>
        <Footer />
        </>
    )
}