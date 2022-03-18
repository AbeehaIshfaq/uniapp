import express from "express";

const app = express();

const port = process.env.PORT;

app.use("/", (req, res) => {
    console.log(req.headers.host, "connected to the server");
    res.send("<h1>Welcome to the server!</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
