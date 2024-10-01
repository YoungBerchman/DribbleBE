import { Document, model, Schema } from "mongoose";

interface iSlider {
  video: string;
  image: string;
  profession: string;
  skills: Array<string>;
}
interface iSliderData extends iSlider, Document {}

const SliderModel = new Schema<iSliderData>(
  {
    video: {
      type: String,
    },
    image: {
      type: String,
    },
    profession: {
      type: String,
    },
    skills: {
      type: [],
    },
  },
  { timestamps: true }
);
export default model<iSliderData>("sliders", SliderModel);
