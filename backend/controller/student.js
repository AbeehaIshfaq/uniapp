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
  console.log(req.student);
  const uniIdList = req.student.uniList.map((uni) => uni.uni);
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
  let [loc, rank, prog, feeMin, feeMax] = inp;
  let flag = true;

  if (loc.toLowerCase() != uni.city.toLowerCase() && loc != "") flag = false;
  if (rank != uni.ranking && rank != "") flag = false;
  if (feeMax != "" && uni.fee > parseInt(feeMax)) flag = false;
  if (feeMin != "" && uni.fee < parseInt(feeMin)) flag = false;

  let loopFlag = false;
  if (prog != "") {
    for (let i = 0; i < uni.programsOffered.length; i++) {
      loopFlag = loopFlag || checkSimilarity(prog, uni.programsOffered[i]);
    }
  } else {
    loopFlag = true;
  }
  // console.log(flag, loopFlag);

  return flag && loopFlag;
}

export async function getUniList(req, res) {
  // console.log("here");
  const limit = req.query.limit || 12;
  const skip = req.query.skip ? req.query.skip * limit : 0;
  const totalPages = Math.ceil(req.student.uniList.length / limit);

  const inputs = req.query.input;
  const num = parseInt(req.query.nums);
  // const num = 0;
  console.log("num:", num);

  try {
    const uniList = await Uni.find().skip(skip).limit(limit);
    // console.log("unilist:", uniList);
    const sendList1 = [];
    uniList.forEach((uni) => {
      let temp = uni.toJSON();
      // temp.isAdded = true;

      console.log(inputs.split(","));
      // search conditions
      if (num === 1) {
        // let inps = strToLst(inputs);
        console.log("inps:", typeof inputs);
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
