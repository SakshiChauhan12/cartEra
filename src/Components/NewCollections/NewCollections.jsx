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
            <div className="new-collection-item">
                {
                    new_collection.map(item =>{
                       return  <Item  product={item}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default NewCollection;