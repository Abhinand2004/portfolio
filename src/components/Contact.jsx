import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBriefcase } from 'react-icons/fa';

// Add custom CSS for animation inside the component using styled-jsx (for scoped styling)
const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prevState => !prevState);
    }, 3000); // Loop every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-10 bg-gray-900 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:items-start w-full max-w-4xl">
        <h2
          className={`text-6xl font-extrabold text-teal-400 mb-6 md:mb-0 md:mr-10 md:text-left ${isVisible ? 'animate-fadeInOut' : ''}`}
        >
          Let's Build
          <br />
          Something
          <br />
          Great Together
        </h2>
        <form className="w-full max-w-xl mx-auto md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-teal-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-teal-400"
            rows="5"
          ></textarea>
          <button className="w-full px-4 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} className="text-white hover:text-yellow-400" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="text-white hover:text-yellow-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className="text-white hover:text-yellow-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} className="text-white hover:text-yellow-400" />
        </a>
        <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">
          <FaBriefcase size={32} className="text-white hover:text-yellow-400" />
        </a>
      </div>

      {/* Inline styling for custom animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
