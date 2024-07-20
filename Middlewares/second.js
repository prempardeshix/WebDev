const express = require("express");
const app = express();

const z = require("zod");
const reqSchema = z.array(z.number());

app.listen(3000, () => {
  console.log("Listening at Port 3000");
});

app.use(express.json());

app.post("/xyz", (req, res) => {
  const kidney = req.body.kidney;
  const response = reqSchema.safeParse(kidney);

  //   const count = kidney.length;
  //   res.send("Number of kidney:" + count);
  if(!response.success)
  {
    res.status(411).json({msg:"Kuch to gadbad hai Daya!"})
  }
  else
  {
    res.send("Number of kidney:"+response.data.length)
  }
});

// GLOBAL CATCHES
// error based middleware called ERROR HANDLING MIDDLEWARES
// at the end with four parameter functions
// app.use((err,req,res,next)=>{
//     res.json({"msg":"Kuch to gadbad hai Daya!"})
// })
