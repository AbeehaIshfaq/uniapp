import mongoose from "mongoose";

const personalInfoSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    dateOfBirth: Date,
    gender: String,
    cnic: String,
    maritalStatus: String,
    passport: String,
    permanentAddress: String,
    currentAddress: String,
});

const familyInfoSchema = mongoose.Schema({
    name: String,
    relation: String,
    cnic: String,
    passport: String,
    phoneNumber: String,
    email: String,
    occupation: String,
});

const academicInfoSchema = new mongoose.Schema({
    typeOf: String,
    completionStatus: String,
    degreeStatus: String,
    board: String,
    school: String,
    startDate: Date,
    endDate: Date,
    subjects: [
        {
            subjectName: String,
            grade: String,
        },
    ],
});

const extraCurrInfoSchema = mongoose.Schema({
    name: String,
    description: String,
    hasCertificate: Boolean,
});

const formSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Student",
    },
    personalInfo: personalInfoSchema,
    familyInfo: [familyInfoSchema],
    academicInfo: [academicInfoSchema],
    exrtaCurrInfo: [extraCurrInfoSchema],
});

const Form = mongoose.model("Form", formSchema);

export default Form;
