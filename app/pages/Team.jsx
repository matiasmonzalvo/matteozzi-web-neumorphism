import React, { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;

      const firstElement = document.querySelector('[data-scroll-speed="2"]');
      const secondElement = document.querySelector('[data-scroll-speed="4"]');
      const thirdElement = document.querySelector('[data-scroll-speed="6"]');

      if (viewportWidth < 1024) {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '0');
        if (secondElement) secondElement.setAttribute('data-scroll-speed', '0');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '0');
      } else {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '2');
        if (secondElement) secondElement.setAttribute('data-scroll-speed', '4');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '6');
      }
    };

    updateScrollSpeed(); 
    window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);
  return (
    <section className='w-screen h-screen lg:h-auto flex items-center justify-center' data-scroll-section>
      <div className="flex flex-col w-full h-full lg:p-20 justify-center items-center lg:items-start">
        <div className="w-auto"><h1 className="text-[10vw] leading-[1.2] lg:text-[5vw] font-[800]">Nuestro Equipo</h1></div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full h-[65%] lg:h-full relative gap-2 mt-10">
          <div className="w-[90%] lg:w-[55%] h-full bg-white shadow-lg rounded-3xl lg:ml-[5vw] flex flex-row px-4 lg:px-10 items-center py-0 lg:py-4" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/marzorati.jpg" alt="" />
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Emiliano Matteozzi</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[55%] h-full bg-white shadow-lg rounded-3xl lg:ml-[15vw] flex flex-row px-4 lg:px-10 items-center py-0 lg:py-4" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/matteozzi.jpg" alt=""/>
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Cesar Matteozzi</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[55%] h-full bg-white shadow-lg rounded-3xl lg:ml-[25vw] flex flex-row px-4 lg:px-10 items-center py-0 lg:py-4" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/monzalvo.jpg" alt="" />
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span>CEO</span>
              <h3 className='text-[2vw] font-[700]'>Stella Lavilla</h3>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed?</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Team