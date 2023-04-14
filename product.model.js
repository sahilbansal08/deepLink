const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: String,
    require:true
  },
  
});

const product =mongoose.model('product',productSchema);
module.exports=product;