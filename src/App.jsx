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
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  setPage(1);
}, [debouncedSearchTerm]);


useEffect(() => {
  if (!debouncedSearchTerm) {
    setMovies([]);
    setTotalResults(0);
    return;
  }

  const controller = new AbortController();

  async function fetchMovies() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${debouncedSearchTerm}&page=${page}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      } else {
        setMovies(data.Search || []);
        setTotalResults(Number(data.totalResults) || 0);
      }
    } catch (err) {
      setError("Xəta baş verdi.");
    } finally {
      if (!controller.signal.aborted) {
      setLoading(false);
    }
  }
}

  fetchMovies();

  return () => controller.abort();
}, [debouncedSearchTerm, page]);

   return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ResultsList movies={movies} 
      loading={loading}
      error={error}
      searchTerm={debouncedSearchTerm}

      />

      <Pagination 
      currentPage={page}
      totalResults={totalResults}
       onPageChange={setPage} 
       />
    </div>
   );
}

export default App;