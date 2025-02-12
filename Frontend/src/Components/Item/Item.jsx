
import react from "react";
import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({ product }) => {
    return (
        <div className="item">
                <Link to={`/product/${product.id}`}>
                    <div className="item-cards p-2 md:p-4" key={product.id}>
                        <img onClick={window.scrollTo(0,0)} src={product.image} alt="" className="item-image mb-2 md:mb-4" />
                        <h3 className="font-semibold text-xs md:text-lg">{product.name}</h3>
                        <div className="cost flex space-x-2 justify-center">
                            <div className="old_cost font-semibold text-xs md:text-lg">
                                ₹{product.old_cost}
                            </div>
                            < div className="new_cost font-semibold text-xs md:text-lg">
                                ₹{product.new_cost}
                            </div>

                        </div>
                    </div>
                </Link>
        </div>
    );
}

export default Item;