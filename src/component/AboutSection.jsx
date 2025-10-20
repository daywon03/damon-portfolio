import React from 'react'
import { GraduationCap, Languages as LanguagesIcon, Sparkles } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about' className='text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-3 mb-10'>
          <h2 className='text-3xl md:text-4xl'>About Me</h2>
          <div className='h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {/* Education Card */}
          <div className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='p-3 bg-blue-500/10 rounded-lg'>
                <GraduationCap className='w-6 h-6 text-blue-400' />
              </div>
              <h3 className='text-white'>Education</h3>
            </div>

            <div className='space-y-6'>
              <div className='space-y-2'>
                <h4 className='text-base md:text-lg'>IUT Paris Descartes 75016</h4>
                <p className='text-sm text-white/60'>2022 - 2026</p>
                <span className='inline-block text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10'>
                  BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE
                </span>
                <p className='text-sm text-white/70'>Application development track: design, development, validation.</p>
              </div>

              <div className='space-y-2'>
                <h4 className='text-base md:text-lg'>Lycée Janson de Sailly 75016</h4>
                <p className='text-sm text-white/60'>2020 - 2022</p>
                <span className='inline-block text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10'>
                  BAC STTD
                </span>
                <div className='text-sm text-white/70 space-y-1'>
                  <p>• Digital information systems specialty</p>
                  <p>• Graduated in 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            {/* Languages */}
            <div className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-blue-500/10 rounded-lg'>
                  <LanguagesIcon className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-white'>Languages</h3>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span>English</span>
                  <span className='text-xs px-2 py-1 rounded-md bg-blue-500/15 text-blue-200 border border-blue-500/30'>C2 (bilingual)</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Spanish</span>
                  <span className='text-xs px-2 py-1 rounded-md bg-blue-500/15 text-blue-200 border border-blue-500/30'>B2</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>French</span>
                  <span className='text-xs px-2 py-1 rounded-md bg-blue-500/15 text-blue-200 border border-blue-500/30'>Native</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className='bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-blue-500/10 rounded-lg'>
                  <Sparkles className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-white'>Soft Skills</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {['Teamwork','Adaptability','Diligence','Punctuality'].map(s => (
                  <span key={s} className='px-2 py-1 text-xs rounded-md border border-white/10 text-white/90 bg-white/5'>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection