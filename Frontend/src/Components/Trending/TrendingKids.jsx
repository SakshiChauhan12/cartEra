import react, { useEffect } from "react";
import { data_trending_product_women } from "../Assets/data_trending_product_women";
import Item from "../Item/Item";
import "./TrendingKids.css"
import { useState } from "react";
import { REACT_APP_BACKEND_URL } from "../../utils";
const TrendingKids = () => {
    // console.log(data_trending_product_women)
    const [trendingKids, setTrendingKids] = useState([]);
    useEffect(() => {
        fetch(`${REACT_APP_BACKEND_URL}/product/trendingkid`).then(res => res.json()).then(data => {
            console.log(data);
            setTrendingKids(data);
        }).catch(error =>{
            console.log(error);
        })
    },[]);
    return ( 
        <div className="trending">
            <div className="text-4xl md:text- text-center text-gray-500">
                <div className="">
                    TRENDING IN KIDS
                </div>
                <hr />
            </div>
            <div className="trending-item">
            {trendingKids.map(item=>{
                // {console.log(item)}
                return <Item  product={item}/>
            })
            }
            </div>
        </div>
     );
}

export default TrendingKids;








//pravctise context.api for the menu context.
// import react from "react";
// import { data_trending_product_women } from "../Assets/data_trending_product";
// import Item from "../Item/Item";
// import AllProducts from "../Assets/AllProduct";
// import { MenuContext } from "../../Context/Menu";
// import { useContext } from "react";
// import "./Trending.css"
// const Trending = () => {
//     // console.log(data_trending_product_women)
//     const { menu, setMenu } = useContext(MenuContext)
//     console.log(AllProducts);
//     return (
//         <div className="trending">
//             {menu === "women" ?
//                 (
//                     <>
//                         <div className="text-4xl text-center text-gray-500">
//                             <div className="">
//                                 WOMEN COLLECTIONS
//                             </div>
//                             <hr />
//                         </div>
//                         <Item product={AllProducts.filter(Product => (Product.category === "Women"))} />

//                     </>
//                 ) : menu === "men" ? (
//                     <>
//                         <div className="text-4xl text-center text-gray-500">
//                             <div className="">
//                                 MEN COLLECTIONS
//                             </div>
//                             <hr />
//                         </div>
//                         <Item product={AllProducts.filter(Product => (Product.category === "Men"))} />

//                     </>
//                 ) : menu === "kid"? (
//                     <>
//                         <div className="text-4xl text-center text-gray-500">
//                             <div className="">
//                                 KIDS COLLECTIONS
//                             </div>
//                             <hr />
//                         </div>
//                         <Item product={AllProducts.filter(Product => (Product.category === "Kid"))} />

//                     </>
//                 ):(
//                         <div className="text-4xl text-center text-gray-500">
//                             <div className="flex-col items-center">
//                                CHECK THE TRENDINGS
//                             </div>
//                             <hr />
//                         </div>
//                 )
//             };

//         </div>
//     );
// }

// export default Trending;