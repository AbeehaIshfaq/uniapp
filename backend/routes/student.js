import express from "express";

import Student from "../model/student.js";

const router = new express.Router();

router.post("/createStudent", async (req, res) => {
    const data = req.body;
    let student = new Student({ ...data });
    try {
        await student.save();
        student = student.toJSON();
        res.send({ message: "successfully saved", data: student });
    } catch (err) {
        console.log(err);
        res.send({ error: err });
    }
});

export default router;
