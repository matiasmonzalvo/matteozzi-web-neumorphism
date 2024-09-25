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
    title: 'Agentes de Transporte Aduanero',
    description:
      'Ofrecemos servicios de Agente de Transporte Aduanero: trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.'
  },
  {
    icon: GiWorld,
    title: 'Cobertura global',
    description:
      'Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.'
  },
  {
    icon: GiAlliedStar,
    title: 'Servicio premium',
    description:
      'Ofrecemos un servicio de primera clase con atención personalizada y soluciones a medida para cada cliente.'
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
          <h1 className="text-3xl sm:text-[7.5vw] font-bold leading-tight sm:leading-[1]">
            Nuestros
            <br />
            Servicios
          </h1>
          <p className="text-sm sm:text-[0.9vw] text-gray-600 mt-4 sm:mt-6 w-[60%]">
            Descubre nuestra amplia gama de servicios diseñados para satisfacer
            tus necesidades de transporte y logística. Desde soluciones aéreas
            hasta terrestres, estamos aquí para ayudarte.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col h-[15vw] border border-gray-300 rounded-xl p-6 gap-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center">
                  <div className="border border-gray-600 w-10 h-10 flex items-center justify-center rounded-xl">
                    <item.icon
                      className="text-gray-600 text-2xl"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-[0.9vw] text-gray-600 flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
