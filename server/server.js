const express = require('express');
const eobj = express();
const port = 5200;

const { MongoClient } = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL, { useUnifiedTopology: true });

async function getconnection() {
  await client.connect();
  let db = client.db("MarvellousInfosystems");
  return db.collection("Batches");
}

async function readdata() {
  let data = await getconnection();
  data = await data.find().toArray();
  console.log("Data from the Marvellous Database is:");
  console.log(data);
  return data;
}

eobj.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "http://localhost:4200");
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin for testing, replace with your frontend's origin in production
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function starter() {
  console.log("Marvellous server is in listen mode");
}

eobj.listen(port, starter);

const marvellousbatches = async (req, res) => {
  try {
    const data = await readdata();
    res.json(data);
  } catch (error) {
    console.error("Error while fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

eobj.get('/getbatches', marvellousbatches);

async function main() {
  await getconnection();
  await readdata();
  console.log("Database connected");
}

main();
