import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
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

// Delete password field for security reasons
studentSchema.methods.toJSON = function () {
    const student = this;
    const studentObject = student.toObject();

    delete studentObject.password;

    return studentObject;
};

studentSchema.virtual("myForm", {
    ref: "Form",
    localField: "_id",
    foreignField: "owner",
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
