import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h2 className="logo">Chanchala J Jayalath</h2>

        <ul className="nav-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Hire Me Button */}
        <Link href="#contact">
          <button className="hire-btn">Hire Me</button>
        </Link>
      </nav>
    </header>
  )
}