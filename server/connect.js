import * as mysql from 'mysql2/promise';

const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "eduflex",
  connectTimeout: 60000,
};

let connection; // Declare a single connection outside the query function.

// Function to create a connection if it doesn't exist or reuse an existing one.
async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection(config);
  }
  return connection;
}

export async function query(sql, params) {
  const db = await getConnection(); // Use the existing or create a connection.
  const [results, ] = await db.execute(sql, params);

  return results;
}