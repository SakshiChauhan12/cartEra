import react from "react";
import { data_trending_product_women } from "../Assets/data_trending_product";
import Item from "../Item/Item";
import "./Trending.css"
const Trending = () => {
    console.log(data_trending_product_women)
    return ( 
        <div className="trending">
            <div className="text-4xl text-center text-gray-500">
                <div className="">
                    TRENDING IN WOMEN
                </div>
                <hr />
            </div>
            <Item  product={data_trending_product_women}/>
        </div>
     );
}
 
export default Trending;