import express from "express";
import { 
    createEnrollment,
    getAllCourses,
    getCourseInfo,
    isStudentEnrolled,
    getEnrolledCourses,
    getTeachingCourses,
    isInstructorTeaching
} from "../controllers/course.controller.js";


/* Importing controllers */
const router = express.Router();


router.get('/getAllCourses', async function(req, res, next) {
        try {
            res.status(200).json(await getAllCourses());
        } catch (err) {
            res.status(500);
            console.error(`Error while getting courses `, err.message);
            next(err);
        }
});

router.post('/getCourseInfo', async function(req, res, next) {
    try {
        res.status(200).json(await getCourseInfo(req.body.id));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting course info`, err.message);
        next(err);
    }
});
router.post('/isStudentEnrolled', async function(req, res, next) {
    try {
        res.status(200).json(await isStudentEnrolled(req.body.courseid,req.body.studentid));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting course info`, err.message);
        next(err);
    }
});
router.post('/createEnrollment', async function(req, res, next) {
    try {
        res.status(200).json(await createEnrollment(req.body.courseid,req.body.studentid));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting course info`, err.message);
        next(err);
    }
});
router.post('/getEnrolledCourses', async function(req, res, next) {
    try {
        res.status(200).json(await getEnrolledCourses(req.body.studentid));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting courses `, err.message);
        next(err);
    }
});
router.post('/getTeachingCourses', async function(req, res, next) {
    try {
        res.status(200).json(await getTeachingCourses(req.body.instructorid));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting courses `, err.message);
        next(err);
    }
});

router.post('/isInstructorTeaching', async function(req, res, next) {
    try {
        res.status(200).json(await isInstructorTeaching(req.body.courseid,req.body.instructorid));
    } catch (err) {
        res.status(500);
        console.error(`Error while getting course info`, err.message);
        next(err);
    }
});

export default router;