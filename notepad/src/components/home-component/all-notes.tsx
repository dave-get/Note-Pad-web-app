import React from "react";
import NoteCards from "./note-card";

const AllNotes = () => {
  return (
    <div className="flex w-full justify-between mt-10">
      <NoteCards />
      <NoteCards />
      <NoteCards />
    </div>
  );
};

export default AllNotes;
