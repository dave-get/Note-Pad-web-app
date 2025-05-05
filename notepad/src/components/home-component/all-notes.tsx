"use client";

import React, { useEffect, useState } from "react";
import NoteCards from "./note-card";
import { handleFetchNote } from "@/lib/actions/server-functions";
import { FetchResponse, Note } from "@/type/index";
import Image from "next/image";
import SearchBar from "./search-bar";
import AddNote from "./add";

const AllNotes = ({ token }: { token: string }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const response: FetchResponse = await handleFetchNote(token);
      if (response.success) {
        setNotes(response.data);
        setFilteredNotes(response.data);
      }
    } catch (error) {
      console.error("Error in AllNotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [token]);

  const handleNoteDelete = (deletedNoteId: string) => {
    setNotes(notes.filter((note) => note._id !== deletedNoteId));
  };

  const handleSearch = (query: string) => {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!notes.length) {
    return (
      <div>
        <div className="flex space-x-32 w-full items-center mt-10">
          <SearchBar onSearch={handleSearch} />
          <AddNote />
        </div>
        <div className="flex min-h-70 w-full items-center justify-center border border-[#5C63FF] rounded-lg mt-10">
          <Image
            src="/images/empty.png"
            alt=""
            width={100}
            height={100}
            className="w-[20%] h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex space-x-32 w-full items-center mt-10">
        <SearchBar onSearch={handleSearch} />
        <AddNote />
      </div>
      <div className="grid grid-cols-3 items-center gap-5 justify-center mt-10">
        {filteredNotes.map((note: Note, index: number) => (
          <NoteCards
            key={note._id}
            noteData={note}
            token={token}
            onDelete={handleNoteDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
