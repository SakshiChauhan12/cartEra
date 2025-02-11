const port = 4000;
const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const bcrypt = require("bcrypt");
const { randomInt } = require("crypto");
const fetchUser = require("./middleware/authMiddleware");
const PORT = process.env.PORT || 4000;
require('./connection');
dotenv = require('dotenv');
dotenv.config();





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
            image_url:`http://localhost:4000/images/${req.file.filename}`
        })
    }
    catch(error){
        console.log(error);
    }
})

app.post("/contact", async (req,res) =>{
    try{
        res.json({
            success: true,
            message: "Contact page added correctly"
          });
    }catch(error){
        res.json({
            success: false,
            error: "There is the error"
          });
    }
})

const userRoutes = require("./routes/users.js");
const productRoutes = require("./routes/products.js");
const cartRoutes = require("./routes/cart.js");



app.use('/product', productRoutes);
app.use('/user', userRoutes);


app.use(fetchUser);


app.use('/cart', cartRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});