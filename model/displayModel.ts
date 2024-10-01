import { Document, model, Schema } from "mongoose";

interface iDisplay {
  video: string;
  image: string;
  country: String;
  title: String;
  like: number;
  view: number;
  recentWord: Array<string>;
}
interface iDisplayData extends iDisplay, Document {}

const displayModel = new Schema<iDisplayData>(
  {
    video: {
      type: String,
    },
    image: {
      type: String,
    },
    country: {
      type: String,
    },
    title: {
      type: String,
    },
    like: {
      type: Number,
    },
    view: {
      type: Number,
    },
    recentWord: {
      type: [],
    },
  },
  { timestamps: true }
);
export default model<iDisplayData>("sliders", displayModel);
