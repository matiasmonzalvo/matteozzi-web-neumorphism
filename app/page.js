'use client';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './globals.css';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Loader from './components/Loader';

export default function Home() {
  const containerRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            breakpoint: 0,
            smooth: false
          },
          tablet: {
            breakpoint: 0,
            smooth: false
          }
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Hero />
          <About />
          <Service />
          <Team />
          <Contact />
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
