import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-q0mwsnv-shard-00-00.vw6nese.mongodb.net:27017,ac-q0mwsnv-shard-00-01.vw6nese.mongodb.net:27017,ac-q0mwsnv-shard-00-02.vw6nese.mongodb.net:27017/?ssl=true&replicaSet=atlas-wdp5mz-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected succesfullly");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default connection;
