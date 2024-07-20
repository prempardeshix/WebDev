import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
//   email: string
// ) {
//   const user = await prisma.users.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//       email,
//     },
//   });
//   console.log(user);
// }

// insertUser("prem3", "prem3", "prem3", "pardeshi3", "Prem@3");

// async function insertTodos(
//   title: string,
//   description: string,
//   completed: boolean,
//   userId: number
// ) {
//   const todo = await prisma.todos.create({
//     data: {
//       title,
//       description,
//       completed,
//       userId,
//     },
//   });
//   console.log(todo);
// }

// insertTodos("gym", "workout", false, 3);

async function getTodos(userId: number) {
  const todos = await prisma.todos.findMany({
    where: { userId },
    select: {
      user: {
        select: {
          username: true,
        },
      },
      title: true,
      completed: true,
    },
  });
  console.log(todos);
}

getTodos(3);
