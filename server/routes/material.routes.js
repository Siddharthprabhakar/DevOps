import express from "express";
import { 
    getAllMaterials 
} from "../controllers/material.controller.js";


/* Importing controllers */
const router = express.Router();

/* GET all courses */
router.post('/getAllMaterials', async function(req, res, next) {
        try {
            res.status(200).json(await getAllMaterials(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting courses `, err.message);
            next(err);
        }
});

export default router;