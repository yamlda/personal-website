import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title text-center text-[#000000]">Let's Connect</h1>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full text-[#FFF0F5]">
                Let's Connect
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold mb-6">Follow Me</h2>
              <div className="flex justify-center space-x-8">
                <a href="#" className="social-icon">
                  <Instagram />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin />
                </a>
                <a href="#" className="social-icon">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;