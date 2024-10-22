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
// const routes = require("./routes.js");
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
        console.log("Failed to connect",error);
    })



// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');

       

//         // Update function
//         const updateImageUrls = async () => {
//             try {
//                 // Find all products
//                 const products = await productObj.find({});
//                 console.log(`Found ${products.length} products to update.`);

//                 // Loop through each product and update the image URL
//                 for (const product of products) {
//                     if (product.image.startsWith("http://localhost:4000/images/")) {
//                         // Replace the URL
//                         const newImageUrl = product.image.replace( "https://urbanstyling.onrender.com/images/","http://localhost:4000/images/");
//                         product.image = newImageUrl;
//                         await product.save(); // Save the updated product
//                         console.log(`Updated product ${product.id}: ${newImageUrl}`);
//                     }
//                 }

//                 console.log("All image URLs updated successfully.");
//             } catch (error) {
//                 console.error("Error updating image URLs:", error);
//             } finally {
//                 // Close the connection
//                 mongoose.connection.close();
//             }
//         };

//         // Call the update function
//         updateImageUrls();
//     })
//     .catch(err => {
//         console.error("MongoDB connection error:", err);
//     });

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
            success: true,
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
    try{
        const products = await productObj.find({});
        console.log("All product fetch",products);
        res.status(200).json(products);

    }catch(error){
        console.log(error);
    }
})
//Schema creteing for user model.

const userSchema = new Schema({
    name :{
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true, 
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }

})
const userObj = mongoose.model("userModel", userSchema, "userCollection");


// hashed the password before saving in mongoDB.
function hashedPassword(passwordForDB){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(passwordForDB,salt);
}

function comparePassword(loginPassword,passwordinDB){
    const isMatch = bcrypt.compareSync(loginPassword,passwordinDB);
    return isMatch;
}
//Creating Endpoint for registering the user
app.post("/register", async (req,res) =>{
    // let username = req.body.username;
    // let password = req.body.password;
    // password = hashedPassword(password);
    // let email = req.body.email;
    // let obj = {email,username,password};
    // console.log(obj);
    // userObj.create(obj)
    // .then(user =>{
    //     console.log("User is created succesfully");
    //     res.status(200).json({message:"Created succesfully"});
    // }).catch(error =>{
    //     console.log(error);
    //     console.log("User is already existed");
    //     res.json({message: "User is already existed"});
    // })
    console.log("hello");
    try{
        let check = await userObj.findOne({email: req.body.email});
        if(check){
            return res.status(200).json({success: false, error : "User already exists"});
        }
        let cart={};
        for (let i = 0; i < 36; i++) {
            cart[i] =0;
            
        }
        let password = req.body.password;
        password = hashedPassword(password);
        const user =  new userObj({
            name: req.body.name,
            email: req.body.email,
            password: password,
            cartData: cart,
        });
        await user.save();
    
        const data = {
            user: {
                id: user.id,
            }
        }
        const token = jwt.sign(data, "urban_styling_token");
        res.json({success: true, token: token})

    }
    catch(err){
        console.log("There is the error", err);
    }
})
app.post("/login", async (req, res) => {
    try{
        let user = await userObj.findOne({ email: req.body.email });
        if (user) {
          if (comparePassword(req.body.password,user.password)) {
            const data = {
              user: {
                id: user.id,
              },
            };
            const token = jwt.sign(data, "urban_styling_token");
            res.json({
              success: true,
              token,
            });
          } else {
            return res.status(400).json({
              success: false,
              error: "Invalid password",
            });
          }
        } else {
          return res.status(400).json({
            success: false,
            error: "Email not exist. Please signup!!",
          });
        }
    }catch{
        console.log(error);
    }
  });

//creating endpoint for the contact page
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
  //creating api for newCollection data
  app.get("/newcollection", async (req, res) => {
    let products = await productObj.find({});
    let shuffledProducts = products;

    shuffledProducts.sort(() => 0.5 - Math.random());
    
    let newcollection = shuffledProducts.slice(0,8);
    console.log("New Collection fetched");
    res.send(newcollection);
  });

  //creating api for trending data
  app.get("/trendingwomen", async (req, res) => {
    let products = await productObj.find({ category: "women" });
    let trending_in_women = products.slice(0, 4);
    console.log("Trending in women fetched");
    res.send(trending_in_women);
  });
  app.get("/trendingmen", async (req, res) => {
    let products = await productObj.find({ category: "men" });
    let trending_in_men = products.slice(-4);
    console.log("Trending in men fetched");
    res.send(trending_in_men);
  });
  app.get("/trendingkid", async (req, res) => {
    try{

        let products = await productObj.find({ category: "kids" });
        let trending_in_kid = products.slice(-4);
        console.log("Trending in kid fetched");
        console.log(trending_in_kid);
        res.send(trending_in_kid);
    }catch(error){
        console.log(error);
    }
  });
  // creating middleware to fetch user
  const fetchUser = async(req, res, next) =>{
    const token =req.header("auth-token");
    console.log(token);
    if(!token){
        res.status(401).send({error: "please authicate by valid token"})
    }else{
        try {
            console.log("Inside try block");
            const data = jwt.verify(token, "urban_styling_token");
            console.log(data);
            req.user = data.user;
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({error: "please check the token"});
        }
    }
  }
  //creating endpoint for adding products in cartdata
  app.post("/addtocart", fetchUser,async (req, res) => {
    console.log(req.body.itemID);
    let userData = await userObj.findOne({_id: req.user.id});
    console.log(userData);
    userData.cartData[req.body.itemID] +=1;
    await userObj.findOneAndUpdate({_id: req.user.id},{cartData:userData.cartData},{new:true}).then(res =>{
        if(res){
            console.log("Added");

        }
        else{
            throw new Error("Cartdata is not updated");
        }
    }).catch(error =>{
        console.log(error);
    });

  });
 
  //creating endpoint for remove product from cartData.
  
  app.post("/removefromcart", fetchUser, async(req,res) =>{
    console.log(req.body.itemID);
    let userData =await  userObj.findOne({_id: req.user.id});
    console.log(userData);
    userData.cartData[req.body.itemID] = 0;
    await userObj.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData},{bew:true}).then(res =>{
        if(res){
            console.log("Remove");
        }
        else{
            throw new Error("Cartdata is not updated");
        }
    }).catch(error =>{
        console.log(error);
    })
  })

  // creating endpoint for remove one quantity from the cart.
  app.post("/removeonefromcart", fetchUser, async(req,res) =>{
    console.log(req.body,req.user);
    let userData = await userObj.findOne({_id: req.user.id});
    userData.cartData[req.body.itemID] -= 1;
    await userObj.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData}<{new:true}).then(res =>{
        if(res){
            console.log("Remove");
        }
        else{
            throw new Error("Cartdata is not updated");
        }
    }).catch(error =>{
        console.log(error);
    });

  })

  //creating 
  app.get("/getcart", fetchUser, async (req,res) =>{
    try{
        console.log("GetCart");
        let userData = await userObj.findOne({_id: req.user.id});
        console.log(req.user.id);
        res.json(userData.cartData);

    }
    catch(error){
        console.log(error);
    }
  })
app.listen(port, (error) =>{
    if(!error){
        console.log("Server runnning at port", port);
    }
    else{
        console.log("Server is not connected", error);
    }
})

// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const connectDB = require('./conn/conn.js');
// const productRoutes = require('./routes/productRoutes');
// const userRoutes = require('./routes/userRoutes');
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 4000;

// // Connect to database
// connectDB();

// // Middleware
// // app.use(express.json());
// // app.use(cors());
// // app.use(morgan('dev'));

// // // Routes
// // app.use('/api/products', productRoutes);
// // app.use('/api/users', userRoutes);

// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });
