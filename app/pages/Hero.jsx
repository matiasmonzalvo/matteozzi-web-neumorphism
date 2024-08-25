import React from 'react'
import '../globals.css'

const Hero = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center overflow-hidden' data-scroll-section>
        
        <div className='w-[91%] h-auto flex flex-col lg:flex-row items-center justify-start relative rounded-2xl shadow-lg sm:flex-col'>
            <div className="flex flex-col justify-center lg:w-[60%]  h-auto px-5 py-10 rounded-2xl z-10 neu-bg">
                <h1 className='lg:text-5xl font-[700] m-0 p-0 leading-[1] w-[60%] text-[10vw]'>Comercio Internacional</h1>
                <p className='mt-4 lg:text-[1.25vw] leading-[1.1] w-[100%]'>¿Estás interesado en importar-exportar o deseas una mejor alternativa para optimizar tu operativa de comercio exterior? Ya sea que estés buscando expandir tus horizontes comerciales, explorar nuevos mercados internacionales o simplemente mejorar la eficiencia y reducir costos en tus operaciones actuales, estamos acá para ayudarte.</p>
                <div className='mt-6'>
                    <a href='#' className='px-4 py-2 bg-black opacity-100 text-white rounded-md lg:text-[1.25vw] hover:bg-teal-700 transition duration-200 ease-in-out '>Ponete en contacto</a>
                </div>
            </div>
            <div className="lg:w-[42.75%] lg:h-full lg:absolute lg:right-0 z-[5] md:relative md:w-[100%] md:h-auto mt-[-10%] lg:mt-0">
                <img className='lg:w-auto lg:h-full rounded-2xl md:w-full md:h-auto' src="/hero.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
