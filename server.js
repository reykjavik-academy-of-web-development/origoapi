const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authInfo = require('./secret.js');
// const axios = require('axios');
const fetch = require('isomorphic-fetch');
const port = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/post-order', (req, res) => {
    fetch("https://ssb-dev-fep-01.azurewebsites.net/api/Delivery", {
        body: JSON.stringify({

                    "senderOrderID": "2357433",
                    "description": "lysing",
                    "senderId": 18,
                    "numberOfPackages": req.body.numberOfPackages,
                    "pickupAtDeliveryBranch": true,
                    "box": false,
                    "location": "hilla",
                    "recipient": {
                        "email": req.body.email,
                        "phone": req.body.phone,
                        "name": req.body.name
                    }
                }),
        headers: {
            Accept: "application/json",
            Authorization: "Basic dmVmc2tvbGk6Q1l3YzZsNEkyZg==",
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then(res =>
            res.json()
        )
        .then(json =>
            console.log(json)
        )
    // axios({
    //     method: 'post',
    //     url: 'https://ssb-dev-fep-01.azurewebsites.net/api/Delivery',
    //     config:{ headers: {
    //         Accept : "application/json",
    //         Authorization: 'Basic' + Buffer.from(authInfo).toString('base64'),
    //         'Content-type': 'application/json'
    //     }},
    //     data:{

    //         "senderOrderID": "2357433",
    //         "description": "lysing",
    //         "senderId": 18,
    //         "numberOfPackages": 1,
    //         "pickupAtDeliveryBranch": true,
    //         "box": false,
    //         "location": "hilla",
    //         "recipient": {
    //             "email": "eee@eee.is",
    //             "phone": "1234567",
    //             "name": "sigrún"
    //         }

    //     }
    // })
    //     .then((res) =>
    //         console.log(res)
    //     )
})




app.listen(port, () => {
    console.log("listening to port", port)
}); 