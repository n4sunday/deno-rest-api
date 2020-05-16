import client from '../config/database.js'

class UsersRepo {
    async create(users) {
        let result = await client.execute(`
            INSERT INTO users(name,last,email,username,password,role) VALUES(?,?,?,?,?,?)`,
            [
                users.name,
                users.last,
                users.email,
                users.username,
                users.password,
                0,
            ]
        )
        if (result) {
            return { message: "create success" }
        }
    }

    async selectAll() {
        let result = await client.execute("SELECT id,email,username,email,role,created_at FROM users");
        return result.rows
    }
}

export default new UsersRepo()