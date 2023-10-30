import express from "express";
import { 
    getCertificate
} from "../controllers/certificate.controller.js";


/* Importing controllers */
const router = express.Router();


router.post('/getCertificate', async function(req, res, next) {
        try {
            res.status(200).json(await getCertificate(req.body.id));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting certificate `, err.message);
            next(err);
        }
});

export default router;