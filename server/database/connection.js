import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URI, {
  });
};
// userNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// UseFindAndModify: false,