"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "var(--font-outfit)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          {/* Photo side */}
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/avatar.png"
                  alt="Vraj Patel"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Glass frame effect */}
              <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10 bg-gradient-to-br from-electric-blue/20 to-cyan/20" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className="text-2xl md:text-3xl font-semibold mb-6 relative inline-block"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Always learning. Always growing.
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan to-electric-blue" />
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm Vraj — an IT Support Specialist who believes in staying ahead of the curve. 
              While others are still figuring out yesterday's tech, I'm already exploring 
              tomorrow's. That's why I'm diving deep into <span className="text-cyan font-semibold">AI and automation</span> — 
              building workflows that make everyone more efficient.
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With 6+ years in IT support — from healthcare systems to fintech — I've seen it all. 
              But what sets me apart? I'm not just fixing computers. I'm the guy who sees a 
              repetitive problem and thinks, "How can I automate this so it never happens again?"
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-electric-blue/20 text-electric-blue text-sm font-medium">
                🤝 Outgoing Personality
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan/20 text-cyan text-sm font-medium">
                🚀 Always Learning
              </span>
              <span className="px-4 py-2 rounded-full bg-violet/20 text-violet text-sm font-medium">
                💡 Challenge Seeker
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
