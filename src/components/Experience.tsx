"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "var(--font-outfit)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-cyan to-violet transform md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div 
                  className="glass-card p-6"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  {/* Company icon & name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue/20 to-violet/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm text-cyan">{exp.role}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <p 
                    className="text-sm text-slate-500 mb-4"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {exp.period}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-cyan mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
