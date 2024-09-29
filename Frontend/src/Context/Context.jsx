import react, { useState } from "react"
import { createContext } from "react";
import AllProduct from "../Components/Assets/AllProduct.jsx"
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    console.log("Hello cart items");
    let cart = {};
    for (let index = 0; index <= AllProduct.length; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItem,setCartItem] = useState(getDefaultCart());
    // console.log(cartItem);
    const addToCart = (itemID) =>{
        setCartItem((prev) =>({...prev, [itemID]: prev[itemID]+1}))// the curly brace help me to treat the prev as the object and without the parathesis js will interpret the curly brace as the function.
        
        
        // setCartItem(prev =>{
        //         const newCart = {...prev};
        //         newCart[itemID] = (newCart[itemID] || 0) +1;
        //         console.log(newCart[itemID]);
        //         return newCart;
        //     });

            console.log(itemID);

        }
        const removeFromCart = (itemID) =>{
            setCartItem(prev =>({...prev, [itemID]: 0}))
        }
        const removeOneFromCart = (itemID) =>{
            setCartItem(prev =>({...prev, [itemID]: prev[itemID]-1}))
        }
    const contextValue = {AllProduct,cartItem, addToCart,removeFromCart, removeOneFromCart};
    console.log(cartItem);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;