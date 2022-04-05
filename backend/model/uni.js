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
    },
    fee: {
        type: Number,
    },
    Ranking: {
        type: String,
    },
    Address: {
        type: String,
    },
    ProgramsOffered: [
        {
            program: {
                type: String,
            },
        },
    ],
});



const Uni = mongoose.model("Uni", uniSchema);

export default uniSchema;
