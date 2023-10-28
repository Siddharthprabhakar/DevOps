import * as mysql from 'mysql2/promise';

const config = {
      host: "localhost",
      user: "root",
      password: "root",
      database: "eduflex",
      connectTimeout: 60000
}


export async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute(sql, params);

  return results;
}
