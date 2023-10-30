import express from "express";
import { 
    getAllCategories
} from "../controllers/category.controller.js";


/* Importing controllers */
const router = express.Router();


router.get('/getAllCategories', async function(req, res, next) {
        try {
            res.status(200).json(await getAllCategories());
        } catch (err) {
            res.status(500);
            console.error(`Error while getting courses `, err.message);
            next(err);
        }
});

export default router;