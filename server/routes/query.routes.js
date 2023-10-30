import express from "express";
import { 
    createQuery,
    getAllQueries
} from "../controllers/query.controller.js";


/* Importing controllers */
const router = express.Router();


router.post('/getAllQueries', async function(req, res, next) {
        try {
            res.status(200).json(await getAllQueries(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting queries `, err.message);
            next(err);
        }
});

router.post('/createQuery', async function(req, res, next) {
    try {
        res.status(200).json(await createQuery(req.body));
    } catch (err) {
        res.status(500);
        console.error(`Error while creating query`, err.message);
        next(err);
    }
});

export default router;