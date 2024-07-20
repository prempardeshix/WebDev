const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Listening on " + port);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hi!</h1>");
// });

// app.post("/cars", (req, res) => {
//   const { name, brand } = req.body;
//   console.log(name);
//   console.log(brand);
//   res.send("Car posted!");
// });

// app.post("/hi",(req,res)=>{
//   // const {message}=req.body;
//   // console.log(message);
//   console.log(req.body);
//   res.send("Hi-ed");
// })

function square(n) {
  return n * n;
}

app.get("/",(req,res)=>{
  res.send("Go to /square");
})

app.get("/square", (req, res) => {
  const n = req.query.n;
  const ans = square(n);
  console.log(ans);
  res.send("Square of "+n+" is " + ans);
});

// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/newDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((error) => {
//     console.log("Error occured!");
//   });
