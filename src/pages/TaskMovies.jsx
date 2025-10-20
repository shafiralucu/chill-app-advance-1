import React, { useState } from "react";
import useMovies from "../hooks/useMovies";
import AuthPanel from "../components/movies/AuthPanel";
import MovieForm from "../components/movies/MovieForm";
import MovieList from "../components/movies/MovieList";
import SelectedMovie from "../components/movies/SelectedMovie";

const toId = (v) => (v == null ? null : String(v));

export default function TaskMovies() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const { movies, loading, error, addMovie, updateMovie, deleteMovie } = useMovies();

  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [editingMovieId, setEditingMovieId] = useState(null);

  const selectedMovie = movies.find((m) => String(m?.id) === String(selectedMovieId)) || null;
  const editingMovie  = movies.find((m) => String(m?.id) === String(editingMovieId)) || null;

  function handleSignup({ username, password }) {
    if (!username || !password) return alert("Please fill username & password");
    if (users.some((u) => u.username === username)) return alert("Username already exists");
    setUsers((prev) => [...prev, { id: crypto.randomUUID(), username, password }]);
    alert("Sign up success. You can login now.");
  }
  function handleLogin({ username, password }) {
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return alert("Invalid credentials or user not found");
    setCurrentUser({ id: user.id, username: user.username });
  }
  function handleLogout() { setCurrentUser(null); }

  async function onAdd(movie)   { await addMovie(movie); }
  async function onUpdate(movie){ await updateMovie(movie); setEditingMovieId(null); }
  async function onDelete(id)   {
    const idStr = toId(id);
    await deleteMovie(idStr);
    setSelectedMovieId((prev) => (String(prev) === idStr ? null : prev));
    setEditingMovieId((prev) => (String(prev) === idStr ? null : prev));
  }

  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ margin: 0, marginBottom: 4 }}>API Version</h1>

      {error && (
        <div style={{ background:"#fee2e2", border:"1px solid #ef4444", padding:12, borderRadius:8, marginBottom:12 }}>
          <b>API Error:</b> {String(error.message || error)}
        </div>
      )}

      <section style={{ display:"grid", gridTemplateColumns:"360px 1fr", gap:16, background:"#f8fafc", borderRadius:12, padding:16, border:"1px solid #e2e8f0", opacity: loading ? 0.7 : 1 }}>
        {/* LEFT */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <div style={panel}>
            <h3 style={h3}>Account</h3>
            <AuthPanel currentUser={currentUser} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} />
          </div>

          <div style={panel}>
            <h3 style={h3}>Add a Movie</h3>
            <MovieForm onSave={onAdd} />
          </div>

          {editingMovie && (
            <div style={{ ...panel, borderColor:"#f59e0b" }}>
              <h3 style={h3}>Edit Movie</h3>
              <MovieForm key={editingMovie.id} movie={editingMovie} onSave={onUpdate} isEdit />
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <div style={panel}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <h3 style={h3}>Movies {loading && <span style={{ fontSize:12, color:"#64748b" }}>(loading…)</span>}</h3>
              {selectedMovie && <span style={badge}>Selected: {selectedMovie.title}</span>}
            </div>

            <MovieList
              movies={movies}
              selectedId={toId(selectedMovieId)}
              onSelect={(id) => setSelectedMovieId(toId(id))}
              onEdit={(id) => setEditingMovieId(toId(id))}
              onDelete={(id) => onDelete(toId(id))}
            />
          </div>

          <div style={panel}>
            <h3 style={h3}>Details</h3>
            {selectedMovie ? <SelectedMovie movie={selectedMovie} /> : <p style={{ color:"#64748b" }}>Choose a movie to see details.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

const panel = { background:"#fff", border:"1px solid #e2e8f0", borderRadius:12, padding:16 };
const h3 = { margin:0, marginBottom:8 };
const badge = { fontSize:12, padding:"4px 8px", borderRadius:9999, background:"#e2e8f0" };
