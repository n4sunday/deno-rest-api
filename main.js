import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import { APP_HOST, APP_PORT } from "./config.js"
import routerUser from "./users/users.controller.js"

export const addUser = async ({ request, response }) => {
  const body = await request.body();
  const { name } = body.value;
  let result = await client.execute(`INSERT INTO users(name) values(?)`, [
    name,
  ]);
  console.log(result);
  if (result) {
    response.status = 200;
    response.body = { message: "add success" };
  }
};

const app = new Application();

app.use(routerUser.routes());

console.log(`Listening on port ${APP_PORT}...`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
