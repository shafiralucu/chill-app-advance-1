import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, addMovie, updateMovie, deleteMovie } from "../store/redux/movieSlice";

export default function MoviesReduxPage() {
  const dispatch = useDispatch();
  const { list: movies, loading, error } = useSelector((s) => s.movies);
  const [form, setForm] = useState({ title: "", year: "", rating: "", genre: "Drama" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { dispatch(fetchMovies()); }, [dispatch]);

  function submit(e) {
    e.preventDefault();
    const payload = { ...form, year: Number(form.year), rating: Number(form.rating) };
    if (editingId) {
      dispatch(updateMovie({ ...payload, id: editingId }));
      setEditingId(null);
    } else {
      dispatch(addMovie(payload));
    }
    setForm({ title: "", year: "", rating: "", genre: "Drama" });
  }

  return (
    <section style={{ color: "white", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h2>Movies (Redux)</h2>
      {error && <div style={{ color: "#ef4444" }}>API Error: {error}</div>}

      <form onSubmit={submit} style={{ display: "grid", gap: 8, maxWidth: 420, marginBottom: 16 }}>
        <input placeholder="Title"  value={form.title}  onChange={(e)=>setForm({...form, title:e.target.value})}/>
        <input placeholder="Year"   value={form.year}   onChange={(e)=>setForm({...form, year:e.target.value})}/>
        <input placeholder="Rating" value={form.rating} onChange={(e)=>setForm({...form, rating:e.target.value})}/>
        <select value={form.genre} onChange={(e)=>setForm({...form, genre:e.target.value})}>
          {["Drama","Action","Comedy","Anime","Romance","Musical","Sci-Fi","Documentary"].map(g => <option key={g}>{g}</option>)}
        </select>
        <button type="submit">{editingId ? "Save Changes" : "Add Movie"}</button>
      </form>

      {loading ? "Loading…" : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map((m) => (
            <li key={m.id} style={{ background: "#111827", padding: 12, borderRadius: 8, marginBottom: 8 }}>
              <b>{m.title}</b> ({m.year}) ⭐ {m.rating} — {m.genre}
              <div style={{ display: "inline-flex", gap: 8, marginLeft: 12 }}>
                <button onClick={() => { setEditingId(m.id); setForm({ title:m.title, year:m.year, rating:m.rating, genre:m.genre }); }}>
                  Edit
                </button>
                <button onClick={() => dispatch(deleteMovie(m.id))}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
