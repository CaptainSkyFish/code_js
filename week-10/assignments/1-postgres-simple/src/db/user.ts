import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = `INSERT INTO users (username, password, name) 
                         VALUES ($1, $2, $3) 
                         RETURNING (username, password, name)`;
    const values = [username, password, name];
    const insertUser = await client.query(insertQuery, values);
    return insertUser.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getQuery = `SELECT *
                      FROM users
                      WHERE id=($1)`
    const values = [userId];

    const getUser = await client.query(getQuery, values);
    return getUser.rows[0];
}
