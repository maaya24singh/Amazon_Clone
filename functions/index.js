const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51LYw5PSBUltkCUcXSYnTPwZFuFqmLHgVgOCO5dTJQqPXBk7tWeehoM1k6YCLmhWpc3y7K8wW6WWAyuAriqUXHMQP002iulBfXE')

//api

//app config-
const app = express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('heyy!!'))
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log("received payment", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/eclone-f57ba/us-central1/api
