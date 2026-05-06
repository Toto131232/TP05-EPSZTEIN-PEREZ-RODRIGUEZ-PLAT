function MovieDetail({ movie, onBack }) {
  return (
    <div className="movie-detail">
      <button onClick={onBack}>Volver</button>

      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />

      <p>Año: {movie.Year}</p>
      <p>Género: {movie.Genre || "No disponible"}</p>
      <p>Director: {movie.Director || "No disponible"}</p>
      <p>Actores: {movie.Actors || "No disponible"}</p>
      <p>Sinopsis: {movie.Plot || "No disponible"}</p>
      <p>Duración: {movie.Runtime || "No disponible"}</p>
      <p>Idioma: {movie.Language || "No disponible"}</p>
      <p>País: {movie.Country || "No disponible"}</p>
      <p>IMDb: {movie.imdbRating || "No disponible"}</p>
    </div>
  );
}

export default MovieDetail;