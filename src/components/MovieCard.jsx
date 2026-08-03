function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card__poster-wrap">
      <img
      className="movie-card__poster"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300"
        }
        alt={movie.Title}
      />
      <span className="movie-card__year">{movie.Year}</span>
      </div>
      <h3 className="movie-card__title">{movie.Title}</h3>
    </div>
  );
}
export default MovieCard;