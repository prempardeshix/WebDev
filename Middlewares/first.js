const express = require("express");

const app = express();

app.listen(3000,()=>{console.log("Listening on 3000")});

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyID = req.query.kidneyID;

  if (username != "prem" || password != "prem") {
    res.status(400).json({
      msg: "Pehli Fursat Mai Nikal!",
    });
    return;
  }
  if (kidneyID != 2) {
    res.status(400).json({
      msg: "Saste Nashe...",
    });
    return;
  }

  res.json({ msg: "Party De!" });
});

