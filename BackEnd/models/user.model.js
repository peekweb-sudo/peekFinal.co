import mongoose from "mongoose"

const UserModel = new  mongoose.Schema({
  userName: { type: String, required: true },
  Dept: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserModel)

export default User