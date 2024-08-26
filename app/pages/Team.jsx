import React, { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
    const updateScrollSpeedCards = () => {
      const viewportWidth = window.innerWidth;

      const firstCard = document.querySelector('.team-card[data-scroll-speed="2"]');
      const secondCard = document.querySelector('.team-card[data-scroll-speed="4"]');
      const thirdCard = document.querySelector('.team-card[data-scroll-speed="6"]');

      if (viewportWidth < 1024) {
        if (firstCard) firstCard.setAttribute('data-scroll-speed', '0');
        if (secondCard) secondCard.setAttribute('data-scroll-speed', '0');
        if (thirdCard) thirdCard.setAttribute('data-scroll-speed', '0');
      } else {
        if (firstCard) firstCard.setAttribute('data-scroll-speed', '2');
        if (secondCard) secondCard.setAttribute('data-scroll-speed', '4');
        if (thirdCard) thirdCard.setAttribute('data-scroll-speed', '6');
      }
    };

    updateScrollSpeedCards(); 
    window.addEventListener('resize', updateScrollSpeedCards);

    return () => {
      window.removeEventListener('resize', updateScrollSpeedCards);
    };
  }, []);

  return (
      <section className='w-screen h-auto pt-20 lg:pt-0 pb-40 lg:pb-10 lg:h-auto flex items-center justify-center' data-scroll-section>
      <div className="flex flex-col w-full h-full lg:p-20 justify-center items-center lg:items-start">
        <div className="w-auto"><h1 className="text-[10vw] leading-[1.2] lg:text-[5vw] font-[800]">Nuestro Equipo</h1></div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full h-[65%] lg:h-full relative gap-2 mt-10">
          <div className="team-card w-[90%] lg:w-[55%] h-auto bg-white shadow-2xl rounded-3xl lg:ml-[5vw] flex flex-row px-4 lg:px-10 items-center py-5 lg:py-4" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/marzorati.jpg" alt="" />
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span className='m-0 p-0 leading-[1]'>CEO</span>
              <h3 className='text-[5.5vw] lg:text-[2.25vw] m-0 p-0 leading-[1] font-[700]'>Emiliano Matteozzi</h3>
              <p className='lg:text-[1.25vw] font-[400] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero aliquid non velit possimus fuga architecto necessitatibus, expedita eos quas!</p>
            </div>
          </div>
          <div className="team-card w-[90%] lg:w-[55%] h-auto bg-white shadow-2xl rounded-3xl lg:ml-[15vw] flex flex-row px-4 lg:px-10 items-center py-5 lg:py-4" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/matteozzi.jpg" alt=""/>
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span className='m-0 p-0 leading-[1]'>CEO</span>
              <h3 className='text-[5.5vw] lg:text-[2.25vw] m-0 p-0 leading-[1] font-[700]'>Cesar Matteozzi</h3>
              <p className='lg:text-[1.25vw] font-[400] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero aliquid non velit possimus fuga architecto necessitatibus, expedita eos quas!</p>
            </div>
          </div>
          <div className="team-card w-[90%] lg:w-[55%] h-auto bg-white shadow-2xl rounded-3xl lg:ml-[25vw] flex flex-row px-4 lg:px-10 items-center py-5 lg:py-4" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
            <div className="w-[30%] lg:w-[17.5%] h-auto overflow-hidden rounded-full shadow-xl">
              <img src="/monzalvo.jpg" alt="" />
            </div>
            <div className="w-[70%] lg:w-[70%] ml-[5vw] lg:ml-[2.5vw] text-black">
              <span className='m-0 p-0 leading-[1]'>CEO</span>
              <h3 className='text-[5.5vw] lg:text-[2.25vw] m-0 p-0 leading-[1] font-[700]'>Stella Lavilla</h3>
              <p className='lg:text-[1.25vw] font-[400] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero aliquid non velit possimus fuga architecto necessitatibus, expedita eos quas!</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Team;
