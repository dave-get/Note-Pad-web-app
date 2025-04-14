import { Schema, Document } from "mongoose";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import { mongoose } from "../config/db.js";

interface IUser extends Document {
  username: string;
  email: string;
  password: string; // Add password field
  notes: mongoose.Types.ObjectId[];
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed password
  notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
});

// 🔹 Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});

// 🔹 Method to compare passwords
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>("User", UserSchema);
export { User };
