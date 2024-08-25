import React, { useEffect } from 'react';
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';

const Service = () => {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;

      const firstElement = document.querySelector('[data-scroll-speed="2"]');
      const secondElement = document.querySelector('[data-scroll-speed="0"]');
      const thirdElement = document.querySelector('[data-scroll-speed="-2"]');

      if (viewportWidth < 1024) {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '0');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '0');
      } else {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '2');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '-2');
      }
    };

    updateScrollSpeed(); // Actualiza al cargar la página
    window.addEventListener('resize', updateScrollSpeed); // Actualiza al redimensionar

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);

  return (
    <section className='w-screen h-auto flex flex-col items-center justify-center' data-scroll-section>
      <div className="flex flex-col w-[70%] justify-center items-center">
        <h1 className='text-[10vw] leading-[1.2] text-center lg:text-[5vw] font-[800] m-0 p-0'>Nuestros Servicios</h1>
      </div>
      <div className="w-full h-auto px-5 gap-2 lg:gap-0 lg:px-20 pb-20 mt-10 flex lg:flex-row flex-col justify-center items-center">
        <div className="w-full h-[95%] bg-teal-100 border-[1px] border-gray-800 rounded-2xl flex flex-col justify-center items-center py-5 lg:py-16" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
          <div className="text-[10vw] lg:text-[3.5vw] p-[2vw] rounded-full bg-black text-white">
            <GiCommercialAirplane />
          </div>
          <h2 className='mt-5 lg:mt-[1.5vw] text-[6vw] lg:text-[2.25vw] w-[80%] text-black font-[800] text-center leading-[1]'>Despachante de aduana</h2>
          <p className='w-[90%] text-center lg:text-[1.25vw] font-[400] text-black mt-4 lg:mt-[1.5vw] leading-[1.3]'>Ofrecemos despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.</p>
        </div>
        <div className="w-full h-full bg-teal-100 border-[1px] border-gray-800 rounded-2xl z-20 relative flex flex-col justify-center items-center py-5 lg:py-16" data-scroll>
          <div className="text-[10vw] lg:text-[3.5vw] p-[2vw] rounded-full bg-black text-white">
            <GiTruck />
          </div>
          <h2 className='mt-5 lg:mt-[1.5vw] text-[6vw] lg:text-[2.25vw] w-[90%] text-black font-[800] text-center leading-[1]'>Agentes de transporte aduanero</h2>
          <p className='w-[90%] text-center lg:text-[1.25vw] font-[400] text-black mt-4 lg:mt-[1.5vw] leading-[1.3]'>Ofrecemos trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.</p>
        </div>
        <div className="w-full h-[95%] bg-teal-100 border-[1px] border-gray-800 rounded-2xl flex flex-col justify-center items-center py-5 lg:py-16" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
          <div className="text-[10vw] lg:text-[3.5vw] p-[2vw] rounded-full bg-black text-white">
            <GiWorld />
          </div>
          <h2 className='mt-5 lg:mt-[1.5vw] text-[6vw] lg:text-[2.25vw] w-[90%] text-black font-[800] text-center leading-[1]'>Consultoría en comercio internacional</h2>
          <p className='w-[90%] text-center lg:text-[1.25vw] font-[400] text-black mt-4 lg:mt-[1.5vw] leading-[1.3]'>Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
