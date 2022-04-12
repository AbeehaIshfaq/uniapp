import express from "express";
import Uni from "../model/uni.js";

import auth from "../middleware/uniAuth.js";
import {
    postSignup,
    postLogin,
    postLogout,
    postLogoutAll,
    forgetPassword,
    resetPassword,
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

router.get("/forgetPassword", forgetPassword);

router.get("/resetPassword/:id/:token", resetPassword);

router.post("/resetPassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const uni = await Uni.findOne({ id });
    if (!uni) res.status(404).send("Error");

    console.log(uni);

    try {
        uni.password = req.body.password;
        await uni.save();
        res.send("Password changed");
    } catch (err) {
        res.status(404).send("error!!!");
    }
});

export default router;
