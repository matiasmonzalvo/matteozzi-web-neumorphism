import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const items = [
  {
    title: 'Estructura',
    description:
      'Ofrecemos una ubicación privilegiada en el corazón de San Carlos de Bariloche para nuestra oficina matriz. Contamos con una amplia red de servicios nacionales e internacionales y colaboramos con embarcadores para garantizar una cobertura completa.'
  },
  {
    title: 'Soporte Informático',
    description:
      'Nos esforzamos por brindar servicios de excelencia en comercio internacional, integrados con sistemas informáticos clave. Utilizamos herramientas modernas como el Sistema Informático María, TARIFAR, SINTIA - ALPHA 2000 y WORKOUT. '
  }
];

export default function About() {
  return (
    <section
      className="bg-white text-black py-16 px-8 relative overflow-hidden"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto relative z-10 py-32">
        <div className="flex flex-col items-start justify-center w-[27.5%]">
          <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-4 border border-gray-600 rounded-xl">
            ¿Quienes Somos?
          </h2>
          <h1 className="text-[7.5vw] font-bold leading-[1]">Sobre Nosotros</h1>
          <p className="text-[0.9vw] text-gray-600 mt-6">
            Somos una empresa integral en el ámbito del comercio internacional,
            ofreciendo servicios de consultoría, despacho de aduanas y
            transporte aduanero. Contamos con una estructura completa y ágil,
            personal experimentado, tecnología moderna y profundo conocimiento
            de las relaciones económicas internacionales.
          </p>
        </div>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <Image
            src="/cargo.jpg"
            alt="Comercio Internacional"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[27.5%]">
          <div className="space-y-6">
            {items.map((item, index, array) => (
              <div key={index}>
                <div className="flex flex-col text-black py-6">
                  <h4 className="text-[1.75vw] font-bold">{item.title}</h4>
                  <span className="text-sm text-gray-600">
                    {item.description}
                  </span>
                </div>
                {index !== array.length - 1 && (
                  <hr className="border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
