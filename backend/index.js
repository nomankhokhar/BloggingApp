import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes//webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import connectDB from "./lib/connectDB.js";
import core from "cors";

const app = express();
app.use(core());
app.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:3000`);
});
