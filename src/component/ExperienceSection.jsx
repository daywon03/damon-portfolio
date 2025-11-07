import React from 'react';
import { CalendarDays, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

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

// Variantes d'animation pour le titre
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Variantes d'animation pour les cartes
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut"
    }
  })
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Titre animé */}
        <motion.div 
          className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl text-white">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </motion.div>

        {/* Container pour toutes les cartes d'expérience */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="rounded-xl border border-white/10 p-4 md:p-6 bg-[#0b0b0b] transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Header Section - Responsive Layout */}
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  {/* Left Section */}
                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-lg md:text-xl text-white font-semibold">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-xs md:text-sm">
                        {exp.company}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Section */}
                  <motion.div 
                    className="flex flex-col md:items-end gap-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 text-white/60">
                      <CalendarDays className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0f1724] text-white/90 text-xs w-fit">
                      {exp.role}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Achievements List */}
              <motion.ul 
                className="space-y-2 text-white/70 text-sm md:text-base pl-4 mt-4 md:mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
              >
                {exp.bullets.map((b, i) => (
                  <motion.li 
                    key={i} 
                    className="list-disc"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 + (i * 0.1), duration: 0.3 }}
                  >
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Divider */}
              <div className="pt-4 border-t border-white/5 mt-4 md:mt-6" />

              {/* Technologies */}
              <motion.div 
                className="flex flex-wrap gap-1.5 md:gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
              >
                {exp.technologies.map((t, i) => (
                  <motion.span 
                    key={t} 
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/90"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 + (i * 0.05), duration: 0.3 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
