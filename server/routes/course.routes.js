import express from "express";
import { 
    getAllCourses 
} from "../controllers/course.controller.js";


/* Importing controllers */
const router = express.Router();

/* GET all courses */
router.get('/getAllCourses', async function(req, res, next) {
        try {
            res.status(200).json(await getAllCourses());
        } catch (err) {
            res.status(500);
            console.error(`Error while getting courses `, err.message);
            next(err);
        }
});

export default router;