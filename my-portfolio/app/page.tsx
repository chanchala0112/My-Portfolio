import Hero from "./components/Hero";
import Link from "next/link";
import Projects from "./components/Projects";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "Framer Motion", "Three.js", "Docker",
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS" // Duplicated for seamless scroll
];

export default function Home() {
  return (
    <div className="home-container">
      <Hero />

      {/* Tech Stack Marquee */}
      <section className="marquee-container">
        <div className="marquee-content">
          {techStack.map((tech, index) => (
            <div key={index} className="marquee-item">
              <span>✦</span> {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="featured-section">
        <div className="section-container" style={{ paddingBottom: 0 }}>
          <h2 className="section-title">Featured Work</h2>
        </div>
        {/* Pass showFullHeader={false} to avoid double titles and containers */}
        <Projects showFullHeader={false} />
        <div className="section-container" style={{ paddingTop: 0, textAlign: 'center' }}>
          <Link href="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="featured-section" style={{ background: 'none' }}>
        <div className="section-container">
          <h2 className="section-title">Why Work With Me?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance First</h3>
              <p>I build applications optimized for speed, ensuring a seamless user experience from the first click.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Design Centric</h3>
              <p>I bridge the gap between design and code, creating interfaces that are as beautiful as they are functional.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Collaborative Mindset</h3>
              <p>I believe in clear communication and working closely with clients to bring their vision to life.</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <h4>50+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>24/7</h4>
              <p>Support & Iteration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <div className="section-container">
          <h2 className="hero-title">Ready to build something <span className="highlight">amazing?</span></h2>
          <p>Let&apos;s collaborate on your next project and create a digital experience that stands out.</p>
          <div className="hero-btns" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore My Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}