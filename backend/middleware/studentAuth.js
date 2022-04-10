import jwt from "jsonwebtoken";

import Student from "../model/student.js";

const studAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "afterlife-avenged-sevenfold");

        const student = await Student.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!student) throw new Error();

        req.token = token;
        req.user = student;
        next();
    } catch (err) {
        res.status(401).send({ error: "Please authenticate" });
    }
};

export default studAuth;
