import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/api";

export default function Home() {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies();
  }, [page, type]);

  const fetchMovies = async () => {
    try {
      const data = await searchMovies(query, page, type);

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(data.totalResults);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchMovies();
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 Gradient Header */}
      <div className="bg-gradient-to-b from-gray-600 via-gray-700 to-black text-white px-6 py-5 text-3xl font-bold shadow-md">
        Movie App
      </div>

      {/* 🔍 Search Section */}
      <div className="px-6 py-6">

        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <input
            className="flex-1 px-5 py-3 rounded-full border-2 border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none text-gray-700"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-gray-500 hover:bg-gray-600 transition text-white px-6 py-3 rounded-full font-medium shadow"
          >
            Search
          </button>
        </div>

        {/* 🎯 Filters */}
        <div className="flex gap-3 mt-6 justify-center flex-wrap">
          {["", "movie", "series", "episode"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setType(t);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                type === t
                  ? "bg-gray-500 text-white shadow"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {t === "" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      {/* ❌ Error */}
      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {/* 🎬 Movies */}
      <div className="px-6 pb-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>

      {/* 🔢 Pagination */}
      {movies.length > 0 && (
        <div className="flex justify-center pb-10">
          <Pagination
            page={page}
            total={totalResults}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </div>
  );
}