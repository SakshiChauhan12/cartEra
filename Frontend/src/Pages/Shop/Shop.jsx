import Hero from "../../Components/Hero/Hero";
import Item from "../../Components/Item/Item";
import NewCollection from "../../Components/NewCollections/NewCollections";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Offer from "../../Components/Offer/Offer";
import Trending from "../../Components/Trending/Trending";

const Shop = () => {
    return ( 
        <>
        <Hero />
        <Trending />
        <Offer />
        <NewCollection />
        <NewsLetter />
        </>
     );
}
 
export default Shop;