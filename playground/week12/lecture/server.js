//1 - connection
const mongoose = require('mongoose');

main().catch(err => console.log(err));


// 2  for the C and U 
const unicornSchema = new mongoose.Schema({
  name: String,
  vampires: Number
});


// 3
const aUnicornModel = mongoose.model('unicorns', unicornSchema);


const express = require("express")
const app = express()

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/w12db');
  await mongoose.connect('mongodb+srv://nabil828:K82MmULsgIlk4lGB@cluster0.lbm8g.mongodb.net/?appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  // start point


  app.get("/unicorns", async (req, res) => {
    const result = await aUnicornModel.find()
    res.json(result)
  })


  app.use(express.json())
  app.post("/unicorns", async (req, res) => {
    console.log(req.body);

    const result = await aUnicornModel.insertOne(req.body)
    console.log(result);

    res.send("All good. that unicorn got inserted!")
  })

  app.listen(5000, () => {
    console.log("All is good");
  })
}


