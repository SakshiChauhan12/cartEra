import React from "react";
import "./Description.css"
const Description = () => {
    return ( 
        <div className="description-box">
            <div className="description-button">
                <button className="description">Description</button>
                <button className="description fade">Review(556)</button>
            </div>
            <div className="descriptionbox-description">
                <p>Welcome to our exclusive clothing collection where fashion meets comfort. Each piece is crafted from high-quality, sustainable fabrics designed to keep you stylish while caring for the planet. From casual wear to elegant outfits, we offer a wide range of choices tailored to fit all body types. Whether you're dressing up for a special occasion or seeking everyday essentials, our carefully curated styles ensure that you never have to compromise on comfort or trend. <br /> <br />

                Shop now and discover clothing that not only looks great but feels great too—because your wardrobe should be as unique as you are.</p>
            </div>
        </div>
     );
}
 
export default Description;