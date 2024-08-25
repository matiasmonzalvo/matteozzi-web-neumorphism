"use client";

import { useRef, useEffect, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { PaperAirplaneIcon, MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './globals.css'
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function Home() {

  const containerRef = useRef(null);



  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          breakpoint: 0,
          smooth: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
     
      <Hero/>
      <About/>
      <Service/>
      <Team/>
      <Contact/>
      <Footer/>
      </div>
    </LocomotiveScrollProvider>
  );
}
