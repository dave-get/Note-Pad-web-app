import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  return (
    <div className="w-[70%] flex">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border px-10 border-[#5C63FF] w-full p-2 rounded-l-4xl outline-none"
        placeholder="search here . . ."
      />
      <button
        type="button"
        className="border border-[#5C63FF] rounded-r-4xl px-4 cursor-pointer"
      >
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
