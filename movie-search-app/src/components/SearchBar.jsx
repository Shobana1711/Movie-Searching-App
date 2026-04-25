import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, type);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-4 py-6">

      {/* 🔍 Search Row */}
      <div className="flex items-center gap-4">
        <input
          className="flex-1 px-5 py-3 rounded-full border border-gray-400 
          focus:ring-2 focus:ring-gray-600 outline-none shadow-sm"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-full text-white font-medium shadow
          bg-gradient-to-b from-gray-600 via-gray-700 to-black 
          hover:opacity-90 transition"
        >
          Search
        </button>
      </div>

      {/* 🎯 Filter Buttons */}
      <div className="flex gap-3 mt-6 justify-center flex-wrap">
        {["", "movie", "series", "episode"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition shadow ${
              type === t
                ? "text-white bg-gradient-to-b from-gray-600 via-gray-700 to-black"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t === "" ? "All" : t}
          </button>
        ))}
      </div>
    </form>
  );
};

export default SearchBar;