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

router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.patch("/application/personalInfo", patchPersonalInfo);

router.get("/application/personalInfo", getPersonalInfo);

router.get("/student", auth, async (req, res) => {
    console.log(req.token);
    console.log(req.user);
    res.send(req.user);
});

router.get("/testForm", async (req, res) => {
    let data = await Form.findById("624ca402bdf773a7a43082fd");
    console.log(data);
    res.send({ data });
});

export default router;
