import { useEffect } from "react";
import new_collection from "../Assets/NewCollections"
import Item from "../Item/Item";
import "./NewCollection.css"
import { useState } from "react";
import { REACT_APP_BACKEND_URL } from "../../utils";
const NewCollection = () => {
    const [newCollection, setNewCollection] = useState([]);
    useEffect(() => {   
        fetch(`${REACT_APP_BACKEND_URL}/product/newcollection`).then(res => res.json()).then(data => {
            setNewCollection(data);
        })
    },[]);
    return ( 
        <div className="new-collection">
            <div className="text-4xl text-center text-gray-500">
                <div className="">
                    TRENDING COLLECTIONS
                </div>
                <hr />
            </div>
            <div className="new-collection-item">
                {
                    newCollection.map(item =>{
                       return  <Item  product={item}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default NewCollection;