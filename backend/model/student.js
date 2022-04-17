import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    uniList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Uni",
        },
    ],
});

// Delete password field for security reasons
studentSchema.methods.toJSON = function () {
    const student = this;
    const studentObject = student.toObject();

    delete studentObject.password;
    delete studentObject.tokens;
    delete studentObject.uniList;

    return studentObject;
};

studentSchema.methods.generateAuthToken = async function () {
    const student = this;
    const token = jwt.sign(
        { _id: student._id.toString() },
        process.env.JWT_KEY
    );
    student.tokens = student.tokens.concat({ token });
    await student.save();
    return token;
};

studentSchema.statics.findByCredentials = async (email, password) => {
    const student = await Student.findOne({ email });
    if (!student) throw new Error("Unable to login");
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) throw new Error("Unable to login");
    return student;
};

studentSchema.pre("save", async function (next) {
    const student = this;

    if (student.isModified("password")) {
        student.password = await bcrypt.hash(student.password, 8);
    }
    next();
});

studentSchema.virtual("myForm", {
    ref: "Form",
    localField: "_id",
    foreignField: "owner",
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
