import express from "express";
import Uni from "../model/uni.js";

// import Uni from "../model/uni.js";

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

router.post("/createUni", async (req, res) => {
    const data = req.body;
    const deadline = new Date(data.deadline);
    data.deadline = deadline;

    let uni = new Uni({ ...data });
    try {
        await uni.save();
        uni = uni.toJSON();
        res.send({ message: "Successfully saved", data: uni });
    } catch (err) {
        console.log(err);
        res.send({ error: err });
    }
});

router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.get("/viewForm", async (req, res) => {});

router.get("/forgetPassword", forgetPassword);

router.get("/resetPassword/:id/:token", resetPassword);

router.post("/resetPassword", async (req, res) => {
    const { id, token } = req.query;
    const uni = await Uni.findOne({ _id: id });
    if (!uni) res.status(404).send("Error");

    try {
        uni.password = req.body.password;
        uni.save();
        res.send();
    } catch (err) {
        res.status(404).send({ error: err });
    }
});

export default router;
