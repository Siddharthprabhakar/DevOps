import { query } from '../connect.js'

async function getAllQueries(id) {
    const data = await query('SELECT date_of_query as date, description FROM Query WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

async function createQuery(queryReq) {
    const data = await query('INSERT INTO Query(courseid, date_of_query, description) VALUES(?, ?, ?)',[queryReq.courseid,queryReq.date_of_query,queryReq.description])
    if(data)
        return data;
    else
        return null
}

export { getAllQueries, createQuery }