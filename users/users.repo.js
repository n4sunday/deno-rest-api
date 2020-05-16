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
        let result = await client.execute("SELECT id,email,username,role,created_at FROM users");
        return result.rows
    }

    async getById(id) {
        let result = await client.execute(`SELECT id,email,username,role,created_at FROM users WHERE id=?`,
            id
        )
        if (result.rows.length !== 0) {
            return result.rows
        }
        return false
    }

    async getInfoUserBy(data) {
        let result = await client.execute(`SELECT email,username,role,password FROM users WHERE username=? OR email=?`,
            [
                data.info,
                data.info,
            ]
        )
        if (result.rows.length !== 0) {
            return result.rows[0]
        }
        return false
    }
}

export default new UsersRepo()