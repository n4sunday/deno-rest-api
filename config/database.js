import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = await new Client().connect({
    hostname: config().DATABASE_HOST,
    username: config().DATABASE_USERNAME,
    db: config().DATABASE_NAME,
    password: config().DATABASE_PASSWORD,
});

await client.execute(`
    CREATE TABLE IF NOT EXISTS users (
        id int(11) PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL,
        last VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        role DECIMAL,
        created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`)

export default client;