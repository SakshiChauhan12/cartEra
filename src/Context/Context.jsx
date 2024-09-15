import react from "react"
import { createContext } from "react";
import AllProduct from "../Components/Assets/AllProduct.jsx"
export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {AllProduct}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;