import { Client } from "pg";


const client = new Client({
    connectionString: "postgresql://postgres:myssecretpass@localhost/postgres"
})

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE Users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP) 
            ON CONFLICT DO NOTHING;
        `);
    await client.end();
    console.log(result);
}

async function insertData() {
    try {
        await client.connect();
        const insertQuery = `
            INSERT INTO users (username, email, password) 
            VALUES ($1, $2, $3), ($4, $5, $6), ($7, $8, $9), ($10, $11, $12), ($13, $14, $15);
        `;

        const values = [
            'username2', 'user2@example.com', 'user_password2',
            'username3', 'user3@example.com', 'user_password3',
            'username4', 'user4@example.com', 'user_password4',
            'username5', 'user5@example.com', 'user_password5',
            'username6', 'user6@example.com', 'user_password6'
        ];
        const result = await client.query(insertQuery, values);
        console.log(result);
    }
    catch (err) {
        console.log(`ERROR during insertion: ${err}`);
    }
    finally { await client.end(); }
}

// createUsersTable();
insertData();