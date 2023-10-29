import { query } from '../connect.js'

async function getAllQueries(id) {
    const data = await query('SELECT date_of_query as date, description FROM Query WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

export { getAllQueries }