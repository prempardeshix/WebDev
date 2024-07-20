const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

const users = [
  { name: "John", kidneys: [{ healthy: false }, { healthy: true }] },
];

app.listen(3000, () => {
  console.log("Listening on 3000");
});

app.get("/", (req, res) => {
  const numOfKidneys = users[0].kidneys.length;
  //   res.send("Number of kidneys is " + numOfKidneys);
  let numOfHealthy = 0;
  for (let i = 0; i < numOfKidneys; i++) {
    if (users[0].kidneys[i].healthy) numOfHealthy++;
  }
  const numOfUnhealthy = numOfKidneys - numOfHealthy;
  res.json({
    numOfKidneys,
    numOfHealthy,
    numOfUnhealthy,
  });
});

app.post("/", (req, res) => {
  const flag = req.body.flag;
  users[0].kidneys.push({ healthy: flag });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
    let counter=0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if(users[0].kidneys[i].healthy)
    counter++;
    users[0].kidneys[i].healthy = true;
  }
  if(counter==users[0].kidneys.length)
  {
    res.status(411).json({ msg: "No Unhealthy Kidneys" });
  }
  else
  {
    res.json({ msg: "updated" });
  }
});

app.delete("/", (req, res) => {
  const arr = [];
  let counter=0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      counter++;
      arr.push({ healthy: true });
    }
  }
  if(counter==users[0].kidneys.length)
  {
    res.json({ msg: "No Unhealthy Kidneys" });
  }
  else
  {
    users[0].kidneys = arr;
    res.status(411).json({ msg: "Deleted" });
  }
});
