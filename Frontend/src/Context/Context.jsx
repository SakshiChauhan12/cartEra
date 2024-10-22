import react, { useEffect, useState } from "react"
import { createContext } from "react";
// import AllProduct from "../Components/Assets/AllProduct.jsx"
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    // console.log("Hello cart items");
    let cart = {};
    for (let index = 0; index <= 36+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItem,setCartItem] = useState(getDefaultCart());
    const [AllProduct, setAllProduct] = useState([]);   
    const [isLoggedIn,setIsLoggedIn] = useState(!localStorage.getItem("auth-token"))

    useEffect(() => {
        console.log("inside the useEffect");
        fetch("http://localhost:4000/allproduct").then(res => res.json()).then(data => {
            setAllProduct(data);
        }).catch(error =>{
            console.log(error);
        })
        console.log(localStorage.getItem("auth-token"))
        if(localStorage.getItem("auth-token")){
            console.log("Inside the useEffect using localstorage")
            fetch("http://localhost:4000/getcart",{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "auth-token":localStorage.getItem("auth-token"),
                    "Content-Type": "application/json"
                }
            }).then(res => res.json()).then(data =>setCartItem(data)).catch(error =>{
                console.log("Error fetching cart", error);
            });
        }
    },[])
    console.log(cartItem);
    const addToCart = (itemID) =>{
        setCartItem((prev) =>({...prev, [itemID]: prev[itemID]+1}))// the curly brace help me to treat the prev as the object and without the parathesis js will interpret the curly brace as the function.
        
        
        // setCartItem(prev =>{
        //         const newCart = {...prev};
        //         newCart[itemID] = (newCart[itemID] || 0) +1;
        //         console.log(newCart[itemID]);
        //         return newCart;
        //     });

            console.log(itemID);
            if(localStorage.getItem("auth-token")){
                fetch("http://localhost:4000/addtocart", {
                    method: "POST",
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("auth-token")
                    },
                    body: JSON.stringify({"itemID": itemID})
                }
                ).then(res => res.json()).then(data => console.log(data))
            }

        }
        const removeFromCart = (itemID) =>{
            console.log(itemID);
            setCartItem(prev =>({...prev, [itemID]: 0}))
            if(localStorage.getItem("auth-token")){
                fetch("http://localhost:4000/removefromcart", {
                    method: "POST",
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("auth-token")
                    },
                    body: JSON.stringify({"itemID": itemID})
                }).then(res =>res.json()).then(data =>console.log(data));
            }
            
        }
        const removeOneFromCart = (itemID) =>{
            setCartItem(prev =>({...prev, [itemID]: prev[itemID]-1}));
            if(localStorage.getItem("auth-token")){
                fetch("http://localhost:4000/removefromcart", {
                    method: "POST",
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("auth-token")
                    },
                    body: JSON.stringify({"itemID": itemID})
                }).then(res =>res.json()).then(data =>console.log(data));
            }
        }
    const contextValue = {AllProduct,cartItem, addToCart,removeFromCart, removeOneFromCart, setIsLoggedIn};
    console.log("This is coming from context.js & it is cartItem",cartItem);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;