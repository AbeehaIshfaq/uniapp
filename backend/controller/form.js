import Form from "../model/form.js";

export async function patchPersonalInfo(req, res) {
    console.log("PATCH /student/application/personalInfo");

    const user = req.user;
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

    const user = req.user;
    try {
        const form = await Form.findOne({ owner: user._id });
        res.send(form.personalInfo);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}
