"use client";
import React from 'react';
import { CalendarDays } from 'lucide-react';

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
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-6">
          <h2 className="text-3xl md:text-4xl text-white">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl text-white font-semibold">{experiences[0].title}</h3>
              <div className="flex items-center gap-3 text-white/60 mt-2">
                <span className="inline-flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {experiences[0].company}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-white/60">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm">{experiences[0].period}</span>
              </div>
              <div className="mt-2 inline-block">
                <span className="px-3 py-1 rounded-full bg-[#0f1724] text-white/90 text-sm">{experiences[0].role}</span>
              </div>
            </div>
          </div>

          <ul className="list-disc list-inside mt-6 text-white/70 space-y-3">
            {experiences[0].bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <hr className="my-6 border-t border-white/5" />

          <div className="flex flex-wrap gap-2">
            {experiences[0].technologies.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/90">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
