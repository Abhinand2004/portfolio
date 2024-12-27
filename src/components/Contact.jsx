import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-10 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
          rows="5"
        ></textarea>
        <button className="w-full px-4 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
