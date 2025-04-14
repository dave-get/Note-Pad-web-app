import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/auth", auth);
app.use("/notes", notes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
