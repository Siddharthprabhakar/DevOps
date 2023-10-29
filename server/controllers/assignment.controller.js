import { query } from '../connect.js'

async function getAllAssignments(id) {
    const data = await query('SELECT title, status, due_date AS dueDate FROM Assignment WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

export { getAllAssignments }