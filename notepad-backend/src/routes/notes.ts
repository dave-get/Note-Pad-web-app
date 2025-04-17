import { Request, Response, Router } from "express";
import { ObjectId } from "mongodb";
import { jwtAuth } from "../middleware/jwtAuth.js";
import { Note } from "../models/note.model.js";
import {
  deleteNoteValidation,
  noteValidation,
  updateNoteValidation,
} from "../middleware/validation.js";
import { User } from "../models/user.model.js";

interface AuthenticatedRequest extends Request {
  id?: string;
  user?: string;
}

const notes = Router();
notes.use(jwtAuth);

notes.get("/", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.id;

    const data = Note.find({user: userId});
    const documents = await data.exec();

    res.json({
      success: true,
      count: documents.length,
      data: documents,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});
notes.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const objectId = new ObjectId(id); 

    const data = await Note.findOne({ _id: objectId });

    if (!data) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.json(data);
  } catch (error) {
    console.error("Error finding note:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// create Note
notes.post(
  "/create-note",
  noteValidation,
  async (req: AuthenticatedRequest, res: Response) => {
    let { title, content } = req.body;
    const userId = req.id;
    try {
      const note = new Note({ title, content, user: userId });
      await note.save();
      await User.findByIdAndUpdate(userId, { $push: { notes: note._id } });
      res.send({ message: "success" });
      return
    } catch {
      console.log("Some error occured");
      res.send({ message: "Failed" });
    }
  }
);

// update Note
notes.post(
  "/update-note/:id",
  updateNoteValidation,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      console.log("Updating note for user:", req.params.id);
      const { id } = req.params;
      const { title, content } = req.body;
      const objectId = new ObjectId(id); // Convert the string ID to ObjectId

      const updateDocument = {
        $set: {
          title,
          content,
        },
      };

      const data = await Note.updateOne({ _id: objectId }, updateDocument);

      if (!data) {
        res.status(404).json({ message: "Item not found" });
        return;
      }
      res.json(data); // Send JSON response
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// delete Note
notes.delete(
  "/:id",
  deleteNoteValidation,
  async (req: Request<{ id: string }>, res: Response) => {
    try {
      console.log("Deleting note for user:", req.params.id);
      const { id } = req.params;
      const objectId = new ObjectId(id); 
      const data = await Note.deleteOne({ _id: objectId });

      if (!data) {
        res.status(404).json({ message: "Item not found" });
        return;
      }
      res.json(data);
    } catch (error) {
      console.error("Error Deleting note:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default notes;
