import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";

const app = express();
app.use(express.json());

app.use("/auth", auth);
app.use("/notes", notes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
