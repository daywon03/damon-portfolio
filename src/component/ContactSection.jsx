"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Remplacez les identifiants par les vôtres dans EmailJS
    emailjs.send(
      'service_8ltbvi4',
      'template_8i4xdmb',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'YOUR_PUBLIC_KEY'
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        setForm({ name: "", email: "", message: "" });
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
      },
      (error) => {
        console.log("Erreur lors de l'envoi:", error.text || error);
      }
    ).finally(() => {
      setIsSending(false);
    });
  };

  const info = [
    { icon: Mail, label: "Email", value: "badamon3@gmail.com", href: "mailto:badamon3@gmail.com" },
     { icon: Phone, label: "Phone", value: "+33 7 53 54 43 11", href: "tel:+33753544311" },
     { icon: MapPin, label: "Address", value: "Paris, France", href: "https://maps.google.com" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-white">Contact</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact information (left) */}
          <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
          <h3 className="text-2xl font-bold text-white mb-4">Contact information</h3>
            <div className="space-y-4">
              {info.map((i) => {
                const Icon = i.icon;
                return (
                  <a key={i.label} href={i.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-md hover:bg-white/2 transition">
                    <div className="p-3 bg-[#0f1724] rounded-md">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{i.label}</p>
                      <p className="text-white font-medium">{i.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <hr className="my-6 border-t border-white/5" />
              <p className="text-white/60">Socials</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="p-2 bg-white/5 rounded-md">GitHub</a>
              <a href="#" className="p-2 bg-white/5 rounded-md">LinkedIn</a>
            </div>
          </div>

          {/* Formulaire (droite) */}
          <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
              <h3 className="text-2xl font-bold text-white mb-4">Contact me</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                  <label className="text-white/70 text-sm mb-1 block">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-white/70 text-sm mb-1 block">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label className="text-white/70 text-sm mb-1 block">Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90" placeholder="Your message..." required />
              </div>

              <button type="submit" disabled={isSending} className={`w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-white ${isSending ? 'bg-blue-500/70 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`}>
                <Send className={`w-4 h-4 ${isSending ? 'animate-spin' : ''}`} />
                  {isSent ? "Message sent!" : isSending ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}