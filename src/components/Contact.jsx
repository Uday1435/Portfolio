import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-blue-100">
    <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 tracking-wide">
      Get In Touch
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
      {/* Contact Details */}
      <div className="flex flex-col items-start px-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Contact Details</h3>
        <div className="mb-2 text-lg text-gray-800">
          <span className="font-medium">Email:</span>
          <a href="mailto:uday.choudhary1467@outlook.com" className="ml-2 text-blue-500 hover:underline">
            uday.choudhary1467@outlook.com
          </a>
        </div>
        <div className="mb-2 text-lg text-gray-800">
          <span className="font-medium">Location:</span>
          <span className="ml-2">Pune, India</span>
        </div>
      </div>
      {/* Find Me Online */}
      <div className="flex flex-col items-start px-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Find Me Online</h3>
        <div className="flex gap-6 mb-5">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-10 w-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="GitHub" className="h-10 w-10 hover:scale-110 transition-transform" />
          </a>
          {/* Add more social icons if needed */}
        </div>
        
      </div>
    </div>
  </section>
);

export default Contact;