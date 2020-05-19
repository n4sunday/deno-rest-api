import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import usersRepo from "./users.repo.js";

const usersService = {
    async getUsers() {
        const users = await usersRepo.selectAll()
        return users
    },
    async addUser(data) {
        const newData = {
            email: data.email,
            username: data.username
        }
        const userInRepo = await usersRepo.getInfoUserBy(newData)
        if (newData.email === userInRepo.email) {
            return { msg: `this email already exists` }
        }
        else if (data.username === userInRepo.username) {
            return { msg: `this username already exists` }
        }
        else {
            const result = bcrypt.checkpw(data.password, userInRepo.password)
            data.password = bcrypt.hashpw(data.password)
            const users = await usersRepo.create(data)
            return users
        }
    },
    async getUser(id) {
        const user = await usersRepo.getById(id)
        return user
    },
    async loginUser(data) {
        const newData = {
            email: data.info,
            username: data.info
        }
        const userInRepo = await usersRepo.getInfoUserBy(newData)
        if (data.info === userInRepo.email || data.info === userInRepo.username) {
            const result = bcrypt.checkpw(data.password, userInRepo.password)
            if (result) { return { msg: `login success` } }
            else { return { msg: `incorrect password` } }
        }
        else { return { msg: `don't have your account` } }

    }
}

export default usersService