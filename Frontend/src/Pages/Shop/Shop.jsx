import Hero from "../../Components/Hero/Hero";
import Item from "../../Components/Item/Item";
import NewCollection from "../../Components/NewCollections/NewCollections";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Offer from "../../Components/Offer/Offer";
import TrendingWomen from "../../Components/Trending/TrendingWomen";
import TrendingKids from "../../Components/Trending/TrendingKids";
import TrendingMen from "../../Components/Trending/TrendingMen";
const Shop = () => {
    return ( 
        <>
        <Hero />
        <TrendingWomen />
        <TrendingKids />
        <TrendingMen />
        <Offer />
        <NewCollection />
        <NewsLetter />
        </>
     );
}
 
export default Shop;