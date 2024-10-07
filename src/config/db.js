import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://tushar78628:FqsYDEZhgMONKA5P@tusharpersonal.gjlfk.mongodb.net/NodeJs"
  );
};
