import express from "express";
import { 
    getAllAssignments
} from "../controllers/assignment.controller.js";


/* Importing controllers */
const router = express.Router();

/* GET all courses */
router.post('/getAllAssignments', async function(req, res, next) {
    try {
        res.status(200).json(await getAllAssignments(req.body.id));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting assignments `, err.message);
        next(err);
    }
});


export default router;