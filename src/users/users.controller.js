import { Router } from "https://deno.land/x/oak/mod.ts"
import usersService from './users.service.js'

const router = new Router()

const getUsers = async ({ response }) => {
    response.body = await usersService.getUsers()
}

const addUser = async ({ request, response }) => {
    const body = await request.body()
    response.body = await usersService.addUser(body.value)
}

const getUserById = async ({ params, response }) => {
    const res = await usersService.getUser(params.id)
    if (res) {
        response.status = 404
        response.body = res
        return response
    }
    response.status = 404
    response.body = { msg: `can't find user id ${params.id}` }
    return response
}

const loginUser = async ({ request, response }) => {
    const body = await request.body()
    const res = await usersService.loginUser(body.value)
    response.status = 200
    response.body = res
    return response
}

const helloDeno = async (ctx) => {
    return ctx.response.body = 'Hello Deno 🦕'
}

router.get("/", helloDeno)
router
    .get("/users", getUsers)
    .post("/users", addUser)
    .get("/users/:id", getUserById)
    .post("/users/login", loginUser)

export default router