import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_LOCAL_URI);
    const connection = mongoose.connection;

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
