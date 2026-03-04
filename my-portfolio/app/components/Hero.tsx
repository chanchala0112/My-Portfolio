import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I&apos;m Chanchala</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build modern, responsive, and professional web applications that
            help businesses and individuals shine online.
          </p>
          <Link href="#projects">
            <button>View My Work</button>
          </Link>
        </div>

        <div className="hero-image">
          <Image
            src="/hero-image.png" // replace with your image path
            alt="Chanchala illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}