import client from "./client";

// GET all movies
export async function apiGetMovies() {
  const { data } = await client.get("/movies");
  return data;
}

// POST (create)
export async function apiCreateMovie(movie) {
  const { data } = await client.post("/movies", movie);
  return data;
}

// PUT (update)
export async function apiUpdateMovie(id, movie) {
  const { data } = await client.put(`/movies/${id}`, movie);
  return data;
}

// DELETE
export async function apiDeleteMovie(id) {
  await client.delete(`/movies/${id}`);
  return id;
}
