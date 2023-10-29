/* Importing dependencies */
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

/* Importing all routers*/
import courseRouter from './routes/course.routes.js';
import userRouter from './routes/user.routes.js';
import reviewRouter from './routes/review.routes.js'

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

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});