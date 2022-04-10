import Student from "../model/student.js";
import Form from "../model/form.js";
import Uni from "../model/uni.js";

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
            (token) => token.token !== req.token
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
    console.log("GET student/myUnis");

    const limit = 12;
    const skip = req.query.skip ? req.query.skip * limit : 0;

    const uniIdList = req.student.uniList.map((uni) => uni.uni);

    try {
        const uniList = await Uni.find({
            _id: {
                $in: uniIdList,
            },
        })
            .skip(skip)
            .limit(limit);

        console.log(uniList);
        res.send(uniList);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}
