import React from 'react';
import '../globals.css';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen sm:py-[10vw] py-[30vw] lg:py-0 relative flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      <div className="w-full h-full absolute top-0 left-0 filter-shadow opacity-80 z-10"></div>
      <div className="w-full h-auto absolute top-0 left-0">
        <Image
          src="/mountains.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          className="w-full h-screen object-cover"
          sizes="100vw"
          priority
          data-scroll
          data-scroll-speed="-3"
        />
      </div>
      {/* Contenido central */}
      <div className="flex flex-col items-center justify-center text-center relative w-[90%] lg:w-[80%] h-auto my-auto z-20 px-4">
        <h1 className="w-full lg:w-[80%] text-[8.5vw] md:text-[5.5vw] leading-[1.1] font-semibold bg-gradient-to-br from-white via-white to-gray-400 text-transparent bg-clip-text">
          Tu socio confiable para un éxito sin fronteras.
        </h1>
        <p className="w-full lg:w-[45%] text-sm lg:text-[1vw] leading-[1.3] text-gray-100 tracking-wider mt-4">
          Simplificamos el comercio internacional a través de servicios
          aduaneros, logísticos y asesoría estratégica.
        </p>
        <div className="mt-8 lg:mt-10">
          <a
            href="#contacto"
            className="border border-gray-300 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl lg:text-[1vw] text-sm hover:bg-gray-300 hover:text-black transition duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
      {/* Marquee de imágenes */}
      <div className="w-full absolute bottom-0 left-0 z-50">
        <Marquee className="opacity-100 filter-none">
          <div className="flex items-center">
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/aerolineas.png"
              width={90}
              height={90}
              alt="Aerolineas"
              style={{
                width: 'clamp(70px, 8vw, 90px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/coto.png"
              width={90}
              height={90}
              alt="Coto"
              style={{
                width: 'clamp(70px, 8vw, 90px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/cnea.png"
              width={90}
              height={90}
              alt="CNEA"
              style={{
                width: 'clamp(70px, 8vw, 75px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/cruzdelsur.png"
              width={90}
              height={90}
              alt="Cruz del Sur"
              style={{
                width: 'clamp(70px, 10vw, 120px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/abccargas.png"
              width={90}
              height={90}
              alt="ABC Cargas"
              style={{
                width: 'clamp(70px, 8vw, 90px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/altec.png"
              width={90}
              height={90}
              alt="Altec"
              style={{
                width: 'clamp(70px, 8vw, 90px)',
                height: 'auto'
              }}
            />
            <Image
              className="lg:mr-40 mr-10"
              src="/clientes/lan.png"
              width={90}
              height={90}
              alt="LAN"
              style={{
                width: 'clamp(70px, 8vw, 90px)',
                height: 'auto'
              }}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
