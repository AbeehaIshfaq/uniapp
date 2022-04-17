import express from "express";
import auth from "../middleware/studentAuth.js";
import Form from "../model/form.js";
import Uni from "../model/uni.js";

import { patchPersonalInfo, getPersonalInfo } from "../controller/form.js";
import { patchFamilyInfo, getFamilyInfo } from "../controller/form.js";
import { patchAcademicInfo, getAcademicInfo } from "../controller/form.js";

import {
    postSignup,
    postLogin,
    postLogout,
    postLogoutAll,
    getMyUnis,
    getUniListLength,
    forgetPassword,
    resetPassword,
    getUniList,
    postAddUni,
    postRemoveUni,
} from "../controller/student.js";
import Student from "../model/student.js";
import mongoose from "mongoose";

const router = new express.Router();

router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.patch("/application/personalInfo", auth, patchPersonalInfo);

router.patch("/application/familyInfo", auth, patchFamilyInfo);

router.patch("/application/academicInfo", auth, patchAcademicInfo);

router.get("/application/personalInfo", auth, getPersonalInfo);

router.get("/application/familyInfo", auth, getFamilyInfo);

router.get("/application/academicInfo", auth, getAcademicInfo);

router.post("/uniListLength", auth, getUniListLength);

router.get("/myUnis", auth, getMyUnis);

router.get("/forgetPassword", forgetPassword);

router.get("/resetPassword/:id/:token", resetPassword);

router.post("/resetPassword", async (req, res) => {
    const { id, token } = req.query;
    const student = await Student.findOne({ _id: id });
    if (!student) res.status(404).send("Error");
    try {
        student.password = req.body.password;
        student.save();
        res.send();
    } catch (err) {
        console.log(err);
        res.status(404).send({ error: err });
    }
});

router.get("/uniList", auth, getUniList);

router.post("/addUni", auth, postAddUni);

router.post("/removeUni", auth, postRemoveUni);

router.post("/addAllUnis", auth, async (req, res) => {
    //console.log("POST /addAllUnis");

    try {
        const unis = await Uni.find({});
        req.student.uniList = unis.map((value) => ({
            uni: value._id,
        }));
        req.student.save();
        res.send();
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get("/student", auth, async (req, res) => {
    // console.log(req.token);
    // console.log(req.user);
    res.send(req.student);
});

router.get("/testForm", async (req, res) => {
    let data = await Form.findById("624ca402bdf773a7a43082fd");
    // console.log(data);
    res.send({ data });
});

export default router;
