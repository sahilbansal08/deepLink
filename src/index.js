// const express = require("express");
// const mongoose=require('mongoose')
// const app = express();
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// mongoose.connect('mongodb+srv://sahilbansal:jsU1WOEHNhf0b3op@cluster0.mhmg0hh.mongodb.net/RestApi').then(()=>{
//       console.log("connected sucessfully")
// })
// const products = require("./products.route");
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use("/", products);

// app.use((req, res) => {
//   res.status(404);
//   res.send({
//     error: "not found",
//   });
//   res.end();
// });

// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });
const express = require('express');
const serverless=require('serverless-http')
const app = express();
const router=express.Router()


app.use('/',express.static('.well-known'));
router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports.handler=serverless(app)
