import useBodyClass from "../hooks/useBodyClass";

export default function Daftar() {
  useBodyClass("daftar");
  return (
    <div>
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
            <label>Konfirmasi Kata Sandi</label>
            <input type="password" placeholder="Masukkan kata sandi" required />
            <div className="link-row">
              <p className="link-text">Belum punya akun? <a className="daftar" href="#">Daftar</a></p>
              <a className="forgot-password" href="#">Lupa kata sandi?</a>
            </div>
            <button type="submit">Daftar</button>
            <p className="atau">Atau</p>
            <button className="google-login" type="button">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
              <span>Daftar dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
