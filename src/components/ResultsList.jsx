import MovieCard from "./MovieCard";

function ResultsList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default ResultsList;