import express from "express";
import StudentRouter from "./routes/student.js";
import UniRouter from "./routes/university.js";
import "./db/mongoose.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(StudentRouter);
app.use(UniRouter);

app.use("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
