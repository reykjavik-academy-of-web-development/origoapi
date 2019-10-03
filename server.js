const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authInfo = require('./secret.js');
const axios = require('axios');
const port = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/post-order', (req, res) => {
    axios.post('https://ssb-dev-fep-01.azurewebsites.net/api/Delivery', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic' + Buffer.from(authInfo).toString('base64')
        },
        body: {

            "senderOrderID": "234567",
            "description": "lysing",
            "senderId": 18,
            "numberOfPackages": 1,
            "pickupAtDeliveryBranch": true,
            "box": false,
            "location": "hilla",
            "recipient": {
                "email": "eee@eee.is",
                "phone": "1234567",
                "name": "sigrún"
            }

        }
    })
        .then((res) =>
            console.log(res)
        )
})




app.listen(port, () => {
    console.log("listening to port", port)
}); 