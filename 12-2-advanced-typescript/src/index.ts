// const a: number = 10;

// function square(a: number): number {
//   return a * a;
// }

// console.log(square(a));

// interface User {
//   age: number;
//   name: string;
// }

// function sum(a: User, b: User): number {
//   return a.age + b.age;
// }

// let a: number = sum(
//   {
//     name: "prem",
//     age: 20,
//   },
//   {
//     name: "rahul",
//     age: 20,
//   }
// );

// console.log(a);

// pick and partial

// interface User {
//   username: string;
//   age: number;
//   password: string;
//   id: number;
//   email: string;
// }

// type props = Pick<User, "username" | "password" | "age">;
// type optionalProps = Partial<props>;

// function showUser(prop: optionalProps) {
//   console.log(` Age is ${prop.age}
//   Userame is ${prop.username}
//   Password is ${prop.password}`);
// }

// showUser({
//   age: 20,
//   //   username: "Prem",
//   password: "lol",
// });

//  readonly

// type User = {
//   readonly name: string;
//   readonly age: number;
//   readonly password: string;
// };

// const user: User = {
//   name: "prem",
//   age: 20,
//   password: "lol",
// };

// user.age = 69;

// record

// type User = {
//   name: string;
//   age: number;
// };

// // *do not use this*  // type Users = { [key: string]: User  };
// type Users = Record<string, User>;

// const users: Users = {
//   first: { name: "prem", age: 20 },
//   second: { name: "rahul", age: 20 },
// };

// Map

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user = new Map<string, User>();

// user.set("first", { name: "Prem", age: 20, email: "prempardeshi283" });
// user.set("second", { name: "Raju", age: 69, email: "karjatkasara69" });

// console.log(user.get("second"));

//  Exclude

// type EventType = "click" | "scroll" | "mousemove";
// type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent("mousemove");
