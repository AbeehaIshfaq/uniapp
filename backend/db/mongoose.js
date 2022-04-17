import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);

const connectionURL =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/uni-app-api";
mongoose.connect(connectionURL);
