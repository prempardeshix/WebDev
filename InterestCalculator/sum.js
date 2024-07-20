const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Listening!");
});

app.use(express.json());

/* Debouncing/Throttling

const timerID;
function debouncer()
{
    clearTimeout(timeout);
    timerID = setTimeout(sendCallFunction,1500)
}

*/

app.get("/sum", (req, res) => {
  const p = parseInt(req.query.p);
  const n = parseInt(req.query.n);
  const r = parseInt(req.query.r);
  const interest = (p * n * r) / 100;
  res.send(interest.toString());
});
