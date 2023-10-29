import { query } from '../connect.js'

async function getAllAssignments(id) {
    const data = await query('SELECT title, status, due_date AS dueDate FROM Assignment WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

async function createAssignment(assignment) {
    const data = await query('INSERT INTO Assignment(courseid, title, status, due_date) VALUES(?, ?, ?, ?)',[assignment.courseid,assignment.title,assignment.status,assignment.dueDate])
    if(data)
        return data;
    else
        return null
}
export { getAllAssignments, createAssignment }