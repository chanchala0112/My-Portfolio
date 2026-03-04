import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <h1 className="hero-title">
            Hello, I&apos;m <span className="highlight">Chanchala J Jayalath</span>
          </h1>
          <p className="hero-description">
            I build modern and professional web applications that make an impact.
            Passionate about responsive design, clean code, and performance.
          </p>
          <div className="hero-btns">
            <Link href="/Chanchala_Jayalath_Resume.pdf" className="btn-primary">
              Download CV
            </Link>
            <Link href="#projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-circle">
            <Image
              src="/hero-image.png"
              alt="Chanchala"
              width={400}
              height={400}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}