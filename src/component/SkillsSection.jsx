"use client";
import React from "react";
import { Code2, Server, Wrench, Database, Lock } from "lucide-react";

const categories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Solidity", "SQL", "Java"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Server,
    skills: ["React", "Next.js", "Express", "Django", "Hardhat"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    id: "tools",
    title: "DevOps / Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "GitHub Actions", "Figma"],
  },
  {
    id: "blockchain",
    title: "Blockchain / Web3",
    icon: Lock,
    skills: ["Solidity", "Foundry", "Rust", "IPFS", "Web3.js"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-white">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="bg-[#0f0f10] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


