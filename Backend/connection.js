dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
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