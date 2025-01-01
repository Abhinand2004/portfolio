import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBriefcase } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the correct path to firebase.js

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-20 px-10 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:items-start w-full max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-0 md:mr-10 text-teal-400 animate-jump">
          Let's Build
          <br />
          Something
          <br />
          Great Together
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto md:w-1/2 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} className="hover:text-yellow-400" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="hover:text-yellow-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className="hover:text-yellow-400" />
        </a>
        <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">
          <FaBriefcase size={32} className="hover:text-yellow-400" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
