import React from 'react'

const About = () => {
  return (
    <section className='w-screen h-auto lg:h-screen flex items-center justify-center pt-10 pb-[80vw] lg:pb-0 lg:pt-32' data-scroll-section>
        <div className="w-full h-full">
            <div className='w-full h-[60%] relative flex flex-row justify-center gap-4 px-5 sm:px-10 md:px-20'>
                <img src="/hero2.jpg" className='flex-1 h-auto rounded-2xl shadow-2xl' alt=""  data-scroll data-scroll-speed="6"/>
                <img src="/hero3.jpg" className='flex-1 h-auto rounded-2xl shadow-2xl' alt=""  data-scroll data-scroll-speed="4"/>
                <div className="absolute top-[40%] lg:top-[30%] left-[15%] lg:left-[30%] w-[70%] lg:w-[36.5%] h-auto px-5 py-5 bg-white rounded-3xl shadow-2xl  " data-scroll data-scroll-speed="2">
                  <h1 className='text-black text-[10vw] font-[700] lg:text-[5vw] lg:font-[800] lg:ml-2'>Nosotros</h1>
                  <p className='text-black text-[4vw] lg:text-[1.25vw] font-[400] lg:ml-2 leading-[1.2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et impedit iure molestiae itaque numquam, eaque dolores earum commodi laboriosam eos placeat deserunt consequatur aperiam similique facere repudiandae assumenda ut? Aspernatur, repudiandae at, blanditiis quo asperiores porro dolore, suscipit itaque velit ipsa atque ipsam. Culpa voluptate repellat dolorum eveniet incidunt.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
