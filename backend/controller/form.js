import Form from "../model/form.js";

export async function patchPersonalInfo(req, res) {
    console.log("PATCH /student/application/personalInfo");
    const user = {
        _id: "6250d009a387676f62558fc1",
        name: "Mahd Iftikhar",
        email: "mahd.iftikhar@gmail.com",
        password: "password",
    };

    const body = req.body;
    const name =
        body.first + (body.middle ? ` ${body.middle} ` : " ") + body.last;

    body.name = name;

    try {
        let form = await Form.findOne({ owner: user._id });
        !form && (form = new Form({ owner: user._id }));

        form.personalInfo = { ...body };
        form.save();
        res.send({
            message: "Data saved successfully",
            data: form.personalInfo,
        });
    } catch (err) {
        console.log(err);
        res.send({ error: "Something went wrong" });
    }
}

export async function getPersonalInfo(req, res) {
    console.log("GET /student/application/personalInfo");

    const userId = "6250d009a387676f62558fc1";
    try {
        const form = await Form.findOne({ owner: userId });
        res.send(form.personalInfo.toJSON());
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}
