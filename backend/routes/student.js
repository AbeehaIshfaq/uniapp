import express from "express";

import Student from "../model/student.js";
import Form from "../model/form.js";

import { patchPersonalInfo, getPersonalInfo } from "../controller/form.js";

const router = new express.Router();

router.post("/createStudent", async (req, res) => {
    console.log("New Student Creation");
    const data = req.body;
    let student = new Student({ ...data });
    let form = new Form({
        owner: student._id,
        // personalInfo: { name: student.name, email: student.email },
    });
    try {
        await student.save();
        await form.save();
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

router.patch("/application/personalInfo", patchPersonalInfo);

router.get("/application/personalInfo", getPersonalInfo);

export default router;
