import { query } from '../connect.js'

async function getAllCategories() {
    const data = await query('SELECT name from category;');
    if(data)
        return data;
    else
        return null
}

export { getAllCategories }