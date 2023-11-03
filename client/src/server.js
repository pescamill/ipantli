
require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://pescamil:${process.env.MONGO_PASSWORD}@cluster0.0ujvaye.mongodb.net/?retryWrites=true&w=majority`; // Replace with your connection string
const app = express();
const PORT = 5000;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

client.connect(err => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
