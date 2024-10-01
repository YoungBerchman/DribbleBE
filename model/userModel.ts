import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iUserData>("users", userModel);
