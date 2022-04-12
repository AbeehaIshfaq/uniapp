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
