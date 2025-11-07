"use client";
import React from 'react';
import { CalendarDays, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full-stack Development',
    company: 'Cashflow Positif - Fintech',
    period: 'February 2025 - June 2025',
    role: 'Internship',
    bullets: [
      'Development of key features for a web platform connecting wealth management advisors with individuals.',
      'Design and implementation of secure REST APIs (Node.js, Fastify, Prisma, MySQL).',
      'Creation of database schemas, migration management and query optimization.',
      'Implementation of frontend components in React and TypeScript for user modules.',
      'Delivery of features such as custom checklists, secure authentication and notification system.',
      'Collaboration in an Agile environment (stand-ups, code reviews, Git workflow).',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Fastify', 'Prisma', 'MySQL', 'REST API'],
  },
  {
    title: 'Blockchain Projects',
    company: 'IUT Paris Descartes',
    period: '2023 - 2024',
    role: 'Academic Projects',
    bullets: [
      'Participation in CryptoZombis and Speedrun ETH for in-depth blockchain development learning.',
      'Creation of optimized smart contracts on Ethereum with Solidity.',
      'Development of DApp interfaces to interact with the blockchain.',
      'Exploration of decentralized technologies and security best practices.',
    ],
    technologies: ['Solidity', 'Hardhat', 'Web3.js', 'Ethereum', 'React', 'Remix'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-white">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        {/* Container pour toutes les cartes d'expérience */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-xl border border-white/10 p-4 md:p-6 bg-[#0b0b0b] hover:shadow-lg transition-shadow"
            >
              {/* Header Section - Responsive Layout */}
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  {/* Left Section */}
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl text-white font-semibold">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs md:text-sm">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Right Section - Stacks on mobile, aligns right on desktop */}
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-white/60">
                      <CalendarDays className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0f1724] text-white/90 text-xs w-fit">
                      {exp.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements List */}
              <ul className="space-y-2 text-white/70 text-sm md:text-base pl-4 mt-4 md:mt-6">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="list-disc">{b}</li>
                ))}
              </ul>

              {/* Divider */}
              <div className="pt-4 border-t border-white/5 mt-4 md:mt-6" />

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                {exp.technologies.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
