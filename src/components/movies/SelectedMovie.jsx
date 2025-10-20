import React from "react";

export default function SelectedMovie({ movie }) {
  return (
    <div>
      <div style={{ fontWeight: 700 }}>
        {movie.title} <span style={{ fontSize: 12, marginLeft: 8, background: "#e2e8f0", padding: "2px 8px", borderRadius: 9999 }}>{movie.genre}</span>
      </div>
      <p style={{ margin: "6px 0" }}>Released: <b>{movie.year}</b> • Rating: <b>{movie.rating}</b></p>
      <p style={{ color: "#64748b" }}>This is where you could show a trailer, synopsis, cast, etc.</p>
    </div>
  );
}
