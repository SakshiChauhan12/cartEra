const productObj = require('../models/products');

const addProduct = async (req,res) =>{
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
}

const removeProduct = async(req,res) =>{
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
}

const getAllProducts = async (req,res) =>{
    try{
        const products = await productObj.find({});
        console.log("All product fetch",products);
        res.status(200).json(products);

    }catch(error){
        console.log(error);
    }
}

const newCollection = async (req, res) => {
    let products = await productObj.find({});
    let shuffledProducts = products;

    shuffledProducts.sort(() => 0.5 - Math.random());
    
    let newcollection = shuffledProducts.slice(0,8);
    console.log("New Collection fetched");
    res.send(newcollection);
  }

  const trendingWomen = async (req, res) => {
    let products = await productObj.find({ category: "women" });
    let trending_in_women = products.slice(0, 4);
    console.log("Trending in women fetched");
    res.send(trending_in_women);
  }

  const trendingMen =  async (req, res) => {
    let products = await productObj.find({ category: "men" });
    let trending_in_men = products.slice(-4);
    console.log("Trending in men fetched");
    res.send(trending_in_men);
  }

  const trendingKid = async (req, res) => {
    try{

        let products = await productObj.find({ category: "kids" });
        let trending_in_kid = products.slice(-4);
        console.log("Trending in kid fetched");
        console.log(trending_in_kid);
        res.send(trending_in_kid);
    }catch(error){
        console.log(error);
    }
    }

module.exports = {
    addProduct,
    removeProduct,
    getAllProducts,
    trendingWomen,
    trendingMen,
    trendingKid,
    newCollection
}

