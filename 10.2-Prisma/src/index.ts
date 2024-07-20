import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, name: string) {
  const result = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });
  console.log(result);
}

// insertUser("prempardeshi283", "Prem0000", "Prem Pardeshi");

async function getUser(email: string) {
  const result = await prisma.user.findMany({
    where: {
      email,
    },
  });
  console.log(result);
}

getUser("prempardeshi");

async function updateUser(email: string, emailNew: string) {
  const result = await prisma.user.updateMany({
    where: {
      email,
    },
    data: {
      email: emailNew,
    },
  });
  console.log(result);
}
// updateUser("prempardeshi283", "prempardeshi");
