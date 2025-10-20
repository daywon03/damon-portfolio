"use client";
import React from "react";

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0b0b0c]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/70 text-sm">© {y} BA DAMON. All rights reserved.</p>
        <p className="text-white/70 text-sm">Built with ❤️ by BA DAMON</p>
      </div>
    </footer>
  );
}


