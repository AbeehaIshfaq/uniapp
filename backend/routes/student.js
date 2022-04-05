import express from "express";

import Student from "../model/student.js";
import Form from "../model/form.js";

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

router.get("/testForm", async (req, res) => {
    let data = await Form.findById("624ca402bdf773a7a43082fd");
    console.log(data);
    res.send({ data });
});

export default router;
