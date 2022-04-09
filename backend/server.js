import express from "express";

import StudentRouter from "./routes/student.js";
import UniRouter from "./routes/university.js";
import "./db/mongoose.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.use("/api/student", StudentRouter);
app.use("/api/uni", UniRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
