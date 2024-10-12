import { query } from '../connect.js'

async function getAllReviews(id) {
    const data = await query('SELECT date_of_review, description, rating FROM review WHERE courseid = ?;', [id] );
    if(data)
        return data;
    else
        return null
}

async function createReview(review) {
    const data = await query('INSERT INTO review(courseid, date_of_review, description, rating) VALUES(?, ?, ?, ?)',[review.courseid,review.date_of_review,review.description,review.rating])
    if(data)
        return data;
    else
        return null
}
export { getAllReviews, createReview }