import { query } from '../connect.js'

async function getAllMaterials(id) {
    const data = await query('SELECT title, content FROM Material WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

async function createMaterial(material) {
    const data = await query('INSERT INTO Material(courseid, title, content) VALUES(?, ?, ?)',[material.courseid,material.title,material.content])
    if(data)
        return data;
    else
        return null
}

export { getAllMaterials, createMaterial }