import express from "express";
import { 
    getAllQueries
} from "../controllers/query.controller.js";


/* Importing controllers */
const router = express.Router();

/* GET all courses */
router.post('/getAllQueries', async function(req, res, next) {
        try {
            res.status(200).json(await getAllQueries(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting queries `, err.message);
            next(err);
        }
});

export default router;