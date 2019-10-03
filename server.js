const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authInfo = require('../secret.js');
const axios = require('axios');
const port = 3001;
const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 





app.listen(port, ()=>{
    console.log("listening to port", port)
}); 