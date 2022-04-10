import express from "express";

import auth from "../middleware/studentAuth.js";

import Form from "../model/form.js";

import { patchPersonalInfo, getPersonalInfo } from "../controller/form.js";
import {
    postSignup,
    postLogin,
    postLogout,
    postLogoutAll,
} from "../controller/student.js";

const router = new express.Router();

<<<<<<< HEAD
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
        res.status(400).send("Error Occurrred");
    }
=======
router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.patch("/application/personalInfo", auth, patchPersonalInfo);

router.get("/application/personalInfo", auth, getPersonalInfo);

router.get("/student", auth, async (req, res) => {
    console.log(req.token);
    console.log(req.user);
    res.send(req.user);
>>>>>>> 644eef57ed3958304c7d0e64fb1186a5264d6547
});

router.get("/testForm", async (req, res) => {
    let data = await Form.findById("624ca402bdf773a7a43082fd");
    console.log(data);
    res.send({ data });
});

export default router;
