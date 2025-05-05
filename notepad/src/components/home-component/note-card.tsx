"use client";

import { Note } from "@/type/index";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { handleDelete } from "@/lib/actions/server-functions";
import { toast } from "sonner";

const NoteCards = ({
  noteData,
  token,
  onDelete,
}: {
  noteData: Note;
  token: string;
  onDelete: (deletedNoteId: string) => void;
}) => {
  const [safeHTML, setSafeHTML] = useState("");
  const content = noteData.content;
  useEffect(() => {
    if (typeof content === "string") {
      setSafeHTML(DOMPurify.sanitize(content));
    }
  }, [content]);

  const date = new Date(noteData.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDeleteNote = async () => {
    try {
      const res = await handleDelete(noteData._id, token);
      if (!res.ok) {
        toast.error("Failed to delete note. Please try again.");
        return;
      }
      toast.success("Note deleted!");
      onDelete(noteData._id);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  return (
    <div className="overflow-hidden relative flex flex-col space-y-3 border p-5 w-64 h-80 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-lg">{noteData.title}</p>

        <button onClick={() => handleDeleteNote()} className="cursor-pointer">
          <Trash2 color="red" />
        </button>
      </div>
      <Link href={`/display/${noteData._id}`}>
        <div
          className="h-52 overflow-clip prose prose-invert prose prose-invert max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:my-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-2"
          dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
          {formattedDate}
        </div>
      </Link>
    </div>
  );
};

export default NoteCards;
