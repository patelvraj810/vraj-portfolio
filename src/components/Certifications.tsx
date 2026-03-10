"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificationsData } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "var(--font-outfit)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications <span className="gradient-text">&</span> Credentials
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="glass-card p-6 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.3)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet/20 to-electric-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-violet" />
                </div>
                <span 
                  className="text-xs text-slate-500"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <h3 
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {cert.name}
              </h3>
              
              <p className="text-sm text-slate-400 mb-3">
                {cert.issuer}
              </p>

              {/* Verify link (decorative) */}
              <div className="flex items-center gap-1 text-xs text-cyan/60 group-hover:text-cyan transition-colors">
                <ExternalLink className="w-3 h-3" />
                <span>Verify</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
