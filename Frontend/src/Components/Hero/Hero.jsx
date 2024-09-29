import hand_icon from '../Assets/Hero/hand_icon.png';
import arrow_icon from '../Assets/Hero/arrow_icon.png';
import hero_image from '../Assets/Hero/hero_image.png';
import "./Hero.css"
const Hero = () => {
    return (
        <div className='hero flex justify-center items-center'>
            <div className='ml-4'>
                <div className='flex items-center justify-center space-y-4 ml-3'>
                    <img src={hand_icon} alt=""></img>
                    <div className="text-7xl space-y-6">
                        Unleash Your Style with<br />
                        Discover the <br />Latest Trends Today
                    </div>
                </div >
                <button className='button flex text-3xl p-5 mx-4 mt-6'>Latest Collection 
                <img src={arrow_icon} alt="" className='mt-3 ml-3 w-9 h-4'  />
                </button>
            </div >
            <img src={hero_image} alt="" className="hero-right" />
        </div>
    );
}

export default Hero;