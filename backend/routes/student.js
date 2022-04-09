import express from "express";

import Student from "../model/student.js";
import Form from "../model/form.js";

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

router.patch("/application/personalInfo", async (req, res) => {
    console.log("PATCH /student/application/personalInfo");
    const user = {
        _id: "6250d009a387676f62558fc1",
        name: "Mahd Iftikhar",
        email: "mahd.iftikhar@gmail.com",
        password: "password",
    };

    const body = req.body;
    const name =
        body.first + (body.middle ? ` ${body.middle} ` : " ") + body.last;

    body.name = name;

    try {
        let form = await Form.findOne({ owner: user._id });
        !form && (form = new Form({ owner: user._id }));

        form.personalInfo = { ...body };
        form.save();
        res.send({
            message: "Data saved successfully",
            data: form.personalInfo,
        });
    } catch (err) {
        console.log(err);
        res.send({ error: "Something went wrong" });
    }
});

router.get("/application/personalInfo", async (req, res) => {
    console.log("GET /student/application/personalInfo");

    const userId = "6250d009a387676f62558fc1";
    try {
        const form = await Form.findOne({ owner: userId });
        res.send(form.personalInfo.toJSON());
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

export default router;
