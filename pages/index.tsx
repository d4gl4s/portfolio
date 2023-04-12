import Head from "next/head"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import CustomEase from "gsap/dist/CustomEase"
gsap.registerPlugin(CustomEase)

export default function Home() {
  const main = useRef<HTMLElement>(null)
  const tl = useRef<GSAPTimeline>()
  const greenAnimation = useRef<GSAPTimeline>()

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from("#name", { y: "100%", ease: "power3.out", duration: 1.4, stagger: 0.2 })
        .from(".description", { x: 80, opacity: 0, ease: "power2.out", duration: 1.6, stagger: 0.2 }, "-=0.8")
        .from(".socials", { y: 15, opacity: 0, ease: "power2.out", duration: 1.6, stagger: 0.4 }, "-=1.4")
        .from(".projects", { y: 25, opacity: 0, ease: "power2.out", duration: 1.6, stagger: 0.3 }, "-=2")

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
    <>
      <Head>
        <title>Daglas Aitsen</title>
        <meta name="description" content="See on minu väga vahva veebileht!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <main ref={main} className="mt-[10svh] md:mt-[15svh] flex flex-col md:flex-row w-[90%] sm:w-[70%] md:w-[88%] 2xl:w-[80%] m-auto">
        <div className="mt-10 md:mt-0 md:fixed md:w-[20%]  md:h-[75svh] md:max-w-[230px] 2xl:max-w-[300px] text-[0.9em] 2xl:text-[1em] flex flex-col justify-between">
          <div>
            <h1 className="relative overflow-hidden h-6 mb-8 z-20 bg-green-200">
              <span id="name" className="absolute z-20 h-14 bg-red-300 font-bold text-[1.2em] font-[poppins]">
                Daglas Aitsen
              </span>
            </h1>
            {/* <h1 id="name" className="h-14 font-bold text-[1.2em] font-[poppins]">
              Daglas Aitsen
            </h1> */}
            <h2 className="text-justify font-[500]">
              <span className="description">Hi! My name is Daglas Aitsen. I am currently studying Computer Science in University of Tartu and this is my awesome website.</span> <br />
              <br /> <span className="description">Make sure to check out some of the projects I{"'"}ve had the chance to work on!</span>
            </h2>
          </div>
          <div className="flex justify-end md:justify-start mt-6 md:mt-0">
            <a target="_blank" href="https://github.com/d4gl4s" rel="noopener noreferrer" className="mr-2 socials">
              <FaGithub size={30} color="#222129" />
            </a>
            <a target="_blank" href="#" rel="noopener noreferrer" className="socials">
              <FaLinkedin size={30} color="#222129" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5	w-full md:w-[70%] xl:w-[55%] 2xl:w-[45%] m-auto md:ml-[30%] mt-20 md:mt-14 mb-64 unselectable">
          <div className="projects">
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

          <div className="projects">
            <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="600" fill="#F8878D" />
              <circle cx="450" cy="300" r="300" fill="#FFD0D0" />
              <path
                d="M449.5 145L456.713 257.79C457.933 276.866 473.134 292.067 492.21 293.287L605 300.5L492.21 307.713C473.134 308.933 457.933 324.134 456.713 343.21L449.5 456L442.287 343.21C441.067 324.134 425.866 308.933 406.79 307.713L294 300.5L406.79 293.287C425.866 292.067 441.067 276.866 442.287 257.79L449.5 145Z"
                fill="#723C53"
              />
            </svg>

            <h2 className="mt-2 2xl:text-[1.1em]">Humbia</h2>
            <p className="projectYear">2023</p>
          </div>

          <div className="projects">
            <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="600" fill="#B1A1F1" />
              <rect y="400" width="200" height="200" fill="#D9D6FF" />
              <rect x="700" width="200" height="200" fill="#6D73FF" />
              <rect x="500" y="200" width="200" height="200" fill="#6D73FF" />
              <rect x="700" y="198" width="200" height="200" rx="100" fill="#D9D6FF" />
              <rect x="200" y="398" width="200" height="200" rx="100" fill="#6D73FF" />
              <rect y="200" width="200" height="200" rx="100" fill="#D9D6FF" />
              <rect x="700" y="398" width="200" height="200" rx="100" fill="#6D73FF" />
            </svg>
            <h2 className="mt-2 2xl:text-[1.1em]">Energianumbrid</h2>
            <p className="projectYear">2023</p>
          </div>

          <div className="projects">
            <svg viewBox="0 0 900 601" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="600" fill="#FFE091" />
              <rect x="150" y="300.279" width="424.658" height="424.658" transform="rotate(-45 150 300.279)" fill="#FFF4D8" />
              <rect x="300" y="151" width="300" height="300" fill="#FF9F6A" />
              <rect x="300" y="301" width="212.132" height="212.132" transform="rotate(-45 300 301)" fill="#FFF4D8" />
              <circle cx="449.5" cy="300.5" r="40.5" fill="#FFC19F" />
            </svg>
            <h2 className="mt-2 2xl:text-[1.1em]">Energianumbrid</h2>
            <p className="projectYear">2023</p>
          </div>
        </div>
      </main>
    </>
  )
}
