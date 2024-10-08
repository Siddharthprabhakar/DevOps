import express from "express";
import { 
    createReview,
    getAllReviews 
} from "../controllers/review.controller.js";


/* Importing controllers */
const router = express.Router();


router.post('/getAllReviews', async function(req, res, next) {
        try {
            res.status(200).json(await getAllReviews(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting reviews `, err.message);
            next(err);
        }
});


router.post('/createReview', async function(req, res, next) {
    try {
        res.status(200).json(await createReview(req.body));
    } catch (err) {
        res.status(500);
        console.error(`Error while creating review `, err.message);
        next(err);
    }
});

export default router;