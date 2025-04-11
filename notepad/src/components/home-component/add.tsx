import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddNote = () => {
  return (
    <Link href="/newNote"
      className="flex items-center justify-center font-bold border rounded-full px-10 py-1 border-[#5C63FF] text-3xl cursor-pointer"
    >
      <Plus />
    </Link>
  );
};

export default AddNote;
