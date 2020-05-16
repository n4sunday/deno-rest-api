import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import userRepo from "./users.repo.js"
import { addUser } from "../main.js"
import usersRepo from "./users.repo.js";

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
    async getUser(id) {
        const user = await userRepo.getById(id)
        return user
    },
    async loginUser(data) {
        const userInRepo = await usersRepo.getInfoUserBy(data)
        if (data.info === userInRepo.email || data.info === userInRepo.username) {
            const result = bcrypt.checkpw(data.password, userInRepo.password)
            if (result) {
                return {
                    msg: `login success`
                }
            }
            else {
                return {
                    msg: `incorrect password`
                }
            }
        }
        else {
            return {
                msg: `don't have your account`
            }
        }

    }
}

export default usersService