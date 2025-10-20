import React, { useState } from "react";

export default function AuthPanel({ currentUser, onLogin, onSignup, onLogout }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    if (mode === "login") onLogin({ username, password });
    else onSignup({ username, password });
    setUsername("");
    setPassword("");
  }

  if (currentUser) {
    return (
      <div>
        <p style={{ marginTop: 0 }}>Welcome, <b>{currentUser.username}</b> 👋</p>
        <button style={button} onClick={onLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button
          style={{ ...tab, ...(mode === "login" ? tabActive : {}) }}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          style={{ ...tab, ...(mode === "signup" ? tabActive : {}) }}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={submit}>
        <label style={label}>Username</label>
        <input style={input} value={username} onChange={(e) => setUsername(e.target.value)} />

        <label style={label}>Password</label>
        <input style={input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" style={button}>
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </form>
    </div>
  );
}

const label = { display: "block", fontSize: 12, color: "#475569", margin: "8px 0 6px" };
const input = { width: "100%", padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: 10 };
const button = { marginTop: 12, background: "#2563eb", color: "#fff", border: 0, padding: "10px 14px", borderRadius: 10, cursor: "pointer" };
const tab = { border: "1px solid #cbd5e1", padding: "6px 10px", borderRadius: 8, background: "#fff", cursor: "pointer" };
const tabActive = { background: "#111827", color: "#fff", borderColor: "#111827" };