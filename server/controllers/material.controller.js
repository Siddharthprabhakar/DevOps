import { query } from '../connect.js'

async function getAllMaterials(id) {
    const data = await query('SELECT title, content FROM material WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

async function createMaterial(material) {
    const data = await query('INSERT INTO material(courseid, title, content) VALUES(?, ?, ?)',[material.courseid,material.title,material.content])
    if(data)
        return data;
    else
        return null
}

export { getAllMaterials, createMaterial }