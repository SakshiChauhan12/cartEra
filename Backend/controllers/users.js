require('dotenv').config();
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const userObj = require("../models/users")

function hashedPassword(passwordForDB){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(passwordForDB,salt);
}

function comparePassword(loginPassword,passwordinDB){
    const isMatch = bcrypt.compareSync(loginPassword,passwordinDB);
    return isMatch;
}
const register = async (req,res) =>{
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
}

const login =async (req, res) => {
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
    }catch(error){
        console.log(error);
    }
  };

  module.exports = {register, login};

