import React from "react";
import './css/Reviews.css';
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Reviews = () => {

    return (
        <>
        <Navbar />
        <div className="review-container">
            <h1>Customer Testimonials</h1>
            <h4>Read what some of your neighbors are saying about our work</h4>
            <p>All reviews are pulled directly from the <a href="https://www.homeadvisor.com/rated.CrossCarlileLighting.118217905.html" target="_blank" rel="noopener noreferrer" >C&C Home Advisor Page</a></p>
            
                <div className="testimonial-card">
                    <h2>Name: Tim B.</h2>
                    <h4>Date: 3/9/2023</h4>
                    <p>From design to installation, Cross and Carlisle created our backyard lighting project that exceeds our expectations for an aesthetically pleasing landscape retreat. The owners are knowledgeable, professional, creative, and careful with existing plants and turf. 
                        We are thrilled about choosing their services for our project, and we give them our highest recommendation. N. Baker
                    </p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Marilyn S. </h2>
                    <h4>Date: 10/18/2021</h4>
                    <p>These guys transformed my front and backyard in less than 4 days. Gave me the advise I needed as to plants that would grow in shaded areas. 
                        The lighting they installed looks spectacular! Now MY yard is the best on the block!! Thank you!!!
                    </p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Joy K. </h2>
                    <h4>Date: 3/7/2022</h4>
                    <p>The team of Cross & Carlile listened to what I wanted, met my budget, and developed a wonderful landscaping plan for my back and side yard. The end result was better than I would have ever expected and the guys were as excited as I was at the final result.
                         Although I don't anticipate any problems with the lighting project in the future, I'm confident they will take care of any snags. 
                         I wish all my house projects could go as smoothly as my experience with Noah and Tyler. Great job, guys!</p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Frances L.</h2>
                    <h4>Date: 10/18/2021</h4>
                    <p>I had outside lights installed in the front yard along the hedges. In two spotlights installed facing front door. Wow what a professional job that they did! 
                        They paid close attention to detail. Will work in your budget and advise you on what can be done in your budget. Also they cleaned up everything when they left. 
                        I diffinately will use this company again for other projects.
                    </p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Raymond L.</h2>
                    <h4>Date: 11/5/2022</h4>
                    <p>They are great. And you can definitely count on them to do an outstanding job.</p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Vanessa A.</h2>
                    <h4>Date: 9/18/2021</h4>
                    <p>These guys were prompt, professional, and clean. Will definitely use them again!</p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Caroline T.</h2>
                    <h4>Date: 1/29/2023</h4>
                    <p>The owners, Noah Cross and Tyler Carlile, of cross and Carlile, Lightening weâ re both professional, conscientious, detail oriented, and courteous. They accomplished what was agreed-upon and went above and beyond to resolve minor issues that were addressed. They and their team were very easy to talk to and work with. 
                        The team was extremely hard-working and dedicated I would 100% recommend Cross and Carlile for your outdoor lighting project. 
                        It was quite refreshing to see too young men creating their business model and their future as Entrepreneurs . 
                        These gentlemen will go far because of their customer service their attention to detail and their vision for landscape design. 
                        Thank you so much we are DELIGHTED with our outdoor lightening presentation. It is gorgeous!
                    </p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Tim B.</h2>
                    <h4>Date: 3/9/2023</h4>
                    <p>From design to installation, Cross and Carlisle created our backyard lighting project that exceeds our expectations for an aesthetically pleasing landscape retreat. 
                        The owners are knowledgeable, professional, creative, and careful with existing plants and turf.
                         We are thrilled about choosing their services for our project, and we give them our highest recommendation. N. Baker
                    </p>
                </div>
                <div className="testimonial-card">
                    <h2>Name: Dara B.</h2>
                    <h4>Date: 11/20/2022</h4>
                    <p>Tyler and Noah are very experienced and easy to work with. They designed the lighting for the front and back of my house and it looks amazing!!
                         Very punctual, fair priced, and spectacular workmanship. A++++ service, highly recommend to anyone looking for lighting ideas for their home.
                    </p>
                </div>
        </div>
        <Footer />
        </>
    )
}