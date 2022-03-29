import express from "express";
import StudentRouter from "./routes/student";
import UniRouter from "./routes/university";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(StudentRouter);
app.use(UniRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
