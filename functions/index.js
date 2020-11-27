const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Houp9JH02wEGVYc0FIrB7xYB7IJernyY7MKVy1R3IMqvhhCWhoORGcx09sXimIzqrsybkwdX8Mf4A48rr3vQ1xf00RtT7tcv1');

const app = express();

app.use(cors({origin:true})) ;
app.use(express.json());

app.get('/',(req,res) => res.status(200).send('helloworld'))

app.post('/payments/create', async (req,res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'gbp',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);