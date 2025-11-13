const express = require("express")
const app = express()


app.listen(5000, () => {
  console.log(`The sever is up and running`);
})


// 1
// req, m1, m2, m3(send)
// app.get('/home',
//   (req, res, next) => {
//     res.write("Hi")
//     next()
//   },
//   (req, res, next) => {
//     res.write(", there !")
//     next()
//   },
//   (req, res, next) => {
//     res.send()
//   })

// 2
// m1 = (req, res, next) => {
//   res.write("Hi")
//   next()
// }

// m2 = (req, res, next) => {
//   res.write(", there !")
//   next()
// }

// function m3(req, res, next) {
//   res.send()
// }

// app.get('/home',
//   m1,
//   m2,
//   m3
// )

// 3
// logger = (req, res, next) => {
//   console.log("00000");
//   next()
// }

// m1 = (req, res, next) => {
//   res.write("Hi")
//   next()
// }

// m2 = (req, res, next) => {
//   res.write(", there !")
//   next()
// }

// function m3(req, res, next) {
//   res.send()
// }

// app.get('/home',
//   logger,
//   m1,
//   m2,
//   m3
// )

// app.get('/contactUs',
//   logger,
//   (req, res) => {
//     res.send("You may contact us on asa@gmail.com")
//   }
// )


// 4
logger = (req, res, next) => {
  console.log("00000");
  next()
}

m1 = (req, res, next) => {
  res.write("Hi")
  next() // boo!
}

m2 = (req, res, next) => {
  res.write(", there !")
  next() // boo!
}

function m3(req, res, next) {
  res.send()
}

app.get('/',
  m1,
  m2,
  m3
)

app.use(logger) // this is a global middleware

app.get('/home',
  m1,
  m2,
  m3
)

app.get('/contactUs',
  (req, res) => {
    res.send("You may contact us on asa@gmail.com")
  }
)

