import SignedinHeader from "@/components/header-component/signedinHeader";
import AddNote from "@/components/home-component/add";
import AllNotes from "@/components/home-component/all-notes";
import SearchBar from "@/components/home-component/search-bar";
import React from "react";

const Home = () => {
  return (
    <div>
      <SignedinHeader />
      <div className="flex flex-col mb-24 space-y-2  text-white px-52 mt-10">
        <p className="font-bold text-2xl">Hello - John </p>
        <div className="flex justify-between w-full items-center mt-10">
          <SearchBar />
          <AddNote />
        </div>
        <div className="w-full">
          <AllNotes />
        </div>
      </div>
    </div>
  );
};

export default Home;
