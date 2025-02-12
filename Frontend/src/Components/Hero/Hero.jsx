import React from 'react';
import hand_icon from '../Assets/Hero/hand_icon.png';
import arrow_icon from '../Assets/Hero/arrow_icon.png';
import hero_image from '../Assets/Hero/hero_image.png';
import "./Hero.css";

const Hero = () => {
    return (
        <div className='hero min-h-screen w-full flex flex-col md:flex-row justify-center items-center px-4 md:px-8 gap-8 md:gap-12'>
            {/* Left Content Section */}
            <div className='w-full md:w-1/2 space-y-8 text-center md:text-left'>
                <div className='space-y-6'>
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4'>
                        <img 
                            src={hand_icon} 
                            alt="Welcome" 
                            className='hidden md:block md:w-12 md:h-12 object-contain'
                        />
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                            Unleash Your Style with
                            <br />
                            Discover the
                            <br />
                            Latest Trends Today
                        </h1>
                    </div>
                </div>
                
                <button className='button inline-flex items-center justify-center 
                                 text-xl md:text-3xl p-4 md:p-5 
                                 transform transition duration-300 hover:scale-105'>
                    Latest Collection
                    <img 
                        src={arrow_icon} 
                        alt="Arrow" 
                        className='ml-3 w-6 h-3 md:w-9 md:h-4 object-contain'
                    />
                </button>
            </div>

            {/* Right Image Section */}
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img 
                    src={hero_image} 
                    alt="Hero" 
                    className='hero-right w-full h-auto object-cover 
                             transform transition duration-300 hover:scale-105'
                />
            </div>
        </div>
    );
}

export default Hero;