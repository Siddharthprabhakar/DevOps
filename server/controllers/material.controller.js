import { query } from '../connect.js'

async function getAllMaterials(id) {
    const data = await query('SELECT title, content FROM Material WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

export { getAllMaterials }