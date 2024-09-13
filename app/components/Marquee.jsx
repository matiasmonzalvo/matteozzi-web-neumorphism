'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../globals.css'
import Image from 'next/image'

export default function Marquee() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const marqueeInner = marquee.querySelector('.marquee__inner')
    if (!marqueeInner) return

    const marqueeContent = marqueeInner.innerHTML
    marqueeInner.innerHTML = marqueeContent + marqueeContent

    gsap.to(marqueeInner, {
      x: '-39.65%',
      ease: 'none',
      duration: 20,
      repeat: -1,
    })

    return () => {
      gsap.killTweensOf(marqueeInner)
    }
  }, [])

  return (
    <div className="absolute marquee py-1 glass-div" ref={marqueeRef}>
      <div className="marquee__inner whitespace-nowrap">
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/aerolineas.png" width={120} height={120} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/coto.png" width={120} height={120} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/cnea.png" width={100} height={100} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/cruzdelsur.png" width={150} height={120} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/abccargas.png" width={120} height={120} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/altec.png" width={120} height={120} alt='Random'/> </div>
        <div className="marquee__part inline-block mr-2"><Image src="/clientes/lan.png" width={120} height={120} alt='Random'/> </div>
      </div>
    </div>
  )
}