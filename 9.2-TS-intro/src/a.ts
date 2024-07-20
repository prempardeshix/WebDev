// function logger(x: string) {
//   console.log("Hello", x, "!");
// }
// logger("Prem");

// function sum(a: number, b: number) {
//   return a + b;
// }
// console.log(sum(2, 3));

// function isLegal(age: number) {
//   if (age > 18) return true;
//   return false;
// }
// let x = isLegal(19);
// console.log(x);

// function main(cb: (x: string) => void) {
//   setTimeout(cb, 2000);
// }
// function hi(x: string = "Prem") {
//   console.log("Hello", x, "!");
// }
// main(hi);

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function isLegal(user: User) {
//   if (user.age > 18) return true;
//   else return false;
// }

// console.log(
//   isLegal({
//     firstName: "Prem",
//     lastName: "Pardeshi",
//     age: 20,
//   })
// );

// function maxVal(x: number[]): number {
//   let max: number = x[0];
//   for (let i = 1; i < x.length; i++) {
//     if (max < x[i]) max = x[i];
//   }
//   return max;
// }

// const x: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(maxVal(x));

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const arr: User[] = [
//   { firstName: "Prem", lastName: "Pardeshi", age: 20 },
//   { firstName: "Rahul", lastName: "Mishra", age: 5 },
//   { firstName: "Rushi", lastName: "Somvanshi", age: 80 },
//   { firstName: "Kunal", lastName: "Shenddge", age: 23 },
//   { firstName: "Abhay", lastName: "Sachan", age: 10 },
//   { firstName: "Suraj", lastName: "Patil", age: 69 },
// ];

// const filtered: User[] = arr.filter((user) => user.age > 18);

// console.log(filtered);

// enum Direction {
//   Up,
//   Right,
//   Down,
//   Left,
// }

// function doSomething(keyPressed: Direction) {
//   // do something.
//   console.log(keyPressed);
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// doSomething(Direction.Left);
// doSomething(Direction.Right);

// const express = require("express");
// const app = express();

// type arrType = string | number;

// function main(arr: arrType[]): arrType {
//   return arr[0];
// }

// let arr: number[] = [2, 4, 6, 8, 10];
// let arr: string[] = ["hi", "guys", "this", "is", "prem"];

function main<T>(arr: T[]): T {
  return arr[4];
}

let arr: string[] = ["hi", "guys", "this", "is", "prem"];

let capital = main(arr).toUpperCase();
console.log(capital);
