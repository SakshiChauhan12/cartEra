const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: false
    },
    category:{
        type:String,
        required: false
    },
    new_cost:{
        type:Number,
        required: false
    },
    old_cost:{
        type:Number,
        required:false
    },
    description:{
        type:String,
        required:false,
        defualt: "This is the description of the product"
    },
    date:{
        type: Date,
        default: Date.now() 
    },
    available:{
        type: Boolean,
        default: true
    }
})
const productObj = mongoose.model("productModel", productSchema, "ProductCollection");

module.exports = productObj;