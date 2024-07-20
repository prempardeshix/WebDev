// arr of strings
const zod = require("zod");
function validate1(arr) {
  const schema = zod.array(zod.string());
  const response = schema.safeParse(arr);
  console.log({ response });
}
// validate1([1, "r", "e", "m"]);

//required schema=>
// {
//     email = string = email format
//     password = minimum 8 letters
// }

function validate2(input2) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(input2);
  console.log(response);
}

let input2 = {
  email: "prempardeshi283 ",
  password: "Prem0000",
};

validate2(input2);
