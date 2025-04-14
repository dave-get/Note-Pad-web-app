import SignedinHeader from "@/components/header-component/signedinHeader";
import NewNote from "@/components/new-note-component/new-note";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";

const New = async () => {
  const session = await getServerSession(authOptions);
  if (!session){
    redirect("/api/auth/login")
  }
  return (
    <div>
      <SignedinHeader session={session}/>
      <div>
        <NewNote />
      </div>
    </div>
  );
};

export default New;
