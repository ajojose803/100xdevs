import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/brainly')

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export const UserModel = model("User", UserSchema);