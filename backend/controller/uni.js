import Uni from "../model/uni.js";
import Form from "../model/form.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function postSignup(req, res) {
    let uni = new Uni(req.body);
    let form = new Form({
        owner: uni._id,
        personalInfo: { name: uni.name, email: uni.email },
    });
    try {
        await uni.save();
        await form.save();

        const token = await uni.generateAuthToken();
        uni = uni.toJSON();
        res.send({ uni, token });
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

export async function postLogin(req, res) {
    console.log("POST uni/login");
    const { email, password } = req.body;
    try {
        const uni = await Uni.findByCredentials(email, password);
        const token = await uni.generateAuthToken();
        res.send({ uni, token });
    } catch (err) {
        res.status(401).send({ error: err.message });
    }
}

export async function postLogout(req, res) {
    console.log("POST uni/logout");
    try {
        req.uni.tokens = req.uni.tokens.filter(
            (token) => token.token !== req.token
        );
        await req.uni.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
}

export async function postLogoutAll(req, res) {
    console.log("POST uni/logoutAll");
    try {
        req.uni.tokens = [];
        await req.uni.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
}

// export async function viewForm(req,res) {
//     console.log("GET uni/viewForm")
//     try {

//     }
// }

export async function forgetPassword(req, res) {
    console.log("GET uni/forgetPassword");
    const { email } = req.body;
    try {
        const uni = await Uni.findOne({ email });
        if (!uni) res.status(404).send({ error: "User not found" });

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // port: 587,
            secure: false,
            auth: {
                user: "blooddreamer70@gmail.com",
                pass: "1123-B421-qPbP-8pSi",
            },
        });

        const payload = {
            email: uni.email,
            id: uni._id,
        };

        const token = jwt.sign(
            payload,
            "afterlife-avenged-sevenfold" + uni.password,
            {
                expiresIn: "30m",
            }
        );
        const link = `http://localhost:5000/api/uni/resetPassword/${uni._id}/${token}`;

        let info = await transporter.sendMail({
            from: "blooddreamer70@gmail.com",
            to: "23100170@lums.edu.pk",
            subject: "Checking if email is sending",
            text: link,
        });

        // console.log(info);
        res.send(uni);
    } catch (err) {
        res.send({ error: err });
    }
}

export async function resetPassword(req, res) {
    console.log("PATCH ");
    const { id, token } = req.params;
    const uni = await Uni.findOne({ id });
    console.log(uni);

    if (!uni) res.status(404).send({ error: err });

    try {
        const payload = jwt.verify(
            token,
            "afterlife-avenged-sevenfold" + uni.password
        );
        res.send("Enter new password");
    } catch (err) {
        res.status(404).send({ error: err });
    }
}
