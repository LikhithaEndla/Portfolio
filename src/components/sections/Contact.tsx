'use client';

import React, { useState } from 'react';
import { personal } from '@/data/personal';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import { Button } from '@/components/ui/Button';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show submitted state
    // In production, integrate with Formspree or similar
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollFadeIn delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="text-dark-400 text-sm uppercase tracking-wider mb-4">
                  Get in touch
                </p>
                <p className="text-dark-200 text-lg leading-relaxed">
                  I'm always open to new opportunities, collaboration, or just a good
                  conversation about QA automation, testing strategies, or career growth.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 mt-8">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 bg-dark-800/30 border border-dark-700/50 hover:border-accent-cyan/30 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-accent-cyan/20 rounded-lg group-hover:bg-accent-cyan/30 transition-colors">
                    <FaEnvelope className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs uppercase">Email</p>
                    <p className="text-dark-100 font-medium">{personal.email}</p>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/30 border border-dark-700/50 hover:border-accent-indigo/30 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-accent-indigo/20 rounded-lg group-hover:bg-accent-indigo/30 transition-colors">
                    <FaLinkedin className="w-6 h-6 text-accent-indigo" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs uppercase">LinkedIn</p>
                    <p className="text-dark-100 font-medium">@likhitha-endla</p>
                  </div>
                </a>

                <a
                  href={`https://github.com/${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/30 border border-dark-700/50 hover:border-accent-cyan/30 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-accent-cyan/20 rounded-lg group-hover:bg-accent-cyan/30 transition-colors">
                    <FaGithub className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-xs uppercase">GitHub</p>
                    <p className="text-dark-100 font-medium">@{personal.github}</p>
                  </div>
                </a>
              </div>

              {/* Availability */}
              <div className="pt-8 border-t border-dark-800">
                <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
                  Availability
                </p>
                <p className="text-dark-100 font-medium">
                  {personal.availability}
                </p>
                <p className="text-dark-400 text-sm mt-2">
                  {personal.location}
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Contact Form */}
          <ScrollFadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-dark-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 focus:border-accent-cyan rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-300 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 focus:border-accent-cyan rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-dark-300 text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's work together"
                  className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 focus:border-accent-cyan rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-dark-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 focus:border-accent-cyan rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </Button>

              <p className="text-dark-500 text-xs text-center">
                I'll get back to you as soon as possible.
              </p>
            </form>
          </ScrollFadeIn>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
