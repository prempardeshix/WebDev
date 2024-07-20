let arr = [
  { name: "prem", age: "20" },
  { name: "rahul", age: "20" },
];

function addData() {
  arr.push({ name: "x", age: "19" });
}

function printer() {
  for (let i = 0; i < arr.length; i++) console.log(`\n${arr[i].name}`);
}

function printData() {
  setTimeout(printer, 2000);
}
  
function createData() {
    setTimeout(addData, 5000);
}

// createData()
// printData();

async function start()
{
    await createData();
    printData();
}

start();