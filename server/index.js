/* Importing dependencies */
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

/* Importing all routers*/
import courseRouter from './routes/course.routes.js';
import userRouter from './routes/user.routes.js';
import reviewRouter from './routes/review.routes.js';
import materialRouter from './routes/material.routes.js';
import assignmentRouter from './routes/assignment.routes.js';
import queryRouter from './routes/query.routes.js';
import certRouter from './routes/certificate.routes.js';
import categoryRouter from './routes/category.routes.js';

/* Configuring our environment */
dotenv.config();

/* Adding middleware */
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: true, }));

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);
app.use("/api/review", reviewRouter);
app.use("/api/material", materialRouter);
app.use("/api/assignment", assignmentRouter);
app.use("/api/query", queryRouter);
app.use("/api/certificate", certRouter);
app.use("/api/category", categoryRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

const port = process.env.PORT || 5000; // Default to port 5000 if PORT is not set

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});