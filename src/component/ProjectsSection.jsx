"use client";
import React from "react";
// Using standard img tag instead of next/image
import { ExternalLink, Zap, Users, Github, Trophy, Brain } from "lucide-react";

const projects = [
  // Hackathon projects (translated from French)
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
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1080&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Python", "Mistral AI", "Docker", "ScaleWay"],
    githubUrl: "https://github.com/daywon03",
  },
  // Existing projects
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

export default function ProjectsSection() {
  const getIcon = (type) => {
    if (/Hackathon/i.test(type)) return Zap;
    if (/(Pro|Prof|Professional)/i.test(type)) return Users;
    return Zap;
  };
  return (
    <section id="project" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-white">Projects & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Icon = getIcon(p.type);
            return (
              <div key={p.title} className="overflow-hidden bg-[#0f0f10] border border-white/10 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition">
                <div className="relative h-48">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2">
                    {(() => {
                      // Determine badge style and icon depending on project
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
                        <span className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium ${bg} ${text}`}>
                          <BadgeIcon className="w-5 h-5" />
                          {label}
                        </span>
                      );
                    })()}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg md:text-xl text-white">{p.title}</h3>
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                    <span>{p.event}</span>
                    <span>•</span>
                    <span>{p.date}</span>
                  </div>
                  <p className="text-sm text-white/80">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a href={p.githubUrl || "https://github.com/daywon03"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white border border-white/10 px-3 py-2 rounded-md bg-[#071018] hover:bg-white/3">
                      <Github className="w-4 h-4 text-white/90" />
                      View code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


