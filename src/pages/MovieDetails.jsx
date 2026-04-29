import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  if (!movie) return <p className="p-4">Loading...</p>;
 return (
    <div className="bg-black text-white min-h-screen">
      {/* Poster Banner */}
      <div className="relative">
        <img
          src={movie.Poster}
          className="w-full h-[60vh] object-cover opacity-70"
        />

        <div className="absolute bottom-6 left-6">
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p className="text-gray-300">
            {movie.Year} • {movie.Runtime}
          </p>

          <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            ▶ Play
          </button>
        </div>
      </div>
       {/* Details */}
      <div className="p-6">
        <p className="text-gray-300 mb-4">{movie.Plot}</p>

        <p>
          <span className="text-gray-400">Actors: </span>
          {movie.Actors}
        </p>

        <p>
          <span className="text-gray-400">Director: </span>
          {movie.Director}
        </p>

        <p>
          <span className="text-gray-400">Genre: </span>
          {movie.Genre}
        </p>

        <p>
          <span className="text-gray-400">IMDB: </span>
          {movie.imdbRating}
        </p>
      </div>
    </div>
  );
}