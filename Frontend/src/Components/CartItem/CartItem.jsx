import React, { useContext } from "react";
import "./CartItem.css"
import { ShopContext } from "../../Context/Context";
import remove_icon from "./../Assets/ShopCart/cart_cross_icon.png"
import { Link } from "react-router-dom";
const CartItem = () => {
    const { AllProduct, cartItem, addToCart, removeFromCart , removeOneFromCart } = useContext(ShopContext);
    const totalCost = () =>{
        let amt = 0;
        AllProduct.map(e =>{
            if(cartItem[e.id] > 0){
                console.log(typeof cartItem[e.id]);
               const product = AllProduct.find((product) => product.id === (e.id))
               amt += (product.old_cost * cartItem[e.id]);
            }
        })
        return amt;
    }
    console.log(totalCost());
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
                                <Link to={`/product/${e.id}`}>
                                <div className="cart-icons">
                                <img src={e.image} alt="" className="cart-icons-product-icon"/>
                                </div>
                                </Link>
                                <p><Link to={`/product/${e.id}`}>{e.name}</Link></p>
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
                return null;

            })}
            <div className="cart-item-down">
                <div className="cart-summary">
                    <div className="cart-summary-item">
                        <span className="label">Subtotal</span>
                        <span className="value">₹{totalCost().toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-item">
                        <span className="label">Shipping</span>
                        <span className="value">FREE</span>
                    </div>
                    <div className="cart-summary-item">
                        <span className="label">Total</span>
                        <span className="value">₹{totalCost().toFixed(2)}</span>
                    </div>
                    <div className="cart-item-down-promocode">
                        <input type="text" placeholder="Promo Code"/>
                        <button>Apply</button>
                    </div>
                    <div className="w-100">
                        <button className="checkout-button mx-auto">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;