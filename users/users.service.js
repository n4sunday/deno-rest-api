import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import userRepo from "./users.repo.js"
import { addUser } from "../main.js"

const usersService = {
    async getUsers() {
        const users = await userRepo.selectAll()
        return users
    },
    async addUser(data) {
        data.password = bcrypt.hashpw(data.password)
        const users = await userRepo.create(data)
        return users
    },
}

export default usersService