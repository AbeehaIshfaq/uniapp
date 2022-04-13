import express from "express";

import auth from "../middleware/studentAuth.js";

import Form from "../model/form.js";
import Uni from "../model/uni.js";

import { patchPersonalInfo, getPersonalInfo } from "../controller/form.js";
import { patchFamilyInfo, getFamilyInfo } from "../controller/form.js";

import {
  postSignup,
  postLogin,
  postLogout,
  postLogoutAll,
  getMyUnis,
  getUniListLength,
  getUniList,
} from "../controller/student.js";

const router = new express.Router();

router.post("/signup", postSignup);

router.post("/login", postLogin);

router.post("/logout", auth, postLogout);

router.post("/logoutAll", auth, postLogoutAll);

router.patch("/application/personalInfo", auth, patchPersonalInfo);

router.patch("/application/FamilyInfo", auth, patchFamilyInfo);

router.get("/application/personalInfo", auth, getPersonalInfo);

router.get("/application/FamilyInfo", auth, getFamilyInfo);

router.post("/uniListLength", auth, getUniListLength);

router.get("/myUnis", auth, getMyUnis);

router.get("/uniList", auth, getUniList);

router.post("/addAllUnis", auth, async (req, res) => {
  console.log("POST /addAllUnis");

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
