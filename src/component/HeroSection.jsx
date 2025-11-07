import React from "react";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const titles = ["Full stack developer", "Web3 developer"]; 
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Title */}
          <div>
            <span className="text-4xl b ">Hey, I'm Damon</span>
            <div className="mt-2 flex items-center gap-2 text-2xl">
              <span className="text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  titles[0], 1000, titles[1], 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold"
              />
            </div>              
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-xl shadow-blue-500/10">
                <img 
                  src="/image/ProfilP-copie.png" 
                  alt="BA DAMON" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>

          {/* Rest of content */}
          <div className="space-y-6">
            <p className="text-base text-muted-foreground">
              I'm a self-learner, passionate and curious to dig deeper and expand my knowledge. With a positive attitude and a growth mindset, I am ready to make meaningful contributions and achieve great things.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-5 py-2.5 rounded-full text-sm text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire me
              </button>
              <a 
                href="https://drive.google.com/file/d/127WsX608F2-Df_QJFUdOz_lKzNPZraqL/view?usp=sharing" 
                className="border-blue-500/50 hover:bg-blue-500/10 px-5 py-2.5 rounded-full border inline-flex items-center text-sm text-white/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Check Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5 text-xs pt-3">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:badamon@gmail.com">
                  badamon@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>07 53 54 43 11</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>59 Avenue de Flandre, 75019 Paris</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <a href="https://github.com/daywon03" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500/10 hover:border-blue-500/50 h-8 w-8 inline-flex items-center justify-center rounded-md border border-white/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ba-damon" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500/10 hover:border-blue-500/50 h-8 w-8 inline-flex items-center justify-center rounded-md border border-white/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-4xl">Hey, I'm Damon</span>
                <div className="flex items-center gap-2 text-2xl">
                  <span className="text-white">I am a</span>
                  <TypeAnimation
                    sequence={[
                      titles[0], 1000, titles[1], 1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold"
                  />
                </div>              
              </div>
              <p className="text-s text-muted-foreground">
                I'm a self-learner, passionate and curious to dig deeper and expand my knowledge. With a positive attitude and a growth mindset, I am ready to make meaningful contributions and achieve great things.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-5 py-2.5 rounded-full text-sm text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire me
              </button>
              <a 
                href="https://drive.google.com/file/d/127WsX608F2-Df_QJFUdOz_lKzNPZraqL/view?usp=sharing" 
                className="border-blue-500/50 hover:bg-blue-500/10 px-5 py-2.5 rounded-full border inline-flex items-center text-sm text-white/90"
              >
                Check Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5 text-xs pt-3">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:badamon@gmail.com">
                  badamon@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>07 53 54 43 11</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <a href="https://github.com/daywon03" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500/10 hover:border-blue-500/50 h-8 w-8 inline-flex items-center justify-center rounded-md border border-white/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ba-damon" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500/10 hover:border-blue-500/50 h-8 w-8 inline-flex items-center justify-center rounded-md border border-white/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-xl shadow-blue-500/10">
                <img 
                  src="/image/ProfilP-copie.png" 
                  alt="BA DAMON" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
