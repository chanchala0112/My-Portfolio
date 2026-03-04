import Header from "../components/Header";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Your Name</h1>
          <h2>Full Stack Developer</h2>
          <p>I build modern and professional web applications.</p>

          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn-primary">Download CV</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={250}
            height={250}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am an IT student passionate about building web applications.
          I enjoy learning modern technologies and solving real-world problems.
        </p>

        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Next.js</li>
          <li>PHP & MySQL</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>Music Instrument Shop</h3>
          <p>E-commerce website with authentication and cart system.</p>
          <p><strong>Technologies:</strong> PHP, MySQL</p>
          <a href="#">GitHub Link</a>
        </div>

        <div className="project-card">
          <h3>EcoTracker</h3>
          <p>Environmental monitoring website.</p>
          <p><strong>Technologies:</strong> Next.js</p>
          <a href="#">GitHub Link</a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
        <p>GitHub: github.com/yourname</p>
      </section>

    </div>
  );
}