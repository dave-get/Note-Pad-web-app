import SignedinHeader from "@/components/header-component/signedinHeader";
import NewNote from "@/components/new-note-component/new-note";
import React from "react";

const New = () => {
  return (
    <div>
      <SignedinHeader />
      <div>
        <NewNote />
      </div>
    </div>
  );
};

export default New;
