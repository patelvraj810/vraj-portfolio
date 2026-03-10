"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data
    alert("Thanks for reaching out! This is a demo form.");
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "var(--font-outfit)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Let&apos;s connect
            </h3>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Have a question, need technical support, or want to discuss a project? 
              I&apos;d love to hear from you. Drop me a message and I&apos;ll get back 
              to you as soon as possible.
            </p>

            {/* Contact items */}
            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 text-slate-300 hover:text-cyan transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-white">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-white">{contactInfo.linkedin}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-cyan/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="space-y-6">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <select
                    required
                    className="input-field appearance-none cursor-pointer"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="support">Technical Support</option>
                    <option value="consulting">Consulting</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-16 pt-8 border-t border-white/10 text-center text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p style={{ fontFamily: "var(--font-jetbrains)" }}>
            © 2026 Vraj Patel. Built with ☕ and code.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
