"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { FilterOption, LayoutType } from "../types/types"
import TypeAndYear from "./home/TypeAndYear"

const TimetableGenerator = ({ display, layout }: { display: boolean; layout: LayoutType }) => {
  const main = useRef<HTMLDivElement>(null)
  const animation = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      const time = 1.8
      const prefire = "-=" + time
      animation.current = gsap
        .timeline({ repeat: -1 })
        .to("#square9", { height: 187.226, y: -100, ease: "power2.out", duration: time })
        .to("#square8", { height: 87.5912, ease: "power2.out", duration: time }, prefire)

        .to("#square2", { height: 187.226, ease: "power2.out", duration: time }, "-=0.8")
        .to("#square3", { height: 87.5912, y: 100, ease: "power2.out", duration: time }, prefire)

        .to("#square6", { height: 187.226, y: -100, ease: "power2.out", duration: time }, "-=0.8")
        .to("#square5", { height: 87.5912, ease: "power2.out", duration: time }, prefire)

        .to("#square2", { height: 87.5912, ease: "power2.out", duration: time }, "-=0.8")
        .to("#square3", { height: 187.226, y: 0, ease: "power2.out", duration: time }, prefire)

        .to("#square9", { height: 87.5912, y: 0, ease: "power2.out", duration: time }, "-=0.8")
        .to("#square8", { height: 187.226, ease: "power2.out", duration: time }, prefire)

        .to("#square6", { height: 87.5912, y: 0, ease: "power2.out", duration: time }, "-=0.8")
        .to("#square5", { height: 187.226, ease: "power2.out", duration: time }, prefire)
      /* .timeScale(0) //Vahalik ainult sujuva peatumise jaoks */
    }, main)
    return () => ctx.revert()
  }, [])

  if (!display) return null
  if (layout === "GRID")
    return (
      <div className="projects" ref={main}>
        <Link href="/ut-timetable-generator">
          <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="600" fill="#A5E9B0" />
            <rect id="square2" x="236.496" y="212.409" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
            <rect id="square4" x="384.307" y="112.774" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
            <rect id="square8" x="532.117" y="212.409" width="131.387" height="187.226" rx="21" fill="#4D948F" />
            <rect id="square6" x="384.307" y="411.679" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
            <rect id="square3" x="236.496" y="312.044" width="131.387" height="187.226" rx="21" fill="#DEFFEB" />
            <rect id="square5" x="384.307" y="212.409" width="131.387" height="187.226" rx="21" fill="#DEFFEB" />
            <rect id="square7" x="532.117" y="112.774" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
            <rect id="square9" x="532.117" y="411.679" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
            <rect id="square1" x="236.496" y="112.774" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
          </svg>
        </Link>
        <h2 className="mt-2 2xl:text-[1.1em]">
          <Link href="/ut-timetable-generator">University of Tartu timetable generator</Link>
        </h2>
        <TypeAndYear type="PROJECTS" year={2023} />
      </div>
    )
  return (
    <div className="projects flex mb-2" ref={main}>
      <Link href="/ut-timetable-generator" className="w-[30%]">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#A5E9B0" />
          <rect id="square2" x="236.496" y="212.409" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
          <rect id="square4" x="384.307" y="112.774" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
          <rect id="square8" x="532.117" y="212.409" width="131.387" height="187.226" rx="21" fill="#4D948F" />
          <rect id="square6" x="384.307" y="411.679" width="131.387" height="87.5912" rx="21" fill="#4D948F" />
          <rect id="square3" x="236.496" y="312.044" width="131.387" height="187.226" rx="21" fill="#DEFFEB" />
          <rect id="square5" x="384.307" y="212.409" width="131.387" height="187.226" rx="21" fill="#DEFFEB" />
          <rect id="square7" x="532.117" y="112.774" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
          <rect id="square9" x="532.117" y="411.679" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
          <rect id="square1" x="236.496" y="112.774" width="131.387" height="87.5912" rx="21" fill="#DEFFEB" />
        </svg>
      </Link>
      <div className="w-[70%] ml-4">
        <h2 className="mt-2 2xl:text-[1.1em]">
          <Link href="/ut-timetable-generator">University of Tartu timetable generator</Link>
        </h2>
        <TypeAndYear type="PROJECTS" year={2023} />
      </div>
    </div>
  )
}

export default TimetableGenerator
