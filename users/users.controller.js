import { Router } from "https://deno.land/x/oak/mod.ts";
import usersService from './users.service.js'

const router = new Router()

const getUsers = async ({ response }) => {
    response.body = await usersService.getUsers()
}

const addUser = async ({ request, response }) => {
    const body = await request.body()
    response.body = await usersService.addUser(body.value)
}

router
    .get("/users", getUsers)
    .post("/users", addUser)

export default router