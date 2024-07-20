const fs = require("fs");

// running again will over-write existing txt file
// fs.writeFileSync("text.txt", "Hello");

// const result = fs.readFileSync("text.txt", "UTF-8");
// console.log(result);

fs.readFile("text.txt", "UTF-8", (err, data) => {
  console.log(data);
});

fs.appendFileSync("text.txt",`\nHi!(again)`);


 