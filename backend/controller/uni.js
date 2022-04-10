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
    } catch (e) {}
}
