import new_collection from "../Assets/NewCollections"
import Item from "../Item/Item";
import "./NewCollection.css"
const NewCollection = () => {
    return ( 
        <div className="new-collection">
            <div className="text-4xl text-center text-gray-500">
                <div className="">
                    TRENDS
                </div>
                <hr />
            </div>
            <Item  product={new_collection}/>
        </div>
     );
}
 
export default NewCollection;