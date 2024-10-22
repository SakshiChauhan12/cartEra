const express = require('express');
const router = express.Router();
const productObj = require('./models/product'); // Make sure to require your Product model

const updateImageUrls = async (req, res) => {
  try {
    const products = await productObj.find({});
    for (const product of products) {
      if (product.image && product.image.startsWith("http://localhost:4000/images/")) {
        const newImageUrl = product.image.replace("http://localhost:4000/images/", "https://urbanstyling.onrender.com/images/");
        product.image = newImageUrl;
        await product.save();
      }
    }
    res.send("Image URLs updated successfully.");
  } catch (error) {
    res.status(500).send("Error updating image URLs: " + error);
  }
};

// Define the admin route to update image URLs
router.post('/admin/update-image-urls', updateImageUrls);

module.exports = router;
