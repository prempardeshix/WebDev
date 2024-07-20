const express = require("express");
const app = express();
app.listen(3001, () => {
  console.log("Listening");
});
app.use(express.json());

const zod = require("zod");

function validate(input) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).includes(zod.number()),
  });
  return schema.safeParse(input);
}

app.post("/validate", (req, res) => {
  let response = validate(req.body);
  res.send({ response });
});
