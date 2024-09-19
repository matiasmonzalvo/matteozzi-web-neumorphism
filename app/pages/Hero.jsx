import React from 'react'
import '../globals.css'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className='w-screen h-auto sm:h-auto sm:py-[10vw] py-[30vw] lg:h-screen lg:py-0 relative flex items-center justify-center overflow-hidden' data-scroll-section>
        <div className="w-full h-full absolute top-0 left-0 filter-shadow z-10">
        </div>
        <div className="w-full h-auto absolute top-0 left-0">
                <Image 
                    src="/hero-new.jpg" 
                    alt="Hero image" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-auto object-cover"
                    sizes="100vw"
                    priority
                    data-scroll 
                    data-scroll-speed="-3"
                />
        </div>
        <div className='w-[90%] h-auto lg:my-0 my-auto flex flex-col lg:flex-row items-center justify-center relative rounded-2xl sm:flex-col'>
            <div className="flex flex-col justify-center lg:w-[100%]  h-auto px-5 py-10 rounded-2xl z-10 text-center items-center">
                <h1 className='lg:text-[6vw] m-0 p-0 leading-[0.9] text-gray-50 w-[60%] text-center font-bold'>Matteozzi Lavilla</h1>
                <p className='mt-4 lg:text-[1.25vw] leading-[1.1] w-[47%] text-gray-100'>Simplificamos el comercio internacional a través de servicios aduaneros, logísticos y asesoría estratégica. Tu socio confiable para un éxito sin fronteras.</p>
                <div className='mt-10'>
                    <a href='#' className='px-6 py-3 opacity-100 rounded-3xl glass-btn text-white lg:text-xl'>Ponete en contacto</a>
                </div>
            </div>
        </div>
        <div className='w-full absolute bottom-0 left-0 z-50'>
        <Marquee className='opacity-100 filter-none'>
            <Image className='mr-40' src="/clientes/aerolineas.png" width={120} height={120} alt='Random'/>
            <Image className='mr-40' src="/clientes/coto.png" width={120} height={120} alt='Random'/>
            <Image className='mr-40' src="/clientes/cnea.png" width={100} height={100} alt='Random'/>
            <Image className='mr-40' src="/clientes/cruzdelsur.png" width={150} height={120} alt='Random'/>
            <Image className='mr-40' src="/clientes/abccargas.png" width={120} height={120} alt='Random'/>
            <Image className='mr-40' src="/clientes/altec.png" width={120} height={120} alt='Random'/>
            <Image className='mr-40' src="/clientes/lan.png" width={120} height={120} alt='Random'/>
        </Marquee>
        </div>
    </section>
  )
}

export default Hero
