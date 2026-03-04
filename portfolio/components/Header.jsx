import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">

      <Header />

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-r from-green-500 to-green-700 text-white">
        <h1 className="text-5xl font-bold">Hi, I'm Your Name 👋</h1>
        <p className="mt-6 text-xl">
          Full Stack Developer | IT Student
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate IT student who loves building modern web
          applications. I have experience in PHP, MySQL, and now learning
          Next.js and React to create professional web solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="p-8 bg-gray-50 shadow-lg rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Music Instrument Shop</h3>
            <p className="mt-4 text-gray-600">
              Full e-commerce system with login, cart, order management,
              and digital downloads.
            </p>
          </div>

          <div className="p-8 bg-gray-50 shadow-lg rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">EcoTracker</h3>
            <p className="mt-4 text-gray-600">
              Environmental monitoring website for tracking air and water
              pollution data.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Contact Me
        </h2>

        <p className="text-lg mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <p className="font-semibold">Email: your@email.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        © 2026 Your Name. All rights reserved.
      </footer>

    </div>
  );
}