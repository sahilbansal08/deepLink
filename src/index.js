
const express = require('express');
const serverless=require('serverless-http')
const app = express();
const router=express.Router()


app.use('/',express.static('.well-known'));
router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/.netlify/functions/api',router)
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports.handler=serverless(app)
