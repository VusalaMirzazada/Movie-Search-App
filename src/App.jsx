import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
   
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(() => {
  async function fetchMovies() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=Batman`
      );

      const data = await response.json();

      setMovies(data.Search || []);
      setError("");
    } catch (err) {
      setError("Xəta baş verdi.");
    } finally {
      setLoading(false);
    }
  }

  fetchMovies();
}, []);

    return (

        
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar />

      <ResultsList movies={movies} />

      <Pagination />
    </div>
  );
}

export default App;