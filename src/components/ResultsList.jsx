import MovieCard from "./MovieCard";

function ResultsList({ movies, loading, error, searchTerm }) {
  if (loading) {
    return <p className="state-message">Yüklənir...</p>;
  }

  if (error) {
    return <p className="state-message state-message--error">Xəta: {error}</p>;
  }

  if (!searchTerm) {
    return <p className="state-message">Film axtarmaq üçün yuxarıya yazın.</p>;
  }

  if (movies.length === 0) {
    return <p className="state-message">Heç bir nəticə tapılmadı.</p>;
  }

  return (
    <div className="results-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default ResultsList;
