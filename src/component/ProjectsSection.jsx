"use client";
import React from "react";
// Using standard img tag instead of next/image
import { ExternalLink, Zap, Users } from "lucide-react";

const projects = [
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
  },
];

export default function ProjectsSection() {
  const getIcon = (type) => (/(Pro|Prof)/i.test(type) ? Users : Zap);
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
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/10">{p.type}</span>
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
                    <a href="https://github.com/daywon03" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                      <ExternalLink className="w-4 h-4" /> View more on GitHub
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


