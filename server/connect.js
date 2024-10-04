import * as mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  host: process.env.DB_HOST || "localhost", // Default to localhost if not set
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "eduflex",
  port: process.env.DB_PORT || 3306, // Optional: specify port
  connectTimeout: parseInt(process.env.CONNECT_TIMEOUT, 10) || 60000,
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
