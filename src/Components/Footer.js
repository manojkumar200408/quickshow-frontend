import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2><span className="logo-q">Q</span>uickShow</h2>
          <p>
            Watch the latest movies and book tickets easily with QuickShow.
            Enjoy seamless booking experience.
          </p>

          <div className="store-buttons">
            <button className="store-btn">Google Play</button>
            <button className="store-btn">App Store</button>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="/Home">Home</a>
          <a href="/Home">About Us</a>
          <a href="/Home">Contact</a>
          <a href="/Home">Privacy Policy</a>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>+91 98765 43210</p>
          <p>quickshow@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QuickShow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
