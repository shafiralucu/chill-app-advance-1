import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/movies`;

// Thunks
export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const { data } = await axios.get(API);
  return data;
});

export const addMovie = createAsyncThunk("movies/add", async (movie) => {
  const { data } = await axios.post(API, movie);
  return data;
});

export const updateMovie = createAsyncThunk("movies/update", async (movie) => {
  const { data } = await axios.put(`${API}/${movie.id}`, movie);
  return data;
});

export const deleteMovie = createAsyncThunk("movies/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

// Slice
const slice = createSlice({
  name: "movies",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchMovies.pending, (s) => { s.loading = true; s.error = null; });
    b.addCase(fetchMovies.fulfilled, (s, a) => { s.loading = false; s.list = a.payload; });
    b.addCase(fetchMovies.rejected, (s, a) => { s.loading = false; s.error = a.error.message; });

    b.addCase(addMovie.fulfilled, (s, a) => { s.list.unshift(a.payload); });
    b.addCase(updateMovie.fulfilled, (s, a) => {
      const i = s.list.findIndex((m) => String(m.id) === String(a.payload.id));
      if (i !== -1) s.list[i] = a.payload;
    });
    b.addCase(deleteMovie.fulfilled, (s, a) => {
      s.list = s.list.filter((m) => String(m.id) !== String(a.payload));
    });
  },
});

export default slice.reducer;
