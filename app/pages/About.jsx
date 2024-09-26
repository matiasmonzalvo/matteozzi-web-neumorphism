import Image from 'next/image';
export default function Component() {
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

  return (
    <section
      className="bg-white text-black p-4 sm:px-8 sm:pt-16 pb-8 relative overflow-hidden"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto relative z-10 py-6 sm:py-32">
        <div
          className="flex flex-col items-start justify-center w-full sm:w-[27.5%]"
          data-scroll-speed="2"
          data-scroll
        >
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            ¿Quienes Somos?
          </span>
          <h1 className="text-3xl sm:text-[7.5vw] font-bold leading-tight sm:leading-[1]">
            Sobre Nosotros
          </h1>
          <p className="text-sm sm:text-[0.9vw] text-gray-600 mt-4 sm:mt-6">
            Somos una empresa integral en el ámbito del comercio internacional,
            ofreciendo servicios de consultoría, despacho de aduanas y
            transporte aduanero. Contamos con una estructura completa y ágil,
            personal experimentado, tecnología moderna y profundo conocimiento
            de las relaciones económicas internacionales.
          </p>
        </div>

        <div
          className="sm:absolute sm:inset-0 sm:-z-10 sm:flex sm:items-center sm:justify-center"
          data-scroll
          data-scroll-speed="1"
        >
          <div className="w-full aspect-video mt-8 mb-8 sm:hidden">
            <Image
              src="/cargo.jpg"
              alt="Comercio Internacional"
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <Image
            src="/cargo.jpg"
            alt="Comercio Internacional"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-2xl hidden sm:block"
          />
        </div>

        <div className="w-full sm:w-[27.5%] sm:absolute sm:right-0 sm:top-1/2 sm:transform sm:-translate-y-1/2">
          <div
            className="space-y-6"
            data-scroll
            data-scroll-speed="-0.25"
            data-scroll-direction="horizontal"
          >
            {items.map((item, index, array) => (
              <div key={index}>
                <div className="flex flex-col text-black py-4 sm:py-6">
                  <h4 className="text-lg sm:text-[1.75vw] font-bold mb-2">
                    {item.title}
                  </h4>
                  <span className="text-xs sm:text-sm text-gray-600">
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
