import React from "react";

export default function MovieList({
  movies = [],
  selectedId = null,
  onSelect = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p style={{ color: "#64748b" }}>No movies yet. Add one!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
      {movies.map((m) => {
        const id = String(m?.id ?? "");
        const isSelected = String(selectedId) === id;

        return (
          <li
            key={id || m.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              padding: 12,
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              background: isSelected ? "#eef2ff" : "#fff",
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>{m?.title ?? "(no title)"}</div>
              <div style={{ fontSize: 13, color: "#475569" }}>
                {(m?.genre ?? "—")} • {(m?.year ?? "—")} • ⭐ {(m?.rating ?? "—")}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" style={smallBtn} onClick={() => onSelect(id)}>
                Select
              </button>
              <button type="button" style={{ ...smallBtn, background: "#f59e0b" }} onClick={() => onEdit(id)}>
                Edit
              </button>
              <button type="button" style={{ ...smallBtn, background: "#ef4444" }} onClick={() => onDelete(id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
const smallBtn = { padding: "6px 10px", borderRadius: 8, border: 0, background: "#0ea5e9", color: "#fff", cursor: "pointer" };
