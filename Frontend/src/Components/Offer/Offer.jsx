import React from "react";
import "./Offer.css"
import exclusive_img from "../Assets/Offer/exclusive_image.png"
const Offer = () => {
    return ( 
        <div className='offer flex justify-around items-center'>
            <div className='ml-4'>
                <div className='offer-left flex items-center justify-center space-y-4 ml-3'>
                    <img src="" alt=""></img>
                    <div className="text-7xl space-y-6 font-bold">
                        Exclusive<br />
                        Only For You<br />
                        <div className="text-base">ON THE BEST SELLER</div>
                    </div>
                </div >
                <button className='button flex text-2xl p-6 mx-4 mt-3'>Check 'em out 
                </button>
            </div >
            <img src={exclusive_img} alt="" className="offer-right" />
        </div>
     );
}
 
export default Offer;