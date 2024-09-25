import React, { useEffect } from 'react';
import { FaPlane, FaPlaneDeparture } from 'react-icons/fa';
import { GiAlliedStar, GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';


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
        <div className="flex flex-col w-5/12 justify-center items-start">
          <h1 className='text-[10vw] leading-[0.9] lg:text-[5vw] w-[100%] font-[700] m-0 p-0'>Explora los servicios que ofrecemos</h1>
          <span className='text-xl w-[90%] mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus iure sit iste nostrum fugit cupiditate numquam placeat dignissimos non? Similique exercitationem magnam repellat, iste libero quas aspernatur dicta cupiditate.</span>
        </div>
        <div className='w-7/12 h-full flex items-center justify-center'>
          <div className='w-full h-[60%] flex flex-row'>
            <div className='w-1/2 h-full flex flex-col justify-end items-end py-4 pr-2 gap-4'>
              <div className='border-[1px] border-neutral-300 w-full h-[47%] rounded-3xl flex flex-col gap-2'>
                <div className='w-full h-auto px-8 pt-8 flex items-center'> 
                  <div className='bg-neutral-950 w-10 h-10 flex items-center justify-center rounded-md'>
                    <GiCommercialAirplane className='text-white'/>
                  </div>
                  <h3 className='text-[32px] font-medium ml-3'>Queres volar wachin?</h3>
                </div>
                <div className='px-8'>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores, dolorum ad facilis quaerat nihil cum dolor, unde obcaecati porro distinctio voluptas, eius assumenda natus consequuntur minima quasi voluptatum delectus?</span>
                </div>
                

              </div>
              <div className='border-[1px] border-neutral-300 w-full h-[47%] rounded-3xl flex flex-col gap-2'>
                <div className='w-full h-auto px-8 pt-8 flex items-center'> 
                  <div className='bg-neutral-950 w-10 h-10 flex items-center justify-center rounded-md'>
                    <GiTruck className='text-white'/>
                  </div>
                  <h3 className='text-[32px] font-medium ml-3'>Destrucción total</h3>
                </div>
                <div className='px-8'>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores, dolorum ad facilis quaerat nihil cum dolor, unde obcaecati porro distinctio voluptas, eius assumenda natus consequuntur minima quasi voluptatum delectus?</span>
                </div>
              </div>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-start items-start py-4 pl-2 gap-4'>
              <div className='border-[1px] border-neutral-300 w-full h-[47%] rounded-3xl flex flex-col gap-2'>
              <div className='w-full h-auto px-8 pt-8 flex items-center'> 
                  <div className='bg-neutral-950 w-10 h-10 flex items-center justify-center rounded-md'>
                    <GiWorld className='text-white'/>
                  </div>
                  <h3 className='text-[32px] font-medium ml-3'>El mundo es nuestro</h3>
                </div>
                <div className='px-8'>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores, dolorum ad facilis quaerat nihil cum dolor, unde obcaecati porro distinctio voluptas, eius assumenda natus consequuntur minima quasi voluptatum delectus?</span>
                </div>
              </div>
              <div className='border-[1px] border-neutral-300 w-full h-[47%] rounded-3xl flex flex-col gap-2'>
              <div className='w-full h-auto px-8 pt-8 flex items-center'> 
                  <div className='bg-neutral-950 w-10 h-10 flex items-center justify-center rounded-md'>
                    <GiAlliedStar className='text-white'/>
                  </div>
                  <h3 className='text-[32px] font-medium ml-3'>Jaja somos cracks</h3>
                </div>
                <div className='px-8'>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores, dolorum ad facilis quaerat nihil cum dolor, unde obcaecati porro distinctio voluptas, eius assumenda natus consequuntur minima quasi voluptatum delectus?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
