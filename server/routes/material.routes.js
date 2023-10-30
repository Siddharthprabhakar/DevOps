import express from "express";
import { 
    getAllMaterials,
    createMaterial
} from "../controllers/material.controller.js";


/* Importing controllers */
const router = express.Router();

router.post('/getAllMaterials', async function(req, res, next) {
        try {
            res.status(200).json(await getAllMaterials(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting materials `, err.message);
            next(err);
        }
});

router.post('/createMaterial', async function(req, res, next) {
    try {
        res.status(200).json(await createMaterial(req.body));
    } catch (err) {
        res.status(500);
        console.error(`Error while creating material `, err.message);
        next(err);
    }
});

export default router;