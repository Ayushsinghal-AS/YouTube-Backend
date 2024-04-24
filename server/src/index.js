import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });
const PORT = process.env.PORT || 8000;
const app = express();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
    throw err;
  });

// ( async() => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("err", err);
//             throw err
//         })
//         app.listen(PORT, () => {
//             console.log(`server is running on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log("error", error);
//         throw err
//     }
// })();
