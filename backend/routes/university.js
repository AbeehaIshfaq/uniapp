import express from "express";

import Uni from "../model/uni.js";

import auth from "../middleware/studentAuth.js";

import Form from "../model/form.js";

import { patchPersonalInfo, getPersonalInfo } from "../controller/form.js";
import {
    postSignup,
    postLogin,
    postLogout,
    postLogoutAll,
} from "../controller/uni.js";

const router = new express.Router();

// router.post("/createUni", async (req, res) => {
//     const data = req.body;
//     const deadline = new Date(data.deadline);
//     data.deadline = deadline;

//     let uni = new Uni({ ...data });
//     try {
//         await uni.save();
//         uni = uni.toJSON();
//         res.send({ message: "Successfully saved", data: uni });
//     } catch (err) {
//         console.log(err);
//         res.send({ error: err });
//     }
// });

router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.get("/viewForm", async (req, res) => {});

export default router;
