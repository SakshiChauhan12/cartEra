const express = require('express');
const router = express.Router();
const { addProduct, removeProduct, getAllProducts, trendingWomen, trendingMen, trendingKid, newCollection } = require("../controllers/products");

router.post("/addproduct", addProduct); 

router.post("/removeproduct", removeProduct);

router.get("/allproduct", getAllProducts)

router.get("/newcollection", newCollection);

router.get("/trendingwomen", trendingWomen);

router.get("/trendingmen", trendingMen);

router.get("/trendingkid", trendingKid);

module.exports = router;



