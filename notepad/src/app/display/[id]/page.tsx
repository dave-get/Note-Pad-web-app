import Display from "@/components/display-components/display";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/auth-options";
import SignedinHeader from "@/components/header-component/signedinHeader";

interface PageProps {
  params: {
    id: string;
  };
}
const page = async ({ params }: PageProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/login");
  }
  return (
    <div>
      <SignedinHeader session={session} />
      <Display id={params.id} token={session?.user?.token} />
    </div>
  );
};

export default page;
