import SignedinHeader from "@/components/header-component/signedinHeader";
import AllNotes from "@/components/home-component/all-notes";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/login");
  }
  // console.log("session", session);
  return (
    <div>
      <SignedinHeader session={session} />
      <div className="flex flex-col mb-24 space-y-2  text-white px-52 mt-10">
        <p className="font-bold text-2xl">Hello - {session?.user?.name} </p>
        <div className="w-full">
          <AllNotes token={session?.user?.token} />
        </div>
      </div>
    </div>
  );
};

export default Home;
