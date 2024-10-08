"use client";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./globals.css";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Navigation from "./components/Navbar";
import Partners from "./pages/Partners";

export default function Home() {
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            breakpoint: 768,
            smooth: true,
          },
          tablet: {
            breakpoint: 1024,
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Navigation />
          <Hero />
          <About />
          <Service />
          <Team />
          <Partners />
          <Contact />
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
