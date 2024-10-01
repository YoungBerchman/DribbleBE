import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/dribbleDB";

export const dbConfig = async () => {
  await connect(url)
    .then(() => {
      console.clear();
      console.log("db Connected ❤️❤️🚀🚀🎮");
    })
    .catch((error) => {
      return error;
    });
};
