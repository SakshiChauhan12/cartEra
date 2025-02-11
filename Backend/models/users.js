const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
module.exports = userObj;