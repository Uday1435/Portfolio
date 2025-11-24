// Hero.jsx
// -------------------------
// This is your main hero section at the top of the page.
// It introduces you with a heading, short description, 
// and can later have buttons or your photo.

import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center h-screen bg-gray-100 px-6"
    >
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-500">Uday</span> 👋
      </h1>

      {/* Subtitle / Tagline */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-2">
        Civil Engineering Student & Aspiring React Developer. 
        Passionate about building web applications and learning modern tech.
      </p>

      {/* Download Resume Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
        <a
          href="/Resume Civil.pdf"
          download
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition-colors"
        >
          Civil Engineering Resume
        </a>
        <a
          href="/Resume CS.pdf"
          download
          className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition-colors"
        >
          CS/Software Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;