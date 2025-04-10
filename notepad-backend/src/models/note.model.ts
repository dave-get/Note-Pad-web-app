import { Document, Schema } from "mongoose";
import { mongoose } from "../config/db.js";


interface INote extends Document {
  title: string;
  content: string;
  user: mongoose.Types.ObjectId;
}

const NoteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
});

export const Note = mongoose.model<INote>("Note", NoteSchema);
