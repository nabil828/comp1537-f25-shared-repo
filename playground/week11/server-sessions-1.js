const express = require("express")
const app = express()


app.listen(5000, () => {
  console.log(`The sever is up and running`);
})


let loggedIn = false

app.get('/login', (req, res) => {
  loggedIn = true
  res.send("Thank you for logging in!")
})

app.get('/homePage', (req, res) => {
  if (loggedIn)
    res.send("Welcome to your Home Page!")
  else
    res.status(401).send("Unauthorized to access this resource!")
})