import express from "express";

import StudentRouter from "./routes/student.js";
import UniRouter from "./routes/university.js";
import "./db/mongoose.js";

import Student from "./model/student.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(StudentRouter);
app.use("/uni", UniRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
