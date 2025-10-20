import React from "react";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const schools = [
    {
      name: "IUT Paris Descartes",
      period: "2022 - 2026",
      degree: "Bachelor of Technology in Computer Science",
      details: "Application development track: design, development, validation.",
    },
    {
      name: "Lycée Janson de Sailly",
      period: "2020 - 2022",
      degree: "BAC STTD",
      details: "Digital information systems specialty.",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-white">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {schools.map((s) => (
            <div key={s.name} className="bg-[#0f0f10] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white text-lg">{s.name}</h3>
                  <p className="text-white/60 text-sm">{s.period}</p>
                </div>
              </div>
              <p className="text-white/90 text-sm">{s.degree}</p>
              <p className="text-white/70 text-sm mt-2">{s.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


