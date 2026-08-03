import { useState, useEffect } from "react";

function useFetchMovies(searchTerm, page) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (!searchTerm) {
      setMovies([]);
      setTotalResults(0);
      setError("");
      return;
    }

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}&page=${page}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
                throw new Error("Network error");
}

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
        if (err.name !== "AbortError") {
          setError("Xəta baş verdi.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [searchTerm, page]);

  return { movies, loading, error, totalResults };
}

export default useFetchMovies;