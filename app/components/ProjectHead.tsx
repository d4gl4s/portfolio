"use client"
import Head from "next/head"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import CustomEase from "gsap/dist/CustomEase"
gsap.registerPlugin(CustomEase)

interface projectHead {
  name: string
  year: number
  description: string
  tools: string
}

const ProjectHead = ({ name, year, description, tools }: projectHead) => {
  const main = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()

  /* useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from("#name", { y: "100%", ease: "power3.out", duration: 1.4 })
         .from("#description", { x: 80, opacity: 0, ease: "power2.out", duration: 1.6, stagger: 0.2 }, "-=0.8") 
      .from(".socials", { y: 15, opacity: 0, ease: "power2.out", duration: 1.6, stagger: 0.4 }, "-=1.4")
    }, main)
    return () => ctx.revert()
  }, []) */
  return (
    <header ref={main} className="text-[0.9em] 2xl:text-[1em] mt-[17svh] font-medium">
      <div className="flex mb-5">
        <h1 className="font-bold text-[1.3em]  mb-4 h-4">{name}</h1>
        <span className="ml-2 font-semibold text-[0.7em] mt-[2px] yearColor">{year}</span>
      </div>
      <p id="description" className="text-justify mb-7">
        {description}
      </p>
      <p className="mb-16 yearColor">{tools}</p>
    </header>
  )
}

export default ProjectHead
