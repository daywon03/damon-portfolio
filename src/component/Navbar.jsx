"use client"
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from 'lucide-react';
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#project" },
  { title: "About", path: "#about" },
  { title: "Education", path: "#education" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-10 right-10 z-50 bg-black/80 backdrop-blur border-b">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <a
          href="/"
          className="flex items-center gap-2 text-white"
        >
          <h3>BA DAMON</h3>
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-2 md:p-0 md:flex-row md:space-x-6 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default Navbar;
