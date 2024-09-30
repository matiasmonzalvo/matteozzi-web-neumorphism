'use client';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: 'hero' },
    { name: 'Nosotros', href: 'about' },
    { name: 'Servicios', href: 'services' },
    { name: 'Equipo', href: 'team' }
  ];

  return (
    <nav className="bg-transparent w-full py-6 fixed z-[40]">
      <div className="lg:w-[80%] w-[90%] mx-auto px-6 rounded-xl glass relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to={'hero'}
              smooth={true}
              duration={500}
              offset={-64}
              className="font-bold text-xl leading-tight text-white cursor-pointer"
            >
              ML
            </ScrollLink>
          </div>

          {/* Desktop menu centrado en el medio del div */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-2">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-[0.9vw] transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="hover:bg-gray-100 text-white hover:text-black flex items-center font-medium py-1.5 px-4 rounded-xl transition-colors duration-200 text-[0.9vw] cursor-pointer"
            >
              <div className="mr-2 w-2 h-2 rounded-full bg-cyan-400"></div>
              <span>Contáctanos</span>
            </ScrollLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-2`}>
        <div className="w-[90%] mx-auto rounded-xl glass overflow-hidden shadow-lg">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-64}
              className="block px-4 py-3 text-white hover:bg-white/10 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="px-4 py-3">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="w-full bg-gray-200 hover:bg-cyan-300 text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm cursor-pointer"
            >
              Contáctanos
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
