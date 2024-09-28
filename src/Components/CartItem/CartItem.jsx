import React, { useContext } from "react";
import "./CartItem.css"
import { ShopContext } from "../../Context/Context";
import remove_icon from "./../Assets/ShopCart/cart_cross_icon.png"
const CartItem = () => {
    const { AllProduct, cartItem, addToCart, removeFromCart , removeOneFromCart } = useContext(ShopContext);
    return (
        <div className="cart-item">
            <div className="cart-item-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {AllProduct.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div>
                            <div className="cart-item-format">
                                <div className="cart-icons">
                                <img src={e.image} alt="" className="cart-icons-product-icon"/>
                                </div>
                                <p>{e.name}</p>
                                <p>₹{e.old_cost}</p>
                                <div className="cart-item-quantity">
                                    <div className="cart-item-quantity-button">
                                       <button className="quantity-buttons" onClick={() => removeOneFromCart(e.id)}>-</button>
                                        <div>{cartItem[e.id]}</div>
                                        <button className="quantity-buttons"onClick={() => addToCart(e.id)}>+</button>
                                    </div>
                                    </div>
                                <p>₹{e.old_cost * cartItem[e.id]}</p>
                                <div>
                                <img src={remove_icon} alt="" onClick = {() =>removeFromCart(e.id)} className="mx-auto"/>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default CartItem;