import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Abhinand | Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
