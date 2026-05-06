import { useState } from "react";
import axios from "axios";

import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const API_KEY = "37dd8d8e";
  const BASE_URL = "https://www.omdbapi.com/";

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (query) => {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });
    return response.data;
  };


  const getMovieDetail = async (id) => {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return response.data;
  };


  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");
    setSelectedMovie(null);

    try {
      const data = await searchMovies(query);

      if (data.Response === "False") {
        setMovies([]);
        setError("No se encontraron resultados");
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      setError("Error al buscar películas");
    }

    setLoading(false);
  };

  const handleSelect = async (id) => {
    setLoading(true);
    setError("");

    try {
      const data = await getMovieDetail(id);
      setSelectedMovie(data);
    } catch (err) {
      setError("Error al obtener el detalle");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <Title />

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !selectedMovie && movies.length > 0 && (
        <MovieList movies={movies} onSelect={handleSelect} />
      )}

      {!loading && !selectedMovie && movies.length === 0 && !error && (
        <p>Buscá una película para comenzar</p>
      )}

      {!loading && selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;