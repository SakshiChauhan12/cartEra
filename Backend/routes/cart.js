const express = require('express');
const router = express.Router();
const fetchUser = require("./../middleware/authMiddleware")
const { addToCart, removefromcart, removeonefromcart, getCart }= require("../controllers/cart");


router.use(fetchUser);
router.post("/addtocart", addToCart);


router.post("/removefromcart",  removefromcart);

router.post("/removeonefromcart",  removeonefromcart);

router.get("/getcart",  getCart);

module.exports = router;