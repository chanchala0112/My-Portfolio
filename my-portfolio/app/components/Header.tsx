import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="logo">
          <h2>Chanchala J Jayalath</h2>
        </Link>

        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <Link href="/contact" className="hire-btn">Hire Me</Link>
      </nav>
    </header>
  );
}