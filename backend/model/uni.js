import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const uniSchema = mongoose.Schema({
    name: {
        type: "String",
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: "String",
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: "String",
        required: true,
        trim: true,
        minLength: 7,
    },
    deadline: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: "String",
        required: true,
        unique: true,
    },
    fee: {
        type: Number,
    },
    ranking: {
        type: String,
    },
    city: {
        type: String,
    },
    programsOffered: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    studentList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Student",
        },
    ],
});

// uniSchema.methods.toJSON = function () {
//     const uni = this;
//     const uniObject = uni.toObject();

//     delete uniObject.password;

//     return uniObject;
// };

uniSchema.methods.toJSON = function () {
    const uni = this;
    const uniObject = uni.toObject();

    delete uniObject.password;
    delete uniObject.tokens;

    return uniObject;
};

uniSchema.methods.generateAuthToken = async function () {
    const uni = this;
    const token = jwt.sign(
        { _id: uni._id.toString() },
        "afterlife-avenged-sevenfold"
    );
    uni.tokens = uni.tokens.concat({ token });
    await uni.save();
    return token;
};

uniSchema.pre("save", async function (next) {
    const uni = this;

    if (uni.isModified("password")) {
        uni.password = await bcrypt.hash(uni.password, 8);
    }
    next();
});

uniSchema.statics.findByCredentials = async (email, password) => {
    const uni = await Uni.findOne({ email });
    if (!uni) throw new Error("Unable to login");
    const isMatch = await bcrypt.compare(password, uni.password);
    if (!isMatch) throw new Error("Unable to login");
    return uni;
};

uniSchema.virtual("myForm", {
    ref: "Form",
    localField: "_id",
    foreignField: "owner",
});

const Uni = mongoose.model("Uni", uniSchema);

export default Uni;
