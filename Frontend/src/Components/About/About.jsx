// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1 className="about-title">About Us</h1>
//       <p className="about-text">
//         Welcome to Urban Styling, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, customer service, and uniqueness.
//       </p>
//       <p className="about-text">
//         Founded in 2024 by Ansh, Urban Styling has come a long way from its beginnings. When Ansh first started out, their passion for eco-friendly fashion drove them to start their own business.
//       </p>
//       <p className="about-text">
//         We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
//       </p>
//       <div className="about-image-container">
//         <img src="your-image-url.jpg" alt="About us" className="about-image"/>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react"
import "./About.css"
const About = () => {
    return ( 
    <div className="about">
        <div className="container">
            <h2 className="header">About the Author</h2>
            <p className="about-text">
                            Welcome to Urban Styling, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, customer service, and uniqueness.
                            </p>
                            <p className="about-text">
                        Founded in 2024 by Ansh, Urban Styling has come a long way from its beginnings. When Ansh first started out, their passion for eco-friendly fashion drove them to start their own business.
                            </p>
                            <p className="about-text">
                                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
        </div>
        
    </div> 
   
);
}
 
export default About;