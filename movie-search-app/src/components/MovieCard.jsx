import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />

        <div className="p-3">
          <h2 className="font-semibold text-lg line-clamp-1">
            {movie.Title}
          </h2>
          <p className="text-gray-500 text-sm">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}