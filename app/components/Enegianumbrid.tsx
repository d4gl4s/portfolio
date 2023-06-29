"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import CustomEase from "gsap/dist/CustomEase"
gsap.registerPlugin(CustomEase)

const Enegianumbrid = () => {
  const main = useRef<HTMLDivElement>(null)

  const greenAnimation = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      const time = 0.8
      const prefire = "-=0.3"
      greenAnimation.current = gsap
        .timeline({ repeat: -1 /* yoyo: true */ /* , paused: true */ })
        .to("#greenBall", { x: -300, ease: "power2.out", duration: time })
        .to("#slab1", { rotation: -90, transformOrigin: "left 50%", ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { x: 300, ease: "power2.out", duration: time }, prefire)
        .to("#greenBall", { y: 300, ease: "power2.out", duration: time }, prefire)
        .to("#slab1", { x: -300, ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { rotation: -90, transformOrigin: "50% top", ease: "power2.out", duration: time }, prefire)
        .to("#greenBall", { x: 0, ease: "power2.out", duration: time }, prefire)
        .to("#slab1", { rotation: -180, transformOrigin: "left 50%", ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { rotation: -180, transformOrigin: "50% top", ease: "power2.out", duration: time }, prefire)
        .to("#greenBall", { x: 300, ease: "power2.out", duration: time }, prefire)
        .to("#slab1", { rotation: -270, transformOrigin: "left 50%", ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { x: 0, ease: "power2.out", duration: time }, prefire)
        .to("#greenBall", { y: 0, ease: "power2.out", duration: time }, prefire)
        .to("#slab1", { x: 0, ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { rotation: -270, transformOrigin: "50% top", ease: "power2.out", duration: time }, prefire)
        .to("#greenBall", { x: 0, ease: "power2.out", duration: time }, prefire)
        .to("#slab1", { rotation: -360, transformOrigin: "left 50%", ease: "power2.out", duration: time }, prefire)
        .to("#slab2", { rotation: -360, transformOrigin: "50% top", ease: "power2.out", duration: time }, prefire)
        .timeScale(0) //Vahalik ainult sujuva peatumise jaoks
    }, main)
    return () => ctx.revert()
  }, [])

  /* const chooseAnimation = () => {
    if (tl.current!.reversed()) {
      tl.current!.play()
    } else {
      tl.current!.reverse()
    }
  } */
  const onHoverEnter = () => {
    greenAnimation.current!.play()
    gsap.to(greenAnimation.current!, {
      timeScale: 1,
      duration: 0,
      overwrite: true,
    })
  }
  const onHoverLeave = () => {
    gsap.to(greenAnimation.current!, {
      timeScale: 0,
      duration: 0.2,
      overwrite: true,
      onComplete() {
        greenAnimation.current!.pause()
      },
    })

    /* greenAnimation.current!.pause() */ //nii saab kui pole timescale'i timeline'i juures ning algul on timeline'ile pandud pause  = true
  }
  return (
    <div className="projects" ref={main}>
      <Link href="/energianumbrid">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
          <rect width="900" height="600" fill="#9ADDAD" />
          <path
            id="slab2"
            d="M29 300C12.9838 300 -0.145559 313.015 1.3998 328.956C8.08243 397.892 38.4736 462.738 87.868 512.132C144.129 568.393 220.435 600 300 600C379.565 600 455.871 568.393 512.132 512.132C561.526 462.738 591.918 397.893 598.6 328.956C600.146 313.015 587.016 300 571 300L300 300L29 300Z"
            fill="#D2FFDE"
          />
          <path
            id="slab1"
            d="M600 571C600 587.016 613.015 600.146 628.956 598.6C697.892 591.918 762.738 561.526 812.132 512.132C868.393 455.871 900 379.565 900 300C900 220.435 868.393 144.129 812.132 87.868C762.738 38.4737 697.892 8.08247 628.956 1.39983C613.015 -0.145531 600 12.9838 600 29L600 300L600 571Z"
            fill="#D2FFDE"
          />
          <circle id="greenBall" cx="450" cy="150" r="150" fill="#4D948F" />
        </svg>
      </Link>
      <h2 className="mt-2 2xl:text-[1.1em]" /*  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} */>
        <Link href="/energianumbrid">Energianumbrid</Link>
      </h2>
      <p className="projectYear">2023</p>
    </div>
  )
}

export default Enegianumbrid
