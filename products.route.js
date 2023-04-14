const express = require("express");
const router = express.Router();
const Product = require("./product.model");

router.get("/", async (req, res, next) => {
  res.set('Content-Type', 'application/json');

  // const products = await Product.find();
  res.send('./.well-known/assetlinks.json');
});
router.delete("/:id", async (req, res, next) => {
  const products = await Product.findByIdAndDelete(req?.params?.id);
  res.send(products);
});

router.get("/:id", async (req, res, next) => {
  try {
    const products = await Product.findById({ _id: req?.params?.id });
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", (req, res, next) => {
  const product = new Product({
    name: req.body.name,
  });
  console.log(req.body)
  product.save();
  res.send("post request created");
});

module.exports = router;
