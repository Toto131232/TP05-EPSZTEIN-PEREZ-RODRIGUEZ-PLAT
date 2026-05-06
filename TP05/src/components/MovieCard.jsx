function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </div>
  );
}

export default MovieCard;