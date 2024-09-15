import react from "react"
import { createContext } from "react";
import { useState } from "react";
export const MenuContext = createContext(null);

const MenuContextProvider = (props) => {
    const [menu,setMenu] = useState("");
    return ( 
        <MenuContext.Provider value = {{menu, setMenu}}>
            {props.children}
        </MenuContext.Provider>
     );
}
 
export default MenuContextProvider;