
import react from "react";
import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({ product }) => {
    console.log("the item list")
    console.log("This is array", product.id)
    return (
        <div className="item">
                <Link to={`/product/${product.id}`}>
                    <div className="item-cards" key={product.id}>
                        <img src={product.image} alt="" className="item-image" />
                        <h3 className="font-semibold text-xl">{product.name}</h3>
                        <div className="cost flex space-x-2 justify-center">
                            <div className="old_cost font-semibold text-xl">
                                ₹{product.new_cost}
                            </div>
                            < div className="new_cost font-semibold text-xl">
                                ₹{product.old_cost}
                            </div>

                        </div>
                    </div>
                </Link>
        </div>
                // return       if i dont use the paratheses js will insert a semi colon after the return ....result in undefined
    );
}

export default Item;