export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/assets/Logo.png" alt="CHILL Logo" className="footer-logo" />
          <p>@2023 Chill All Rights Reserved.</p>
        </div>

        <div className="footer-right">
          <details className="footer-section" open>
            <summary>Genre</summary>
            <ul>
              <li>Aksi</li><li>Anak-anak</li><li>Anime</li><li>Britania</li>
            </ul>
          </details>

          <details className="footer-section" open>
            <summary>Genre</summary>
            <ul>
              <li>Drama</li><li>Fantasi Ilmiah &amp; Fantasi</li><li>Kejahatan</li><li>KDrama</li><li>Komedi</li>
            </ul>
          </details>

          <details className="footer-section" open>
            <summary>Genre</summary>
            <ul>
              <li>Petualangan</li><li>Perang</li><li>Romantis</li><li>Sains &amp; Alam</li><li>Thriller</li>
            </ul>
          </details>

          <details className="footer-section" open>
            <summary>Genre</summary>
            <ul>
              <li>Sains &amp; Alam</li><li>Thriller</li>
            </ul>
          </details>

          <details className="footer-section" open>
            <summary>Bantuan</summary>
            <ul>
              <li>FAQ</li><li>Kontak Kami</li><li>Privasi</li><li>Syarat &amp; Ketentuan</li>
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}
