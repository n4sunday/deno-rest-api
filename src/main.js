import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import { APP_HOST, APP_PORT } from "../config.js"
import routerUser from "./users/users.controller.js"

const app = new Application()

app.use(routerUser.routes())


console.log(`[deno] - listening on port ${APP_PORT}`)

await app.listen(`${APP_HOST}:${APP_PORT}`)
