'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'

interface LogoTiltProps {
  children: ReactNode
}

export const LogoTilt = ({ children }: LogoTiltProps) => {
  const mainRef = useRef<HTMLElement | null>(null)
  const outerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mainRef.current || !outerRef.current || !innerRef.current) return

    gsap.set(mainRef.current, { perspective: 650 })

    const outerRX = gsap.quickTo(outerRef.current, 'rotationX', {
      ease: 'power3',
    })
    const outerRY = gsap.quickTo(outerRef.current, 'rotationY', {
      ease: 'power3',
    })
    const innerX = gsap.quickTo(innerRef.current, 'x', {
      ease: 'power3',
    })
    const innerY = gsap.quickTo(innerRef.current, 'y', {
      ease: 'power3',
    })

    const handleMove = (e: PointerEvent) => {
      outerRX(gsap.utils.interpolate(20, -20, e.y / window.innerHeight))
      outerRY(gsap.utils.interpolate(-20, 20, e.x / window.innerWidth))
      innerX(gsap.utils.interpolate(-40, 40, e.x / window.innerWidth))
      innerY(gsap.utils.interpolate(-40, 40, e.y / window.innerHeight))
    }

    const handleLeave = () => {
      outerRX(0)
      outerRY(0)
      innerX(0)
      innerY(0)
    }

    const main = mainRef.current
    main.addEventListener('pointermove', handleMove)
    main.addEventListener('pointerleave', handleLeave)

    return () => {
      main.removeEventListener('pointermove', handleMove)
      main.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <main
      ref={mainRef} className='rounded-full'
      // className="flex h-screen w-full items-center justify-center"
    >
      <div ref={outerRef} className='rounded-full'>
        <div ref={innerRef} 
        className='rounded-full'
        // className="w-2/3 max-h-2/3"
        >
          {children}
        </div>
      </div>
    </main>
  )
}
