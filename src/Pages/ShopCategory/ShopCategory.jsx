import react, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/Context";
import Item from "../../Components/Item/Item";
const ShopCategory = (props) => {
    const {AllProduct} = useContext(ShopContext);
    console.log(AllProduct)
    console.log(props.category)
    const Collections = AllProduct.filter(product =>(product.category === props.category))
    console.log(Collections)
    return ( 
        <div>
            <img src={props.banner} alt="" className="banner-image"/>

            <div className="shop-category flex justify-between px-10 py-4">
                <div className="text-3xl font-bold">
                Showing 1-12 out of 36 products
                </div>
                <div>
                    {/* <button>Sort by <img src="" alt="" /></button>
                    <select name="" id="">
                        <option value="pricing" disabled hidden >Pricing</option>
                        <option value="latest">Latest</option>
                    </select> */}
                    {/* <button className="text-3xl "> */}
                        <select name="" id="">
                            <option value="sort by">Sort by</option>
                            <option value="pricing">Cost</option>
                            <option value="Latest">Latest</option>
                        </select>
                    {/* </button> */}
                </div>
            </div>
            <Item product={Collections}/>
        </div>
     );
}
 
export default ShopCategory;