import { Schema, model } from "mongoose";
import { IUser } from "../Types/User.types";


const UserSchema = new Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
});

const User = model<IUser>("User", UserSchema);

export default User;