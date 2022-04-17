import Student from "../model/student.js";
import Form from "../model/form.js";
import Uni from "../model/uni.js";

export async function postSignup(req, res) {
  console.log("POST student/signup");

  let student = new Student(req.body);
  let form = new Form({
    owner: student._id,
    personalInfo: { name: student.name, email: student.email },
  });
  try {
    await student.save();
    await form.save();

    const token = await student.generateAuthToken();
    student = student.toJSON();
    res.send({ student, token });
  } catch (err) {
    res.status(400).send({ error: err });
  }
}

export async function postLogin(req, res) {
  console.log("POST student/login");
  const { email, password } = req.body;
  try {
    const student = await Student.findByCredentials(email, password);
    const token = await student.generateAuthToken();
    res.send({ student, token });
  } catch (err) {
    console.log(err);
    res.status(404).send();
  }
}

export async function postLogout(req, res) {
  console.log("POST student/logout");
  try {
    req.student.tokens = req.student.tokens.filter(
      (token) => token.token !== req.student.token
    );
    await req.student.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
}

export async function postLogoutAll(req, res) {
  console.log("POST student/logoutAll");
  try {
    req.student.tokens = [];
    await req.student.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
}

export async function getMyUnis(req, res) {
  const limit = req.query.limit || 12;
  const skip = req.query.skip ? req.query.skip * limit : 0;

  console.log(`GET student/myUnis/`, `skip=${skip}`, `limit=${limit}`);

  const uniIdList = req.student.uniList.map((uni) => uni);

  const totalPages = Math.ceil(req.student.uniList.length / limit);
  try {
    const uniList = await Uni.find({
      _id: {
        $in: uniIdList,
      },
    })
      .skip(skip)
      .limit(limit);

    const sendList = [];
    uniList.forEach((uni) => {
      let temp = uni.toJSON();
      temp.isAdded = true;
      sendList.push(temp);
    });
    res.send({ uniList: sendList, totalPages });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

export async function getUniListLength(req, res) {
  console.log("GET student/uniListLength");
  try {
    res.send({ length: req.student.uniList.length });
  } catch (err) {
    console.log(err);
  }
}

function checkSimilarity(inp, name) {
  console.log(inp, name);

  inp = inp.toLowerCase();
  name = name.toLowerCase();
  console.log(inp, name);
  if (inp.length > name.length) {
    return false;
  }

  for (let i = 0; i < inp.length; i++) {
    if (inp[i] == name[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function filtersfunc(inp, uni) {
  let [loc, rank, prog, feeMin, feeMax, month, year] = inp;
  let flag = true;
  // console.log("month:", );
  // console.log("year:", );

  if (loc != "" && uni.city && loc.toLowerCase() != uni.city.toLowerCase())
    flag = false;
  if (rank != "" && uni.ranking && rank != uni.ranking) flag = false;
  if (feeMax != "" && uni.fee && uni.fee > parseInt(feeMax)) flag = false;
  if (feeMin != "" && uni.fee && uni.fee < parseInt(feeMin)) flag = false;
  if (month != "Select" && month != uni.deadline.getMonth()) flag = false;
  if (year != "Select" && year != uni.deadline.getFullYear()) flag = false;

  let loopFlag = false;
  if (prog != "") {
    for (let i = 0; i < uni.programsOffered.length; i++) {
      loopFlag = loopFlag || checkSimilarity(prog, uni.programsOffered[i]);
    }
  } else {
    loopFlag = true;
  }
  console.log(flag, loopFlag);

  return flag && loopFlag;
}

export async function getUniList(req, res) {
  // console.log("here");
  const limit = req.query.limit || 12;
  const skip = req.query.skip ? req.query.skip * limit : 0;
  const uniCount = await Uni.countDocuments();
  const totalPages = Math.ceil(uniCount / limit);
  const inputs = req.query.input;
  const num = parseInt(req.query.nums);
  // const num = 0;
  console.log("num:", num);

  try {
    const uniList = await Uni.find().skip(skip).limit(limit);
    // console.log("unilist:", uniList);
    const sendList1 = [];

    // uniList.forEach((uni) => {
    //     let temp = uni.toJSON();
    //     temp.isAdded = req.student.uniList.includes(uni._id.toString())
    //         ? true
    //         : false;
    //     sendList1.push(temp);
    // });

    uniList.forEach((uni) => {
      let temp = uni.toJSON();
      // temp.isAdded = true;
      temp.isAdded = req.student.uniList.includes(uni._id.toString())
        ? true
        : false;

      console.log(inputs.split(","));
      // search conditions
      if (num === 1) {
        // console.log("inps:", typeof inputs);
        console.log(inputs.split(","));
        if (filtersfunc(inputs.split(","), uni)) {
          sendList1.push(temp);
        }
      } else if (num === 0) {
        if (checkSimilarity(inputs, uni.name)) {
          sendList1.push(temp);
        }
      }
    });
    console.log("sendList:", sendList1);
    res.send({ uniList: sendList1, totalPages });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

export async function postAddUni(req, res) {
  console.log("POST /student/addUni");

  const uniId = req.body.uniId;
  req.student.uniList.push(uniId);

  let uni;
  try {
    uni = await Uni.findOne({ _id: uniId });
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }

  uni.studentList.push(req.student._id);

  try {
    await req.student.save();
    await uni.save();
    res.send();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function postRemoveUni(req, res) {
  console.log("POST /student/removeUni");

  req.student.uniList = req.student.uniList.filter(
    (uni) => uni.toString() !== req.body.uniId
  );

  let uni;
  try {
    uni = await Uni.findOne({ _id: req.body.uniId });
  } catch (err) {
    console.log(err);
    return res.status(404).send();
  }

  uni.studentList = uni.studentList.filter(
    (student) => student.toString() !== req.student._id.toString()
  );

  try {
    await req.student.save();
    await uni.save();
    res.send();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
