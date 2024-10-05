import React from "react";
import "./AddProduct.css";
import upload_icon from "./../../assets/upload_area.svg"
import { useState } from "react";
const AddProduct = () => {
    const [image, setImage] = useState(false);
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }
    return (
        <div className="add-product">
            <div className="addproduct-item-field">
                <p>Product Title</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here" />
            </div>
            <div className="addproduct-price">
            <div className="addproduct-item-field">
                <p>Price</p>
                <input
                    type="text"
                    name="old_cost"
                    placeholder="Type here" />
            </div>
            <div className="addproduct-item-field">
                <p>Offer Price</p>
                <input
                    type="text"
                    name="new_cost"
                    placeholder="Type here" />
            </div>
            </div>
            <div className="addproduct-item-field">
                <p>Product Category</p>
                <select name="category" className="addproduct-selector" >
                    <option value="select" hidden >Select</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            <div className="addproduct-item-field">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_icon} className="addproduct-thumbnail-img" alt="" />
                </label>
            </div>
            <input type="file" name="image" id="file-input"  onChange={imageHandler} hidden/>
            <button className="addproduct-btn">Add</button>
        </div>
    );
}

export default AddProduct;