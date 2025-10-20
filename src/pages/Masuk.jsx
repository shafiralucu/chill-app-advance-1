import { Link } from "react-router-dom";
import useBodyClass from "../hooks/useBodyClass";

export default function Masuk() {
  useBodyClass("masuk");

  return (
    <div className="container">
      <div className="login-card">
        <img src="/assets/Logo.png" alt="Chill Logo" />

        <div className="container_title">
          <h3>Masuk</h3>
          <h5>Selamat datang kembali!</h5>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Username</label>
          <input type="text" placeholder="Masukkan username" required />
          <label>Kata Sandi</label>
          <input type="password" placeholder="Masukkan kata sandi" required />

          <div className="link-row">
            <p className="link-text">
              Belum punya akun? <Link className="daftar" to="/daftar">Daftar</Link>
            </p>
            <a className="forgot-password" href="#">Lupa kata sandi?</a>
          </div>

          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}
