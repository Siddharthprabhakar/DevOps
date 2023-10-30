import express from "express";
import { 
    validateLogin,
    createUser,
    createStudent,
    createInstructor
} from "../controllers/user.controller.js";


/* Importing controllers */
const router = express.Router();

router.post('/validateLogin', async function(req, res, next) {
        try {
            res.status(200).json(await validateLogin(req.body));
        } catch (err) {
            res.status(500);
            console.error(`Error while getting user details `, err.message);
            next(err);
        }
});

router.post('/createStudent', async function(req, res, next) {
    try {
        res.status(200).json(await createStudent(req.body));
    } catch (err) {
        res.status(500);
        console.error(`Error while creating student `, err.message);
        next(err);
    }
});

router.post('/createInstructor', async function(req, res, next) {
    try {
        res.status(200).json(await createInstructor(req.body));
    } catch (err) {
        res.status(500);
        console.error(`Error while creating instructor `, err.message);
        next(err);
    }
});

export default router;