import Uni from "../model/uni.js";
import Form from "../model/form.js";

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
        res.send(err);
    }
}

export async function postLogout(req, res) {
    console.log("POST uni/logout");
    try {
        req.user.tokens = req.user.tokens.filter(
            (token) => token.token !== req.token
        );
        await req.user.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
}

export async function postLogoutAll(req, res) {
    console.log("POST uni/logoutAll");
    try {
        req.user.tokens = [];
        await req.user.save();
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
