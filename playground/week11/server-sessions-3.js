const express = require("express")
const app = express()

const session = require("express-session")
var FileStore = require('session-file-store')(session);


// app.use(
//   session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   })
// );

var fileStoreOptions = {};

app.use(
  session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat'
  }));


app.listen(5000, () => {
  console.log(`The sever is up and running`);
})


// let loggedIn = false ❌ boo! 👻

app.get('/login', (req, res) => {
  req.session.loggedIn = true
  req.session.username = true
  req.session.x = true
  req.session.y = true
  res.send("Thank you for logging in!")
})

app.get('/homePage', (req, res) => {
  if (req.session.loggedIn)
    res.send("Welcome to your Home Page!")
  else
    res.status(401).send("Unauthorized to access this resource!")
})