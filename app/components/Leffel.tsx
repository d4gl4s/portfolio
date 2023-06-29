"use client"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"

const TimetableGenerator = () => {
  const main2 = useRef<HTMLDivElement>(null)
  const [animationAllowed, setAnimationAllowed] = useState(true)

  const playAnimation = async (time: number) => {
    animation2.current!.play()
    gsap.to(animation2.current!, {
      timeScale: 1,
      duration: 0,
      overwrite: true,
    })
    await new Promise((resolve: any) => setTimeout(resolve, time)) // 3 sec
    if (animationAllowed) {
      gsap.to(animation2.current!, {
        timeScale: 0,
        duration: 1.2,
        overwrite: true,
        onComplete() {
          animation2.current!.pause()
        },
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      playAnimation(4800)
    }, 20000)

    return () => clearInterval(interval) // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  const animation2 = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      const time = 1.2

      animation2.current = gsap
        .timeline({ repeat: -1 })

        .to("#s2", { x: -700, ease: "power2.out", duration: time })
        .to("#c4", { x: 300, ease: "power2.out", duration: time }, "-=" + time)

        .to("#c1", { y: -200, ease: "power2.out", duration: time })
        .to("#s1", { y: 200, ease: "power2.out", duration: time }, "-=" + time)

        .to("#c1", { x: -500, ease: "power2.out", duration: time })
        .to("#c4", { x: 700, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { y: 0, ease: "power2.out", duration: time })
        .to("#s1", { y: 0, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { x: -700, ease: "power2.out", duration: time })
        .to("#s2", { x: 0, ease: "power2.out", duration: time }, "-=" + time)

        .timeScale(0) //Vahalik ainult sujuva peatumise jaoks
    }, main2)
    return () => ctx.revert()
  }, [])
  const onHoverEnter = () => {
    setAnimationAllowed(false)
    animation2.current!.play()
    gsap.to(animation2.current!, {
      timeScale: 1,
      duration: 0,
      overwrite: true,
    })
  }
  const onHoverLeave = () => {
    setAnimationAllowed(true)
    gsap.to(animation2.current!, {
      timeScale: 0,
      duration: 0.2,
      overwrite: true,
      onComplete() {
        animation2.current!.pause()
      },
    })
  }
  return (
    <div className="projects" ref={main2}>
      <Link href="/leffel">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
          <rect width="900" height="600" fill="#B1A1F1" />
          <rect id="s3" y="400" width="200" height="200" fill="#D9D6FF" />
          <rect id="s2" x="700" width="200" height="200" fill="#6D73FF" />
          <rect id="s1" x="500" y="200" width="200" height="200" fill="#6D73FF" />
          <rect id="c1" x="700" y="198" width="200" height="200" rx="100" fill="#D9D6FF" />
          <rect id="c2" x="200" y="398" width="200" height="200" rx="100" fill="#6D73FF" />
          <rect id="c4" y="200" width="200" height="200" rx="100" fill="#D9D6FF" />
          <rect id="c3" x="700" y="398" width="200" height="200" rx="100" fill="#6D73FF" />
        </svg>
      </Link>
      <h2 className="mt-2 2xl:text-[1.1em]" /*  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} */>
        <Link href="/ut-timetable-generator">Original Python game {" 'Leffel'"}</Link>
      </h2>

      <p className="projectYear">2022</p>
    </div>
  )
}

export default TimetableGenerator
