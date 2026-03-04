import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Chanchala</h2>
        <p className="footer-text">Full Stack Developer | Building modern web apps with passion 💚</p>

        <ul className="footer-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chanchala-jeewanthi-21a319282/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>

        <div className="footer-contact">
          <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p>Phone: +94 75 466 7226</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        <div className="footer-newsletter">
          <p>Subscribe to get updates:</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">© 2026 Chanchala J Jayalath. All rights reserved.</p>
      </div>
    </footer>
  );
}