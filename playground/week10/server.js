const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})


// app.get('/home', (req, res) => {
//   res.send("Hi there. This is my first backend!")
// })

app.get('/home2', (req, res) => {
  res.send("2222")
})

app.post("/data", (req, res) =>
  res.send("POST request received")
);

app.put("/update/:id/:locale", (req, res) => {
  console.log(req.params);
  res.send(`PUT request received ${req.params.id}`)
})

app.delete(
  '/delete/:id',
  (req, res) => {
    res.send(`DEL request received ${req.params.id}`)
  }
)


app.get(
  '/pokemons',
  (req, res) => {
    console.log(req.query);
    let x = req.query
    res.send(`The pokemon you have requests is ${JSON.stringify(x)}`)
  }
)


app.use(express.json())
app.use(express.urlencoded())
app.post(
  '/signUp',
  (req, res) => {
    console.log(req.body);
    res.send("All good. You have signed up!")
  }
)



app.set("view engine", "ejs");

app.get('/home/:uName', (req, res) => {
  // res.render("index.ejs", {
  //   "username": req.params.uName,
  //   "lang": "fr"
  // })
  res.json({
    x: 111,
    y: ['apple', 'banana']
  })
})
