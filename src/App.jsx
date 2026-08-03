import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";
import useDebounce from "./useDebounce";
import useFetchMovies from "./useFetchMovies";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  const { movies, loading, error, totalResults } = useFetchMovies(
    debouncedSearchTerm,
    page
  );

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ResultsList
        movies={movies}
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