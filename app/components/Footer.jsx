'use client';

import Image from 'next/image';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Footer() {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (target) => {
    if (scroll) {
      scroll.scrollTo(`#${target}`, {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0]
      });
    }
  };

  return (
    <footer
      className="w-full border-t border-gray-300 text-black pt-12 lg:pt-16 pb-6 lg:pb-10"
      data-scroll-section
    >
      <div className="container mx-auto px-4 lg:px-8 w-[90%] lg:w-[80%]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full lg:w-[40%] mb-10 lg:mb-0 flex flex-row justify-start items-center gap-6 lg:gap-10 ">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-24 h-24 sm:w-40 sm:h-40"
            />
            <h2 className="text-3xl lg:text-4xl font-bold leading-none mb-2">
              Matteozzi <br />
              Lavilla
            </h2>
          </div>
          <div className="w-full lg:w-[35%]">
            <div className="flex flex-row gap-16">
              <div>
                <h3 className="text-md lg:text-xl font-bold mb-2">Links</h3>
                <ul className="space-y-2">
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a
                      onClick={() => handleScroll('about')}
                      className="text-sm"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a
                      onClick={() => handleScroll('services')}
                      className="text-sm"
                    >
                      Servicios
                    </a>
                  </li>
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a onClick={() => handleScroll('team')} className="text-sm">
                      Equipo
                    </a>
                  </li>
                  <li className="flex items-center hover:underline cursor-pointer">
                    <a
                      onClick={() => handleScroll('contact')}
                      className="text-sm"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-bold mb-2">Contacto</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <a
                      href="mailto:info@matteozzi-lavilla.com.ar"
                      className="text-sm cursor-pointer hover:underline"
                    >
                      info@matteozzi-lavilla.com.ar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-300 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm lg:text-xs text-gray-500 mt-2 lg:mt-0">
            © 2024 Matteozzi Lavilla. All Rights Reserved
          </p>
          <p className="text-sm lg:text-sm text-gray-500 mt-4 md:mt-0">
            Developed by Mazzo
          </p>
        </div>
      </div>
    </footer>
  );
}
