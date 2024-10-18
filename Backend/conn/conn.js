const mongoose = require('mongoose');
require("dotenv").config();
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const SMART_DB = process.env.SMART_DB;
console.log(USER_NAME,PASSWORD,SMART_DB);
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.9qazn.mongodb.net/${SMART_DB}`);
        console.log("Database connected");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
};

module.exports = connectDB;