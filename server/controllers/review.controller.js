import { query } from '../connect.js'

async function getAllReviews(id) {
    const data = await query('SELECT date_of_review, description, rating FROM Review WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

export { getAllReviews }