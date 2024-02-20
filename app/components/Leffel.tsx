"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

const TimetableGenerator = () => {
  const main = useRef<HTMLDivElement>(null)
  const animation = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      const time = 1.2

      animation.current = gsap
        .timeline({ repeat: -1 })
        .to("#s2", { x: -450, ease: "power2.out", duration: time })
        .to("#c4", { x: 150, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { y: -150, ease: "power2.out", duration: time })
        .to("#s1", { y: 150, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { x: -300, ease: "power2.out", duration: time })
        .to("#c4", { x: 450, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { y: 0, ease: "power2.out", duration: time })
        .to("#s1", { y: 0, ease: "power2.out", duration: time }, "-=" + time)
        .to("#c1", { x: -450, ease: "power2.out", duration: time })
        .to("#s2", { x: 0, ease: "power2.out", duration: time }, "-=" + time)
    }, main)
    return () => ctx.revert()
  }, [])

  return (
    <div className="projects" ref={main}>
      <Link href="/leffel">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#B89FFF" />
          <rect id="s3" x="150" y="375" width="150" height="150" fill="#EFEAFF" />
          <rect id="s2" x="600" y="75" width="150" height="150" fill="#6D73FF" />
          <rect id="s1" x="450" y="225" width="150" height="150" fill="#6D73FF" />
          <rect id="c1" x="600" y="225" width="150" height="150" rx="100" fill="#EFEAFF" />
          <rect id="c2" x="300" y="375" width="150" height="150" rx="100" fill="#6D73FF" />
          <rect id="c4" x="150" y="225" width="150" height="150" rx="100" fill="#EFEAFF" />
          <rect id="c3" x="600" y="375" width="150" height="150" rx="100" fill="#6D73FF" />
        </svg>
      </Link>
      <h2 className="mt-2 2xl:text-[1.1em]">
        <Link href="/leffel">Original Python game {" 'Leffel'"}</Link>
      </h2>

      <p className="projectYear">2022</p>
    </div>
  )
}

export default TimetableGenerator
