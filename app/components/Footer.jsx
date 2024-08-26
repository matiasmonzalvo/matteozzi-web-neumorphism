import React from 'react'
import '../globals.css'

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee] rounded-lg mt-16 lg:mt-20 mx-6 lg:mx-20" data-scroll-section>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start bg-white shadow-2xl rounded-t-2xl overflow-hidden px-5 lg:px-20 pt-10 pb-14">
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-center">
          <h2 className="text-[10vw] lg:text-[5vw] font-bold leading-[1]">Matteozzi<br/>Lavilla</h2>
          <span className="text-[4vw] lg:text-[1vw] text-black opacity-80 mt-[2vw] sm:text-center">© 2024 Matteozzi Lavilla.<br/>All Rights Reserved.</span>
        </div>
        <div className="flex flex-col items-start w-auto justify-center gap-10">
          <div className="hidden lg:block w-auto flex flex-col items-start justify-center gap-6">
            <h2 className='text-[1.5vw] font-[600]'>Menu</h2>
            <ul className='flex flex-row gap-10 items-center justify-center'>
              <a href="#" className='text-[1vw]'>Inicio</a>
              <a href="#" className='text-[1vw]'>Sobre Nosotros</a>
              <a href="#" className='text-[1vw]'>Servicios</a>
              <a href="#" className='text-[1vw]'>Nuestro Equipo</a>
              <a href="#" className='text-[1vw]'>Contactanos</a>
            </ul>
          </div>
          <div className="flex flex-row gap-1 text-[6vw] font-[600] lg:text-[1.5vw] mt-10">
            <span>Developed by</span>
            <a href="#">Mazzo</a>
          </div>
        </div>

      </div>

    </footer>
    
  )
}

export default Footer