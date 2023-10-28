import express from "express";
import { 
    validateLogin
} from "../controllers/user.controller.js";


/* Importing controllers */
const router = express.Router();

/* POST user details and validateLogin */
router.post('/validateLogin', async function(req, res, next) {
        try {
            res.status(200).json(await validateLogin(req.body));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting user details `, err.message);
            next(err);
        }
});

export default router;