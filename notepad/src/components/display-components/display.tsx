import { handleGetNoteById } from "@/lib/actions/server-functions";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";
// import DisplayContentFormat from "./display-content-format";
import EditNote from "./edit-note";

const Display = async ({ id, token }: { id: string; token: string }) => {
  const note = await handleGetNoteById(id, token);

  if (!note) {
    toast.error("Note not found");
    redirect("/homePage");
  }
  return (
    <div className="px-52 mt-10">
      <EditNote note={note} />
    </div>
  );
};

export default Display;
