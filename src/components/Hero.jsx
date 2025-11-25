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
      className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-gray-100 via-blue-50 to-white px-6"
    >
      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
        Hi, I’m{" "}
        <span className="text-blue-600 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Uday
        </span>
      </h1>

      {/* Divider */}
      <div className="flex justify-center mb-6">
        <span className="h-1 w-24 rounded bg-blue-300 opacity-40"></span>
      </div>

      {/* Subtitle / Tagline */}
      <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
        Civil Engineering Graduate & Full-Stack Developer
      </p>
      <p className="max-w-xl mx-auto text-lg text-gray-600 mb-6 text-justify">
        Driven by a strong foundation in geospatial analysis, remote sensing, and watershed management. Skilled in React, C#, JavaScript, and modern web technologies, with hands-on experience creating scalable applications and engineering solutions. Passionate about combining technical proficiency with real-world problem-solving—whether in web development, data analysis, or civil engineering projects.
      </p>

      {/* Download Resume Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
        <a
          href="/Resume Civil.pdf"
          download
          className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Civil Engineering Resume
        </a>
        <a
          href="/Resume CS.pdf"
          download
          className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          CS/Software Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;