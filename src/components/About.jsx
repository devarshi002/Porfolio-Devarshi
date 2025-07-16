import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h2>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I'm <span className="font-semibold text-white">Devarshi Tambulkar</span>, a
          passionate <span className="text-purple-400">Full Stack Developer</span> with a strong
          foundation in front-end and back-end technologies. I love crafting
          intuitive user experiences, writing clean code, and transforming ideas
          into reality.
        </p>

        <p className="text-gray-400 mb-8">
          I specialize in building responsive web applications using
          technologies like <span className="text-purple-300">React</span>,{" "}
          <span className="text-pink-400">Node.js</span>,{" "}
          <span className="text-blue-300">MongoDB</span>, and{" "}
          <span className="text-yellow-400">Tailwind CSS</span>. With a
          problem-solving mindset and a hunger for continuous learning, I enjoy
          taking on challenging projects that push my boundaries.
        </p>

        <a
          href="/Full_Stack_developer_DevarshiTambulkar.pdf" // Make sure this file exists in the public folder
          download
          className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
