"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Globe, 
  Cloud, 
  Headphones, 
  MonitorSmartphone, 
  Shield,
  Terminal,
  Wifi,
  Server,
  Database,
  Lock
} from "lucide-react";
import { skillsData } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Globe,
  Cloud,
  Headphones,
  MonitorSmartphone,
  Shield,
};

const categoryIcons: Record<string, string[]> = {
  "Operating Systems": ["Windows", "macOS", "Linux", "ChromeOS"],
  "Networking": ["TCP/IP", "DNS", "VPN", "Wi-Fi"],
  "Cloud & Virtualization": ["AWS", "Azure", "Microsoft 365"],
  "Help Desk Software": ["Zendesk", "Freshservice", "ServiceNow"],
  "Remote Support": ["TeamViewer", "AnyDesk", "RDP"],
  "Security & Compliance": ["MFA", "BitLocker", "GDPR"],
};

export default function SkillsGrid() {
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
          Skills <span className="gradient-text">&</span> Expertise
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Terminal;
            const isLargeCard = index === 0 || index === 3;
            
            return (
              <motion.div
                key={skill.category}
                className={`glass-card p-6 ${
                  isLargeCard ? "md:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(6, 182, 212, 0.3)"
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue/20 to-cyan/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {skill.category}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="skill-tag"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
