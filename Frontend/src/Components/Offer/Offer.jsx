
import React from "react";
import "./Offer.css";
import exclusive_img from "../Assets/Offer/exclusive_image.png";

const Offer = () => {
    return ( 
        <div className='offer flex flex-col md:flex-row justify-center items-center px-4 md:px-12 py-8 gap-6'>
            {/* Left Content Section */}
            <div className='w-full md:w-1/2 flex flex-col items-center text-left  space-y-6 ml-3'>
                <div className='offer-left space-y-4'>
                    <h1 className="text-4xl  md:text-7xl font-bold leading-tight">
                        Exclusive<br />
                        Only For You
                    </h1>

                </div>
                <button className='button text-lg md:text-2xl px-6 py-3 md:p-6 mt-3'>
                    Check 'em out 
                </button>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={exclusive_img} alt="Exclusive Offer" className="offer-right w-3/4 md:w-full max-w-md md:max-w-lg" />
            </div>
        </div>
    );
}

export default Offer;
