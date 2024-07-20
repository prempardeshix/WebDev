// function to create a users table in the database

import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://prempardeshi283:QBb9DdE8ZKhN@ep-little-meadow-a5vcluux.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

// async function createUsersTable() {
//   await client.connect();
  // const result = await client.query(`
//   CREATE TABLE users (
//       id SERIAL PRIMARY KEY,
//       username VARCHAR(50) UNIQUE NOT NULL,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//   );
// `);
//   console.log(result);
// await client.end();
// }
// createUsersTable();

// async function insertUser(un: string, em: string, pw: string) {
//   await client.connect();
//   const result = await client.query(
//     `INSERT INTO users (username,email,password)
//     VALUES (${un},${em},${pw})`
//   );
//   console.log(result);
// await client.end();
// }
// insertUser("prempardeshi283", "prempardeshi283@gmail.com", "Prem@2003");

// async function searchUser(usernameToFind: string) {
//   await client.connect();
//   const result = await client.query(`
//   SELECT * FROM users
//   WHERE username=${usernameToFind}`);
//   console.log(result);
// await client.end();
// }
// searchUser("prempardeshi283");

// async function updateUser(usernameToFind:string,newPassword:string) {
//   await client.connect();
//   const result = await client.query(`
//   UPDATE users
//   SET password=${newPassword}
//   WHERE username=${usernameToFind}`);
//   console.log(result);
// await client.end();
// }
// updateUser('prempardeshi283','Prem0000');

async function deleteUser(un: string) {
  await client.connect();
  const result = await client.query(`
  DELETE FROM users
  WHERE username=${un}`);
  console.log(result);
  await client.end();
}
deleteUser("prempardeshi283");
