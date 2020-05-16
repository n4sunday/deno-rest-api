import userRepo from "./users.repo.js"

const usersService = {
    async getUsers() {
        const users = await userRepo.selectAll()
        return users
    }
}

export default usersService