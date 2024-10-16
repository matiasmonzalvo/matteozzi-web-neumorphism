'use client';

import Image from 'next/image';

const clients = [
  { name: 'Aerolineas', src: '/clientes/aerolineas.png' },
  { name: 'Coto', src: '/clientes/coto.png' },
  { name: 'CNEA', src: '/clientes/cnea.png' },
  { name: 'Lan', src: '/clientes/lan.png' },
  { name: 'Altec', src: '/clientes/altec.png' },
  { name: 'Abc Cargas', src: '/clientes/abccargas.png' },
  { name: 'Cruz del sur', src: '/clientes/cruzdelsur.png' },
  { name: 'Arsat', src: '/clientes/arsat.png' },
  { name: 'Llao Llao', src: '/clientes/llaollao.png' },
  { name: 'Cencosud', src: '/clientes/cencosud.png' },
  { name: 'Flybondi', src: '/clientes/flybondi.png' },
  { name: 'Invap', src: '/clientes/invap.png' },
  { name: 'Jet Smart', src: '/clientes/jetsmart.png' },
  { name: 'Latam', src: '/clientes/latam.png' },
  { name: 'YPF', src: '/clientes/ypf.png' }
];

export default function Partners() {
  return (
    <section
      id="clients"
      className="bg-white text-black py-16 relative min-h-screen"
      data-scroll-section
    >
      <div className="lg:w-[80%] w-[90%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-sm uppercase tracking-wider text-gray-600 py-1 px-3 border border-gray-600 rounded-xl mb-4">
          Empresas que confían en nosotros
        </span>
        <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
          Clientes
        </h1>
        <p className="w-[70%] text-sm sm:text-[0.9vw] text-gray-600 mt-4 sm:mt-6">
          Nuestra lista de clientes refleja la confianza en nuestra capacidad y
          calidad. Trabajamos directamente con equipos clave de cada
          organización y abarcamos distintos niveles de la industria,
          adaptándonos a sus necesidades específicas. Estos representan solo
          algunos de nuestros clientes más destacados.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12 lg:w-[80%] w-[90%]">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-48 h-48 bg-white border border-gray-300 rounded-xl"
            >
              <Image
                className="invert"
                src={client.src}
                width={100}
                height={100}
                alt={client.name}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  padding: '1rem'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
