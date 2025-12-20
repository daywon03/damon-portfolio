"use client";
import React from "react";
import { Zap, Users, Github, Trophy, Brain } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Decentralized Payment System",
    type: "Hackathon",
    date: "2024",
    event: "Alephium CryptoXR",
    description:
      "Blockchain payment solution for secure transactions using smart contracts and an intuitive UI.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1080&auto=format&fit=crop",
    technologies: ["React", "Blockchain", "Ralph", "Docker", "Yarn"],
    githubUrl: "https://github.com/daywon03",
  },
  {
    title: "AI Agent for Doctolib",
    type: "Hackathon",
    date: "2024",
    event: "AI Action Summit",
    description:
      "Conversational AI agent to optimize medical appointment booking and improve patient experience.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1080&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Python", "Mistral AI", "Docker", "ScaleWay"],
    githubUrl: "https://github.com/daywon03",
  },
  {
    title: "Fintech Web Platform",
    type: "Professional Project",
    date: "2025",
    event: "Cashflow Positif",
    description:
      "Development of a comprehensive platform connecting advisors and individuals.",
    image:
      "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?q=80&w=1080&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "MySQL"],
    githubUrl: "https://github.com/daywon03",
  },
  {
    title: "Blockchain Projects",
    type: "Academic Projects",
    date: "2023 - 2024",
    event: "IUT Paris Descartes",
    description:
      "Smart contracts and DApps: security, gas optimization, and interaction UX.",
    image:
      "https://images.unsplash.com/photo-1733412505442-36cfa59a4240?q=80&w=1080&auto=format&fit=crop",
    technologies: ["Solidity", "Hardhat", "Web3.js", "Ethereum"],
    githubUrl: "https://github.com/daywon03",
  },
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ProjectsSection() {
  const getIcon = (type) => {
    if (/Hackathon/i.test(type)) return Zap;
    if (/(Pro|Prof|Professional)/i.test(type)) return Users;
    return Zap;
  };

  return (
    <section id="project" className="py-16">
      <div className="container mx-auto px-4">
        {/* Titre animé */}
        <motion.div 
          className="text-center space-y-3 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl text-white">Projects & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </motion.div>

        {/* Grid de projets avec stagger */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((p) => {
            const Icon = getIcon(p.type);
            return (
              <motion.div 
                key={p.title} 
                className="overflow-hidden bg-[#0f0f10] border border-white/10 rounded-xl transition"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="relative h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2">
                    {(() => {
                      const isHack = /hackathon/i.test(p.type);
                      const isBlockchain = p.technologies?.some((t) => /blockchain|solidity|ethereum|hardhat/i.test(t));
                      const isAI = /ai|mistral|python/i.test(p.title + ' ' + (p.technologies||[]).join(' '));

                      let BadgeIcon = Zap;
                      let label = p.type;
                      let bg = 'bg-slate-800/60';
                      let text = 'text-white/90';

                      if (isHack && isBlockchain) {
                        BadgeIcon = Trophy;
                        label = 'Hackathon Blockchain';
                        bg = 'bg-[#071633]/70';
                        text = 'text-blue-400';
                      } else if (isHack && isAI) {
                        BadgeIcon = Brain;
                        label = 'Hackathon AI';
                        bg = 'bg-[#2a1730]/70';
                        text = 'text-violet-300';
                      } else if (isHack) {
                        BadgeIcon = Zap;
                        label = 'Hackathon';
                        bg = 'bg-slate-800/60';
                        text = 'text-white/90';
                      } else if (/(Pro|Prof|Professional)/i.test(p.type)) {
                        BadgeIcon = Users;
                        label = p.type;
                        bg = 'bg-slate-800/60';
                        text = 'text-white/90';
                      }

                      return (
                        <motion.span 
                          className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium ${bg} ${text}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          <BadgeIcon className="w-5 h-5" />
                          {label}
                        </motion.span>
                      );
                    })()}
                  </div>
                </motion.div>

                <div className="p-6 space-y-4">
                  <motion.div 
                    className="flex items-start justify-between gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-lg md:text-xl text-white">{p.title}</h3>
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-2 text-xs md:text-sm text-white/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span>{p.event}</span>
                    <span>•</span>
                    <span>{p.date}</span>
                  </motion.div>

                  <motion.p 
                    className="text-sm text-white/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {p.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-1.5 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {p.technologies.map((t, i) => (
                      <motion.span 
                        key={t} 
                        className="px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (i * 0.05), duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.5)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.a 
                      href={p.githubUrl || "https://github.com/daywon03"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm text-white border border-white/10 px-3 py-2 rounded-md bg-[#071018]"
                      whileHover={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 text-white/90" />
                      View code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
