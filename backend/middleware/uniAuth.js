import jwt from "jsonwebtoken";

import Uni from "../model/uni.js";

const uniAuth = async (req, res, next) => {
    if (req.method === "OPTIONS") next();

    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "afterlife-avenged-sevenfold");

        const uni = await Uni.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!uni) throw new Error();

        req.token = token;
        req.uni = uni;
        next();
    } catch (err) {
        res.status(401).send({ error: "Please authenticate" });
    }
};

export default uniAuth;
