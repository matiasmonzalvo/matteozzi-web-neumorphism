import React from 'react'

const About = () => {
  return (
    <section className='w-screen h-auto lg:h-screen flex items-center overflow-hidden justify-center' data-scroll-section>
        <div className="w-full h-full flex items-center justify-center">
            <div className='w-[90%] h-[70%] relative flex flex-row justify-start px-0'>
              <div className='w-full flex relative flex-col'>
                <h1 className='lg:text-[6vw] font-[700] m-0 p-0 leading-[1] text-black w-[100%] text-left'>¿Quienes Somos?</h1>
                <p className='mt-4 lg:text-[1.25vw] leading-[1.1] w-[70%] text-gray-950'>Somos una empresa integral en el ámbito del comercio internacional, ofreciendo servicios de consultoría, despacho de aduanas y transporte aduanero. Contamos con una estructura completa y ágil, personal experimentado, tecnología moderna y profundo conocimiento de las relaciones económicas internacionales. Somos un eslabón esencial en la economía moderna, proporcionando una colaboración indispensable para la industria y el comercio.</p>
              </div>
              <div className='w-1/2 flex relative'>
                
              </div>
            </div>
        </div>
    </section>
  )
}

export default About
