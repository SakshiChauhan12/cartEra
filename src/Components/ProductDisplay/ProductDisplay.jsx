import React, { useContext } from "react";
import "./ProductDisplay.css"
import StarIcon from "./../Assets/Star_icon/star_icon.png";
import StarDullIcon from "./../Assets/Star_icon/star_dull_icon.png";
import { useActionData } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(ShopContext);
    return ( 
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="product-display-img">
                    <img className="product-display-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarDullIcon} alt="" />
                    <p>(1022)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                    ₹{product.new_cost}
                        
                    </div>
                    <div className="product-display-right-price-new">
                    ₹{product.old_cost}
                
                    </div>
                </div>
                <div className="product-display-right-description">
                    <p>{product.description}</p>
                </div>
                <div className="product-display-right-size">
                    <h3>Select Size</h3>
                    <div className="product-display-right-sizes">
                        <div className="product-display-right-size-item">S</div>
                        <div className="product-display-right-size-item">M</div>
                        <div className="product-display-right-size-item">L</div>
                        <div className="product-display-right-size-item">XL</div>
                        <div className="product-display-right-size-item">XXL</div>
                    </div>
                </div>
                <button onClick={() =>{addToCart(product.id)}} className="product-display-right-add-to-cart-button">Add to Cart</button>
                <div className="product-display-right-category">
                <p className="product-display-right-category-item">
                    <span className="product-display-right-category-item">Category</span> {product.category ? product.category: "Not Available"};
                </p>
                <p className="product-display-right-category-item">
                    <span className="product-display-right-category-item">Brand</span> {product.brand ? product.brand: "Not Available"};
                </p>
                <p className="product-display-right-category-item">
                    <span className="product-display-right-category-item">Code</span> {product.id ? product.id: "Not Available"};
                </p>
                <p className="product-display-right-category-item">
                    <span className="product-display-right-category-item">Availability</span> {product.stock ? "in Stock": "Not Available"};
                </p>
                <p className="product-display-right-category-item">
                    <span className="product-display-right-category-item">Tags</span> {product.tags ? product.tags: "Not Available"};
                </p>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDisplay;