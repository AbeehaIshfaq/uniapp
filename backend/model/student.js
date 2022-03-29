import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        tyep: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
    },
});

export default studentSchema;
