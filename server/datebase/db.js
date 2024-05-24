import mongoose from "mongoose";
const Connection = async () => {
  const URL =
    "mongodb://Charanteja:charan12@ac-unwheqw-shard-00-00.zpulszy.mongodb.net:27017,ac-unwheqw-shard-00-01.zpulszy.mongodb.net:27017,ac-unwheqw-shard-00-02.zpulszy.mongodb.net:27017/?ssl=true&replicaSet=atlas-xux2tx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone";
  try {
    mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connecting to Database", error.message);
  }
};
export default Connection;
