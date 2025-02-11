const userObj = require('../models/users');
const addToCart = async (req, res) => {
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

  }

  const removefromcart = async(req,res) =>{
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
  }

  const removeonefromcart = async(req,res) =>{
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

  }

  const getCart = async (req,res) =>{
    try{
        console.log("GetCart");
        let userData = await userObj.findOne({_id: req.user.id});
        console.log(req.user.id);
        res.json(userData.cartData);

    }
    catch(error){
        console.log(error);
    }
  }

  module.exports = {addToCart, removefromcart, removeonefromcart, getCart};