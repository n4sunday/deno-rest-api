import userRepo from "./users.repositories.js"

const usersService = {
    async getUsers() {
        const users = await userRepo.selectAll()
        return users
    }
}

export default usersService