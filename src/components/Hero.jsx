import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative px-4">
      <Navbar />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-purple-900/30 to-pink-900/20 blur-3xl opacity-50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center mt-20 md:mt-0">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          HELLO, I AM{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            DEVARSHI TAMBULKAR
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">Nice to meet you!</p>
        <p className="max-w-2xl mx-auto text-xl text-white font-medium leading-relaxed mb-8">
          I am a passionate Full Stack Developer specializing in building exceptional digital experiences.
          Transforming ideas into elegant solutions through clean code and intuitive design.
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Show my work
        </a>
      </div>
    </section>
  );
};

export default Hero;
