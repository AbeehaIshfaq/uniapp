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

let temp = new Uni({
  name: "LUMSU",
  email: "someone@lumsu.pk",
  password: "password",
  deadline: new Date(2024, 7, 13),
  phoneNumber: "0202001282092",
  fee: 60000,
  ranking: "10",
  city: "Lahore",
  programsOffered: ["CS", "MBA"],
  tokens: [{ token: "efefwefweff" }],
});

let temp1 = new Uni({
  name: "UET",
  email: "someone@uet.pk",
  password: "password",
  deadline: new Date(2023, 4, 13),
  phoneNumber: "020200128232092",
  fee: 30000,
  ranking: "110",
  city: "Narowal",
  programsOffered: ["Electrical", "Mechanical"],
  tokens: [{ token: "efefwwsffefweff" }],
});

try {
  Uni.deleteOne({ name: "LUMSU" }, function (err) {
    // console.log(err);
  });
  Uni.deleteOne({ name: "UET" }, function (err) {
    // console.log(err);
  });
} catch {}

try {
  temp.save(function (err, tempo) {
    // console.log(err);
  });
} catch {}

try {
  temp1.save(function (err, tempo) {
    // console.log(err);
  });
} catch {}

export default Uni;
