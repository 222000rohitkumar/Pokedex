import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h2>⚡ Pokédex Hub</h2>

          <p>
            Explore Pokémon, discover their abilities,
            compare stats, and create your own custom
            Pokémon collection using React.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#collection">Collection</a>
            </li>

            <li>
              <a href="#add">Add Pokémon</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-tech">
          <h3>Built With</h3>

          <ul>
            <li>⚛️ React</li>
            <li>🎨 CSS3</li>
            <li>💛 JavaScript (ES6+)</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Pokédex Hub • Built with ❤️ using React
        </p>
      </div>

    </footer>
  );
}

export default Footer;