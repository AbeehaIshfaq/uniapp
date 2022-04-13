import mongoose from "mongoose";
import validator from "validator";

const personalInfoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: "",
    },
    email: {
        type: String,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("Email is invalid");
        },
        default: "",
    },
    phoneNumber: {
        type: String,
        trim: true,
        // match: [
        //     /((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})/,
        //     "Phone number is invalid",
        // ],
        default: "",
    },
    dateOfBirth: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        trim: true,
        default: "",
    },
    cnic: {
        type: String,
        trim: true,
        match: [/\d\d\d\d\d-?\d\d\d\d\d\d\d-?\d/, "CNIC is invalid"],
        default: "",
    },
    maritalStatus: {
        type: String,
        trim: true,
        match: [/married|single/, "Marital Status is invalid"],
        default: "",
    },
    permanentAddress: {
        type: String,
        trim: true,
        default: "",
    },
    currentAddress: {
        type: String,
        trim: true,
        default: "",
    },
});

personalInfoSchema.methods.toJSON = function () {
    const info = this;
    const infoObject = info.toObject();
    const [first, middle, last] = infoObject.name.split(" ");
    infoObject.first = first;
    if (last) {
        infoObject.middle = middle;
        infoObject.last = last;
    } else {
        infoObject.last = middle;
        infoObject.middle = "";
    }
    delete infoObject.name;

    return infoObject;
};

const familyInfoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: "",
    },
    relation: {
        type: String,
        trim: true,
        default: "",
    },
    cnic: {
        type: String,
        trim: true,
       // match: [/\d\d\d\d\d-?\d\d\d\d\d\d\d-?\d/, "CNIC is invalid"],
        default: "",
    },
    phoneNumber: {
        type: String,
        trim: true,
        // match: [
        //     /((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})/,
        //     "Phone number is invalid",
        // ],
        default: "",
    },
    email: {
        type: String,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        },
        default: "",
    },
    occupation: {
        type: String,
        trim: true,
        default: "",
    },
});
familyInfoSchema.methods.toJSON = function () {
    const info = this;
    const infoObject = info.toObject();
    const [first, middle, last] = infoObject.name.split(" ");
    infoObject.first = first;
    if (last) {
        infoObject.middle = middle;
        infoObject.last = last;
    } else {
        infoObject.last = middle;
        infoObject.middle = "";
    }
    delete infoObject.name;

    return infoObject;
};

const academicInfoSchema = new mongoose.Schema({
    typeOf: String,
    completionStatus: String,
    degreeStatus: String,
    board: String,
    startDate: Date,
    endDate: Date,
    school: String,
    Overall: String,
    // subjects: [
    //     {
    //         subjectName: String,
    //         grade: String,
    //     },
    // ],
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
    familyInfo: familyInfoSchema,
    //academicInfo: academicInfoSchema,
    exrtaCurrInfo: [extraCurrInfoSchema],
});

const Form = mongoose.model("Form", formSchema);

export default Form;
