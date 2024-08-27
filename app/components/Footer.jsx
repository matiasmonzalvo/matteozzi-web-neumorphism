import React from 'react'
import '../globals.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee] rounded-lg mt-16 lg:mt-20 mx-6 lg:mx-20" data-scroll-section>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start bg-white shadow-2xl rounded-t-2xl overflow-hidden px-5 lg:px-20 pt-10 pb-14">
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-center">
          <h2 className="text-[10vw] lg:text-[5vw] font-bold leading-[1]">Matteozzi<br/>Lavilla</h2>
          <span className="text-[4vw] lg:text-[1vw] text-black opacity-80 mt-[2vw] sm:text-center">© 2024 Matteozzi Lavilla.<br/>All Rights Reserved.</span>
        </div>
        <div className="flex flex-col items-start w-auto justify-center gap-2">
          <div className="text-gray-700 font-sans text-base leading-relaxed">
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-black" />
              <span className='text-xl'>info@matteozzi-lavilla.com.ar</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-black" />
              <span className='text-xl'>54-2944-422066</span>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-black" />
              <span className='text-xl'>San Carlos de Bariloche, Río Negro, Argentina (8400)</span>
            </div>
            <div className="flex items-center">
              <FaBuilding className="mr-2 text-black" />
              <span className='text-xl'>Mitre 125, 1er Piso, Oficinas 124-125</span>
            </div>
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