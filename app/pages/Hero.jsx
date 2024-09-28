import React from 'react';
import '../globals.css';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen sm:py-[10vw] py-[30vw]  lg:py-0 relative flex items-center justify-center overflow-hidden"
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
      <div className="flex flex-col items-center text-center relative w-[90%] lg:w-[80%] h-auto my-auto z-10 gap-4">
        <h1 className="lg:w-[75%] text-[8.5vw] md:text-[5vw] leading-[1.1] font-semibold bg-gradient-to-br from-white via-white to-gray-400 text-transparent bg-clip-text">
          Tu socio confiable para un éxito sin fronteras.
        </h1>
        <p className="md:w-[45%] text-[3.5vw] md:text-[1vw] leading-[1.3] text-gray-100 tracking-wide">
          Simplificamos el comercio internacional a través de servicios
          aduaneros, logísticos y asesoría estratégica.
        </p>
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center">
          <a
            href="#contacto"
            className="border border-gray-300 text-white px-5 py-3 rounded-xl lg:text-lg text-base hover:bg-gray-300 hover:text-black transition duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
      Marquee
      {/* <div className="w-full absolute bottom-0 left-0 z-50">
        <Marquee className="opacity-100 filter-none">
          <Image
            className="mr-40"
            src="/clientes/aerolineas.png"
            width={120}
            height={120}
            alt="Aerolineas"
          />
          <Image
            className="mr-40"
            src="/clientes/coto.png"
            width={120}
            height={120}
            alt="Coto"
          />
          <Image
            className="mr-40"
            src="/clientes/cnea.png"
            width={100}
            height={100}
            alt="CNEA"
          />
          <Image
            className="mr-40"
            src="/clientes/cruzdelsur.png"
            width={150}
            height={120}
            alt="Cruz del Sur"
          />
          <Image
            className="mr-40"
            src="/clientes/abccargas.png"
            width={120}
            height={120}
            alt="ABC Cargas"
          />
          <Image
            className="mr-40"
            src="/clientes/altec.png"
            width={120}
            height={120}
            alt="Altec"
          />
          <Image
            className="mr-40"
            src="/clientes/lan.png"
            width={120}
            height={120}
            alt="LAN"
          />
        </Marquee>
      </div> */}
    </section>
  );
};

export default Hero;
