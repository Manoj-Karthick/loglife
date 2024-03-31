import mongoose from "mongoose";

export async function connect() {
  try {
    console.log(process.env);
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.Connection;

    connection.on("connected", () => {
      console.log("connected to database");
    });

    connection.on("error", (err) => {
      console.log("Error occurred while connecting to database" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
