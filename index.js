import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { bikelistRouter } from "./routes/bikelist.js";
import { adminRouter } from "./routes/admin.js";

dotenv.config();
// console.log(process.env);

const app = express();
const PORT = process.env.PORT;
app.use(cors());

// app.use(cors({ origin: "https://affectionate-murdock-39034f.netlify.app" }));

app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return client;
}
export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("bike rental portal");
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.use("/bikelist", bikelistRouter);


app.listen(process.env.PORT || 7000, () =>
    console.log(`Listening on port 7000...`)
  );
