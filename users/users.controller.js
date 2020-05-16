import { Router } from "https://deno.land/x/oak/mod.ts";
import usersService from './users.service.js'

const router = new Router()

const getUsers = async ({ response }) => {
    response.body = await usersService.getUsers()
}

router
    .get("/users", getUsers)

export default router