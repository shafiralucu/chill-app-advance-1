import { useCallback, useEffect, useState } from "react";
import {
  apiGetMovies,
  apiCreateMovie,
  apiUpdateMovie,
  apiDeleteMovie,
} from "../services/api/movies";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all movies
  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      const data = await apiGetMovies();
      setMovies(data);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Add movie
  const addMovie = useCallback(async (movie) => {
    const created = await apiCreateMovie(movie);
    setMovies((prev) => [created, ...prev]);
  }, []);

  // Update movie
  const updateMovie = useCallback(async (movie) => {
    const updated = await apiUpdateMovie(movie.id, movie);
    setMovies((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
  }, []);

  // Delete movie
  const deleteMovie = useCallback(async (id) => {
    await apiDeleteMovie(id);
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return {
    movies,
    loading,
    error,
    fetchMovies,
    addMovie,
    updateMovie,
    deleteMovie,
  };
}
