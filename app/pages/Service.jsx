import React, { useEffect } from 'react';
import {
  GiCommercialAirplane,
  GiTruck,
  GiWorld,
  GiAlliedStar
} from 'react-icons/gi';

const serviceItems = [
  {
    icon: GiCommercialAirplane,
    title: 'Despachante de Aduana',
    description:
      'Ofrecemos servicios en despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.'
  },
  {
    icon: GiTruck,
    title: 'Transporte Aduanero',
    description:
      'Ofrecemos servicios de Agente de Transporte Aduanero: trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. '
  },
  {
    icon: GiWorld,
    title: 'Cobertura global',
    description:
      'Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.'
  }
];

export default function Service() {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('.service');

      elements.forEach((element, index) => {
        if (viewportWidth < 1024) {
          element.setAttribute('data-scroll-speed', '0');
        } else {
          const speed = index % 2 === 0 ? '2' : '-2';
          element.setAttribute('data-scroll-speed', speed);
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
      className="bg-white text-black p-4 sm:px-8 sm:pb-16 relative overflow-hidden"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto relative z-10 py-6 sm:py-32">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            ¿Que hacemos?
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
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-[85%]">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:h-[28vw] border border-gray-300 rounded-3xl p-6 transition duration-300 hover:shadow-lg justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
                    <item.icon
                      className="text-black text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-2xl font-bold leading-tight sm:leading-[1]">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-[0.95vw] text-gray-600 flex-grow mt-2">
                    {item.description}
                  </p>
                </div>

                <button className="w-full bg-black text-white hover:bg-cyan-600 py-2 rounded-xl mt-4 font-semibold transition duration-400">
                  Consultar →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
