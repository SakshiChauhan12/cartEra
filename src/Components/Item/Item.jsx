
import react from "react";
import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({ product }) => {
    console.log("This is array", product[0].id)
    return (
        <div className="item">
            {product.map(product_display => (
                <Link to={`/product/${product_display.id}`}>
                    <div className="item-cards" key={product_display.id}>
                        <img src={product_display.image} alt="" className="item-image" />
                        <h3 className="font-semibold text-xl">{product_display.name}</h3>
                        <div className="cost flex space-x-2 justify-center">
                            <div className="old_cost font-semibold text-xl">
                                ₹{product_display.new_cost}
                            </div>
                            < div className="new_cost font-semibold text-xl">
                                ₹{product_display.old_cost}
                            </div>

                        </div>
                    </div>
                    // return (      if i dont use the paratheses js will insert a semi colon after the return ....result in undefined

                // );
                </Link>
            ))}
        </div>
    );
}

export default Item;