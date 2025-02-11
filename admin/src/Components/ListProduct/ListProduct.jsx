import React from "react";
import "./ListProduct.css"
import cross_icon from "./../../assets/cross_icon.png";
import {useState, useEffect} from "react";
import {REACT_APP_BACKEND_URL} from "../../utils"
const ListProduct = () => {
    const [allProduct,setAllProduct] = useState([]);
    const fetchInfo = async () =>{
        await fetch (`${REACT_APP_BACKEND_URL}/product/allproduct`)
        .then(res => res.json())
        .then((data) =>{setAllProduct(data)});
    }
    useEffect(() =>{
        fetchInfo();
    }, []);

    const removeProduct = async (id) =>{
        await fetch(`${REACT_APP_BACKEND_URL}/product/removeproduct`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo()
    }
    return ( 
        <div className="list-product bg-slate-50">
            {/* <div className="bg-white"> */}
           <h1>All product List</h1>
           <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>New Price </p>
            <p>Old Price</p>
            <p>Category</p>
            <p className="mx-auto">Remove</p>
           </div>
           <div className="listproduct-allproduct">
            <hr />
            {allProduct.map((product, index) =>{

                return <>
                 <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p> ₹{product.new_cost}</p>
                        <p> ₹{product.old_cost}</p>
                        <p>{product.category}</p>
                        <div className="mx-auto">

                        <img onClick={() =>removeProduct(product.id)} className="listProduct-remove-icon" src={cross_icon} alt="" />
                        </div>
                        
                    </div>
                    <hr className="font-bold" />
                    </>
                
            })}
           </div>

            {/* </div> */}
        </div>
     );
}
 
export default ListProduct;