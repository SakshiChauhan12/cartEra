import React from "react";
import "./AddProduct.css";
import upload_icon from "./../../assets/upload_area.svg"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const AddProduct = () => {
    const [image, setImage] = useState(false);
    const navigate  = useNavigate();
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_cost:"",
        old_cost:"",
    })
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    const productHandler = (e) =>{
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }
    const addProduct = () =>{
        let product = productDetails;
        let responseData={} ;
        let formData =  new FormData(); // it is the object help in manage the form to uplaod the image
        formData.append("productImage", image); // this is the postman productImage amd its value image... that we are share to backend.
        fetch("https://urbanstyling.onrender.com/upload", {
            method: "POST",
            headers:{
                "Accept": "application/json",  // accept means we are expecting to get json data from the server
            }, 
            body: formData
        }).then(res =>{
            if(res.ok){
                return res.json();
            }else{
                throw new Error("File to upload the image");
            }
        }).then(data =>{
            responseData = data;
            product.image = responseData.image_url;
            if(responseData.success){
                console.log(responseData);
                return fetch("https://urbanstyling.onrender.com/addproduct", {
                    method: "POST",
                    headers:{
                        "Accept": "application/json",
                        "Content-Type":  "application/json"
                    },
                    body: JSON.stringify(product)
                })
            }
            else {
                throw new Error("Failed to upload image");
            }
        }).then(res =>{
            if(res.ok){
                return res.json();
            }else{
                throw new Error("Product is not added");
            }
        }).then(data =>{
            if(data.success){
                // navigate("/listproduct");
                window.location.reload();
                alert("Product added successfully");
            }
            else{
                alert("Product is not added");
            }
        }).catch(error =>{
            console.log("There is the error", error);
        })
        setProductDetails({
            // name: "",
            // image: "",
            // category: "women",
            // new_cost:"",
            // old_cost:"",
        })
    }
    return (
        <div className="add-product">
            <div className="add-product-form">

            <div className="addproduct-item-field">
                <p>Product Title</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here" 
                    value={productDetails.name}
                    onChange={productHandler}/>
            </div>
            <div className="addproduct-price">
            <div className="addproduct-item-field">
                <p>Price</p>
                <input
                    type="text"
                    name="old_cost"
                    placeholder="Type here"
                    value={productDetails.old_cost} 
                    onChange={productHandler}/>
            </div>
            <div className="addproduct-item-field">
                <p>Offer Price</p>
                <input
                    type="text"
                    name="new_cost"
                    placeholder="Type here"
                    value={productDetails.new_cost} 
                    onChange={productHandler}/>
            </div>
            </div>
            <div className="addproduct-item-field">
                <p>Product Category</p>
                <select name="category" className="addproduct-selector"
                value={productDetails.category}
                onChange={productHandler} >
                    <option value="select" disabled selected>Select</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            <div className="addproduct-item-field">
                <label htmlFor="file-input" className="bg-pink-700 w-1" >
                    <img src={image?URL.createObjectURL(image):upload_icon} className="addproduct-thumbnail-img" alt="" />
                </label>
            </div>
            <input type="file" name="image" id="file-input"  onChange={imageHandler} hidden/>
            <button className="addproduct-btn" onClick={addProduct}>Add</button>
            </div>
        </div>
    );
}

export default AddProduct;