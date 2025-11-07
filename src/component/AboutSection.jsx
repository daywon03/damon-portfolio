import React from 'react';
import { GraduationCap, Languages as LanguagesIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: "easeOut"
    }
  })
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut"
    }
  })
};

const AboutSection = () => {
  return (
    <section id='about' className='text-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Titre animé */}
        <motion.div 
          className='text-center space-y-3 mb-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className='text-3xl md:text-4xl'>About Me</h2>
          <div className='h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6'>
          {/* Education Card */}
          <motion.div 
            className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            custom={0}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className='flex items-center gap-3'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className='p-3 bg-blue-500/10 rounded-lg'>
                <GraduationCap className='w-6 h-6 text-blue-400' />
              </div>
              <h3 className='text-white'>Education</h3>
            </motion.div>

            <div className='space-y-6'>
              <motion.div 
                className='space-y-2'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                custom={0}
              >
                <h4 className='text-base md:text-lg'>IUT Paris Descartes 75016</h4>
                <p className='text-sm text-white/60'>2022 - 2026</p>
                <span className='inline-block text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10'>
                  BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE
                </span>
                <p className='text-sm text-white/70'>Application development track: design, development, validation.</p>
              </motion.div>

              <motion.div 
                className='space-y-2'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                custom={1}
              >
                <h4 className='text-base md:text-lg'>Janson de Sailly High School 75016</h4>
                <p className='text-sm text-white/60'>2020 - 2022</p>
                <span className='inline-block text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10'>
                  BAC STI2D
                </span>
                <div className='text-sm text-white/70 space-y-1'>
                  <p>Digital information systems specialty</p>
                  <p>Graduated in 2022</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className='space-y-6'>
            {/* Languages */}
            <motion.div 
              className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-4'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={1}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className='flex items-center gap-3'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className='p-3 bg-blue-500/10 rounded-lg'>
                  <LanguagesIcon className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-white'>Languages</h3>
              </motion.div>

              <div className='space-y-3'>
                {[
                  { lang: 'English', level: 'C2 (bilingual)' },
                  { lang: 'Spanish', level: 'B2' },
                  { lang: 'French', level: 'Native' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.lang}
                    className='flex items-center justify-between'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.4 }}
                  >
                    <span>{item.lang}</span>
                    <motion.span 
                      className='text-xs px-2 py-1 rounded-md bg-blue-500/15 text-blue-200 border border-blue-500/30'
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      {item.level}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-4'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={2}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className='flex items-center gap-3'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className='p-3 bg-blue-500/10 rounded-lg'>
                  <Sparkles className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-white'>Soft Skills</h3>
              </motion.div>

              <motion.div 
                className='flex flex-wrap gap-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {['Teamwork','Adaptability','Diligence','Punctuality'].map((s, i) => (
                  <motion.span 
                    key={s} 
                    className='px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/5'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + (i * 0.05), duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
