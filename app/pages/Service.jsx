import React, { useEffect } from 'react';
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';

export default function Service() {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('.service');

      elements.forEach((element) => {
        if (viewportWidth < 1024) {
          element.setAttribute('data-scroll-speed', '0');
        }
      });
    };

    updateScrollSpeed();
    window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);

  return (
    <section
      id="services"
      className="bg-white text-black p-4 sm:px-8 relative overflow-hidden"
      data-scroll-section
    >
      <div className="lg:w-[80%] mx-auto relative z-10 py-6 sm:pt-32">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            ¿Que ofrecemos?
          </span>
          <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
            Servicios
          </h1>
          <p className="text-sm lg:text-[0.9vw] text-gray-600 mt-4 sm:mt-4 md:w-[80%] lg:w-[60%]">
            Descubre nuestra amplia gama de servicios diseñados para satisfacer
            tus necesidades de transporte y logística. Desde soluciones aéreas
            hasta terrestres, estamos aquí para ayudarte.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[95%] lg:w-[90%]">
            {/* CARD1 */}
            <div
              className="service flex flex-col h-[400px] lg:h-[500px] border border-gray-300 rounded-2xl p-6 hover:shadow-lg justify-between"
              data-scroll
              data-scroll-speed="0.6"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
                  <GiCommercialAirplane
                    className="text-black text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold leading-tight sm:leading-[1]">
                  Despachante de Aduana
                </h3>
                <p className="text-sm lg:text-[0.95vw] text-gray-600 flex-grow mt-2">
                  Ofrecemos servicios especializados en despachos de
                  importación, permisos de embarque, importaciones y
                  exportaciones temporales, gestiones ante organismos oficiales,
                  asesoramiento en el área bancaria, y obtención de regímenes
                  especiales. También nos encargamos de permisos de embarque
                  para exportación, garantizando un proceso ágil y eficiente.
                </p>
              </div>
              <button className="w-full bg-black text-white hover:bg-cyan-500 py-2 rounded-xl mt-4 font-semibold transition duration-400">
                Consultar →
              </button>
            </div>
            {/* CARD2 */}
            <div
              className="service flex flex-col h-[400px] lg:h-[500px] border border-gray-300 rounded-2xl p-6 hover:shadow-lg justify-between"
              data-scroll
              data-scroll-speed="0"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
                  <GiTruck className="text-black text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold leading-tight sm:leading-[1]">
                  Transporte Aduanero
                </h3>
                <p className="text-sm lg:text-[0.95vw] text-gray-600 flex-grow mt-2">
                  Como Agente de Transporte Aduanero, proporcionamos servicios
                  de trasbordo, seguros y fletes tanto nacionales como
                  internacionales, tránsitos terrestres y aéreos, reembarcos, y
                  permisos de transporte. Asimismo, coordinamos embarques para
                  asegurar una logística eficiente y sin contratiempos.
                </p>
              </div>
              <button className="w-full bg-black text-white hover:bg-cyan-500 py-2 rounded-xl mt-4 font-semibold transition duration-400">
                Consultar →
              </button>
            </div>
            {/* CARD3 */}
            <div
              className="service flex flex-col h-[400px] lg:h-[500px] border border-gray-300 rounded-2xl p-6  hover:shadow-lg justify-between"
              data-scroll
              data-scroll-speed="-0.6"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
                  <GiWorld className="text-black text-xl" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-2xl font-bold leading-tight sm:leading-[1]">
                  Cobertura global
                </h3>
                <p className="text-sm lg:text-[0.95vw] text-gray-600 flex-grow mt-2">
                  Ofrecemos asesoría integral en comercio internacional,
                  abarcando análisis de costos, documentación, medios de pago y
                  asesoría legal aduanera. También gestionamos inscripciones
                  para importadores y exportadores, brindamos apoyo en regímenes
                  promocionales, y realizamos clasificaciones arancelarias
                  precisas.
                </p>
              </div>
              <button className="w-full bg-black text-white hover:bg-cyan-500 py-2 rounded-xl mt-4 font-semibold transition duration-400">
                Consultar →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
