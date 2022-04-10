import mongoose from "mongoose";

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
    address: {
        type: String,
    },
    programsOffered: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
});

uniSchema.methods.toJSON = function () {
    const uni = this;
    const uniObject = uni.toObject();

    delete uniObject.password;

    return uniObject;
};

const Uni = mongoose.model("Uni", uniSchema);

export default Uni;
