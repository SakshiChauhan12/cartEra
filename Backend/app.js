const port = 4000;
const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
// require("./conn/conn.js");

//Database connection with mongoDB
const USER_NAME = "anshkg";
const PASSWORD = "kg7983";
const SMART_DB = "EcommerceDB"
const DB_URL = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.9qazn.mongodb.net/${SMART_DB}`;
mongoose.connect(DB_URL)
    .then((result) =>{
        console.log("Connected to database");
    })
    .catch(error=>{
        console.log("Failed to connect",err);
    })

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//API Creation 
app.get("/", (req,res) =>{
    res.send("Express App is running");
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination : "./upload/images",   // destination of uploaded file
    filename :  (req, file, callback) =>{
        return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }    //name of the file 
})

const upload = multer({storage: storage}); // here we use the multer to create the file.

//Creating upload endpoint for images
app.use("/images", express.static("upload/images")) // express.static to look the file in the upload/images

app.post("/upload", upload.single("productImage"), (req,res)=>{
    try{
        res.json({
            success: 1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        })
    }
    catch(error){
        console.log(error);
    }
})

//Schema for creating product
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
        required:false
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
app.post("/addproduct", async (req,res) =>{
    try{
        const products = await productObj.find({}); // this will return all the product in th collection.
        console.log(products);
        if(products.length <= 0){
            id=1;
        }else{
            const length = products.length;
            const last_product = products[length-1];
            id = last_product.id+1;
            console.log(last_product)
            console.log(id);
        }
        const {name, image, category, new_cost, old_cost} = req.body;
        const product = new productObj({id,name,image , category, new_cost,old_cost});
        console.log(product);
        await product.save();
        console.log("Saved");
        res.json({
            succes: true,
            name: req.body.name,
        })

    }
    catch(err){
        console.log("The error occured",err);
    }
})
// creating the api for deleting product
app.post("/removeproduct", async(req,res) =>{
    try{
        console.log(req.body.id);
        await productObj.findOneAndDelete({id:req.body.id});
        console.log("removed");
        res.json({
            success: true,
            name: req.body.name
        })
    }
    catch(error){
        console.log(error);
    }
})
// creating api for getting all product
app.get("/allproduct", async (req,res) =>{
    const products = await productObj.find({});
    console.log("All product fetch");
    res.send(products);
})
app.listen(port, (error) =>{
    if(!error){
        console.log("Server runnning at port", port);
    }
    else{
        console.log("Server is not connected", error);
    }
})
