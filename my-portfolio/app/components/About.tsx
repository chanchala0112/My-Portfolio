import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="section-title">About My Journey</h2>
        <div className="hero-content"> {/* Reusing grid from hero */}
          <div className="hero-image-wrapper">
            <div className="image-circle">
              <Image
                src="/about-image.png"
                alt="Chanchala's Office"
                width={450}
                height={450}
                className="hero-img"
              />
            </div>
          </div>
          <div className="about-text-content">
            <p className="hero-description">
              I am a dedicated <strong>Full Stack Developer</strong> with a passion for building digital products that combine
              clean code with exceptional user interfaces. My journey in tech is driven by a curiosity for how things
              work and a desire to create tools that make life easier.
            </p>
            <p className="hero-description">
              With expertise in the modern web stack (React, Next.js, Node.js), I focus on performance,
              accessibility, and responsive design. When I'm not coding, you'll find me exploring
              new design trends or contributing to open-source projects.
            </p>
            <div className="hero-btns" style={{ marginTop: '2rem' }}>
              <div className="btn-secondary" style={{ cursor: 'default' }}>5+ Years Exp.</div>
              <div className="btn-secondary" style={{ cursor: 'default' }}>50+ Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
