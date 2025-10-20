import React, { useState } from "react";

export default function MovieForm({ movie, onSave, isEdit = false }) {
  const [title, setTitle] = useState(movie?.title || "");
  const [year, setYear] = useState(movie?.year || "");
  const [rating, setRating] = useState(movie?.rating || "");
  const [genre, setGenre] = useState(movie?.genre || "Drama");

  function submit(e) {
    e.preventDefault();
    const payload = {
      id: movie?.id,
      title: title.trim(),
      year: Number(year),
      rating: Number(rating),
      genre,
    };
    if (!payload.title || !payload.year || !payload.rating) {
      return alert("Please fill all fields");
    }
    onSave(payload);
    if (!isEdit) {
      setTitle("");
      setYear("");
      setRating("");
      setGenre("Drama");
    }
  }

  return (
    <form onSubmit={submit}>
      <label style={label}>Title</label>
      <input style={input} value={title} onChange={(e) => setTitle(e.target.value)} />

      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={label}>Year</label>
          <input style={input} type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={label}>Rating</label>
          <input style={input} type="number" step="0.1" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
      </div>

      <label style={label}>Genre</label>
      <select style={input} value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option>Drama</option>
        <option>Anime</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Musical</option>
        <option>Sci‑Fi</option>
        <option>Documentary</option>
      </select>

      <button type="submit" style={button}>{isEdit ? "Save Changes" : "Add Movie"}</button>
    </form>
  );
}

const label = { display: "block", fontSize: 12, color: "#475569", margin: "8px 0 6px" };
const input = { width: "100%", padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: 10 };
const button = { marginTop: 12, background: "#2563eb", color: "#fff", border: 0, padding: "10px 14px", borderRadius: 10, cursor: "pointer" };

