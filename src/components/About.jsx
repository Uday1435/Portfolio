// About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Content */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
        Hi, I'm Uday Choudhary, a Civil Engineering student passionate about 
        technology and software development. Currently exploring ReactJS, Node.js, 
        and QGIS, with a growing interest in building secure and user-friendly web apps.
      </p>
    </section>
  );
};

export default About;