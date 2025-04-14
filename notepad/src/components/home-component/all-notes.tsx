import React from "react";
import NoteCards from "./note-card";
import { handleFetch } from "@/lib/actions/server-functions";
import { FetchResponse, Note } from "@/type/index";
import Image from "next/image";


const AllNotes = async ({token}:{token: string}) => {
  try {
    const response: FetchResponse = await handleFetch(token);

    if (!response.success || response.data.length === 0) {
      console.log("No notes found"); 
      return <div className="flex min-h-70 w-full items-center justify-center border border-[#5C63FF] rounded-lg mt-10">
        <Image src="/images/empty.png" alt="" width={100} height={100} className="w-[20%] h-full" />
      </div>;
    }

    return (
      <div className="flex flex-wrap gap-4 mt-10">
        {response.data.map((note: Note, index: number) => (
          <NoteCards 
            key={index}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
            updatedAt={note.updatedAt}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error in AllNotes:", error);
    return <div>Error loading notes</div>;
  }
};

export default AllNotes;
