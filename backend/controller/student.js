import Student from "../model/student.js";
import Form from "../model/form.js";
import Uni from "../model/uni.js";
import nodemailer from "nodemailer";

export async function postSignup(req, res) {
    console.log("POST student/signup");

    let student = new Student(req.body);
    let form = new Form({
        owner: student._id,
        personalInfo: { name: student.name, email: student.email },
    });
    try {
        await student.save();
        await form.save();

        const token = await student.generateAuthToken();
        student = student.toJSON();
        res.send({ student, token });
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

export async function postLogin(req, res) {
    console.log("POST student/login");
    const { email, password } = req.body;
    try {
        const student = await Student.findByCredentials(email, password);
        const token = await student.generateAuthToken();
        res.send({ student, token });
    } catch (err) {
        console.log(err);
        res.status(404).send();
    }
}

export async function postLogout(req, res) {
    console.log("POST student/logout");
    try {
        req.student.tokens = req.student.tokens.filter(
            (token) => token.token !== req.student.token
        );
        await req.student.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
}

export async function postLogoutAll(req, res) {
    console.log("POST student/logoutAll");
    try {
        req.student.tokens = [];
        await req.student.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
}

export async function getMyUnis(req, res) {
    const limit = req.query.limit || 12;
    const skip = req.query.skip ? req.query.skip * limit : 0;

    console.log(`GET student/myUnis/`, `skip=${skip}`, `limit=${limit}`);
    console.log(req.student);
    const uniIdList = req.student.uniList.map((uni) => uni.uni);
    const totalPages = Math.ceil(req.student.uniList.length / limit);
    try {
        const uniList = await Uni.find({
            _id: {
                $in: uniIdList,
            },
        })
            .skip(skip)
            .limit(limit);

        const sendList = [];
        uniList.forEach((uni) => {
            let temp = uni.toJSON();
            temp.isAdded = true;
            sendList.push(temp);
        });
        res.send({ uniList: sendList, totalPages });
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}

export async function getUniListLength(req, res) {
    console.log("GET student/uniListLength");
    try {
        res.send({ length: req.student.uniList.length });
    } catch (err) {
        console.log(err);
    }
}

export async function forgetPassword(req, res) {
    console.log("GET student/forgetPassword");
    const { email } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student) res.status(404).send({ error: "User not found" });

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // port: 587,
            secure: false,
            auth: {
                user: "blooddreamer70@gmail.com",
                pass: "xxx",
            },
        });

        let info = await transporter.sendMail({
            from: "blooddreamer70@gmail.com",
            to: "23100083@lums.edu.pk",
            subject: "Checking if email is sending",
            text: "It seems to be working",
        });

        // console.log(info);
        res.send(student);
    } catch (err) {
        res.send({ error: err });
    }
}
