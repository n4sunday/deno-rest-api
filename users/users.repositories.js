import client from '../config/database.js'

class UsersRepo {
    // create(users) {
    //     return client.query(
    //         "INSERT INTO users (name) VALUES ($1, $2)",
    //         users.name,
    //     )
    // }

    selectAll() {
        return client.execute("SELECT * FROM users");
    }
}

export default new UsersRepo()