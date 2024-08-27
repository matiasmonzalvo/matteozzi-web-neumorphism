"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Equipo", href: "/equipo" },
  ];

  return (
    <nav className="bg-[#eeeeee] w-full shadow-lg fixed z-[40]">
      <div className="w-full mx-auto px-[5%] lg:px-[5%]">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="font-bold text-xl leading-tight">
              Matteozzi
              <br />
              <span className="text-lg">Lavilla</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md lg:text-[1vw] text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <button className="bg-black hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition">
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-[5%] pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full text-center bg-black hover:bg-blue-500 transition text-white font-bold py-2 px-4 rounded mt-4">
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;