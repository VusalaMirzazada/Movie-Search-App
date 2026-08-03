import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";
import useDebounce from "./useDebounce";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    
useEffect(() => {
  if (!debouncedSearchTerm) {
    setMovies([]);
    return;
  }

  async function fetchMovies() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${debouncedSearchTerm}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error);
      } else {
        setMovies(data.Search || []);
      }
    } catch (err) {
      setError("Xəta baş verdi.");
    } finally {
      setLoading(false);
    }
  }

  fetchMovies();
}, [debouncedSearchTerm]);

   return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ResultsList movies={movies} 
      loading={loading}
      error={error}
      searchTerm={debouncedSearchTerm}

      />

      <Pagination />
    </div>
   );
}

export default App;