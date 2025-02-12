import react, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/Context";
import Item from "../../Components/Item/Item";
const ShopCategory = (props) => {
    const {AllProduct} = useContext(ShopContext);
    // console.log(AllProduct)
    // console.log(props.category)
    const Collections = AllProduct.filter(product =>(product.category === props.category))
    console.log(Collections)
    return ( 
        <div>
            <img src={props.banner} alt="" className="banner-image object-contain"/>

            <div className="shop-category flex justify-between px-10 py-4">
                <div className="text-3xl font-bold">
                </div>
                <div>
                        <select name="" id="" className="px-2 py-1 md:px-5  md:py-2 text-sm md:text-xl"> 
                            <option value="sort by">Sort by</option>
                            <option value="pricing">Cost</option>
                            <option value="Latest">Latest</option>
                        </select>
                </div>
            </div>
            <div className="shop-category-item">
                {Collections.map(item =>
                    <Item product={item}/>
                    
                )}
            </div>
        </div>
     );
}
 
export default ShopCategory;