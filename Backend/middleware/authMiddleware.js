require('dotenv').config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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

module.exports = fetchUser;

