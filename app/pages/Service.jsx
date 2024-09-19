import React, { useEffect } from 'react';
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';


const Service = () => {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;

      const firstElement = document.querySelector('.service[data-scroll-speed="2"]');
      const secondElement = document.querySelector('.service[data-scroll-speed="0"]');
      const thirdElement = document.querySelector('.service[data-scroll-speed="-2"]');

      if (viewportWidth < 1024) {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '0');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '0');
      } else {
        if (firstElement) firstElement.setAttribute('data-scroll-speed', '2');
        if (thirdElement) thirdElement.setAttribute('data-scroll-speed', '-2');
      }
    };

    updateScrollSpeed(); // Actualiza al cargar la página
    window.addEventListener('resize', updateScrollSpeed); // Actualiza al redimensionar

    return () => {
      window.removeEventListener('resize', updateScrollSpeed);
    };
  }, []);

  return (
    <section className='w-screen h-screen flex flex-row items-center justify-center' data-scroll-section>
      <div className='flex flex-row items-center justify-center w-[90%] h-full'>
        <div className="flex flex-col w-5/12 justify-center items-start bg-red-500">
          <h1 className='text-[10vw] leading-[1] lg:text-4xl w-[100%] font-[700] m-0 p-0'>Explora los servicios que ofrecemos para vos.</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus iure sit iste nostrum fugit cupiditate numquam placeat dignissimos non? Similique exercitationem magnam repellat, iste libero quas aspernatur dicta cupiditate.</span>
        </div>
        <div className='w-7/12 h-full bg-blue-500 flex items-center justify-center px-32'>
          <div className='w-full h-[60%] bg-green-400'>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
