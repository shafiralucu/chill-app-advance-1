export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Duty After School</h1>
        <p>
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
          termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
        </p>
        <div className="buttons">
          <button className="btn blue">Mulai</button>
          <button className="btn grey">
            <i className="fas fa-info-circle"></i> Selengkapnya
          </button>
          <div className="btn age">18+</div>
        </div>
      </div>
      <div className="mute-icon"><i className="fas fa-volume-mute"></i></div>
    </section>
  );
}
