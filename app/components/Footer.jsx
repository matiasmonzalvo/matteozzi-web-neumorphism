import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-gray-300 text-black py-12 lg:py-16"
      data-scroll-section
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-2">
              Matteozzi <br />
              Lavilla
            </h2>
          </div>
          <div className="w-full lg:w-[35%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div>
                <h3 className="text-xl font-semibold mb-2">Links</h3>
                <ul className="space-y-2">
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a className="text-xs">Nosotros</a>
                  </li>
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a className="text-xs">Servicios</a>
                  </li>
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a className="text-xs">Contacto</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contacto</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <a
                      href="mailto:info@matteozzi-lavilla.com.ar"
                      className="text-xs cursor-pointer hover:underline"
                    >
                      info@matteozzi-lavilla.com.ar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">Developed by Mazzo</p>
          <p className="text-xs text-gray-500 mt-2 lg:mt-0">
            © 2024 Matteozzi Lavilla. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
