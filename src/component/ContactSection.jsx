"use client";
import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  const info = [
    { icon: EnvelopeIcon, label: "Email", value: "badamon@gmail.com", href: "mailto:badamon@gmail.com" },
    { icon: PhoneIcon, label: "Phone", value: "+33 7 53 54 43 11", href: "tel:+33753544311" },
    { icon: MapPinIcon, label: "Address", value: "59 Avenue de Flandre, 75019 Paris", href: "https://maps.google.com/?q=59+Avenue+de+Flandre+75019+Paris" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-white">Contact Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {info.map((i) => {
              const Icon = i.icon;
              return (
                <a key={i.label} href={i.href} target={i.label === "Address" ? "_blank" : undefined} rel={i.label === "Address" ? "noopener noreferrer" : undefined} className="flex items-start gap-3 p-3 rounded-lg bg-[#0f0f10] border border-white/10 hover:shadow-lg hover:shadow-blue-500/10 transition">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/60 text-sm">{i.label}</p>
                    <p className="text-white text-sm md:text-base break-words">{i.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="bg-[#0f0f10] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-white/90 text-sm" htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm" htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm" htmlFor="message">Message</label>
              <textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your message..." required />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 text-white">
              <PaperAirplaneIcon className="w-4 h-4" /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


