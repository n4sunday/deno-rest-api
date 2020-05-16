import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = await new Client().connect({
    hostname: config().DATABASE_HOST,
    username: config().DATABASE_USERNAME,
    db: config().DATABASE_NAME,
    password: config().DATABASE_PASSWORD,
});

export default client;