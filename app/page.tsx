import { FaGithub, FaLinkedin } from "react-icons/fa"
import TimetableGenerator from "./components/TimetableGenerator"
import Leffel from "./components/Leffel"
import { Metadata } from "next"
import IndoorPathfinder from "./components/IndoorPathfinder"

export const metadata: Metadata = {
  title: "Daglas Aitsen",
  description: "My name is Daglas Aitsen. I am currently studying Computer Science at the University of Tartu, and this is my awesome website.",
}

export default function Home() {
  return (
    <>
      <main className="mt-[10svh] md:mt-[15svh] flex flex-col md:flex-row w-[90%] sm:w-[70%] md:w-[88%] 2xl:w-[80%] m-auto">
        <div className="mt-5 md:mt-0 md:fixed md:w-[20%]  md:h-[75svh] md:max-w-[230px] 2xl:max-w-[300px] text-[0.9em] 2xl:text-[1em] flex flex-col justify-between">
          <div>
            <h1 id="name" className="h-14 font-bold text-[1.3em]">
              Daglas Aitsen
            </h1>
            <h2 className=" font-[500]">
              <span className="description">Hi! My name is Daglas Aitsen. I am currently studying Computer Science at the University of Tartu, and this is my awesome website.</span> <br />
              <br /> <span className="description">Make sure to check out some of the projects I{"'"}ve had the opportunity to work on!</span>
            </h2>
          </div>
          <div className="flex justify-end md:justify-start mt-6 md:mt-0">
            <a target="_blank" href="https://github.com/d4gl4s" rel="noopener noreferrer" className="mr-2 socials" aria-label="Check out my Github profile!">
              <FaGithub size={30} color="#222129" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/daglas-aitsen-569633178/" rel="noopener noreferrer" className="socials" aria-label="Check out my LinkedIn profile!">
              <FaLinkedin size={30} color="#222129" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5	w-full md:w-[70%] xl:w-[55%] 2xl:w-[45%] m-auto md:ml-[30%] mt-20 md:mt-14 mb-64 unselectable">
          {/* <Enegianumbrid /> */}
          <IndoorPathfinder />
          <TimetableGenerator />
          <Leffel />

          <div className="projects">
            <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="600" fill="#F3F5FC" />
            </svg>

            <h2 className="mt-2 2xl:text-[1.1em]">Coming Soon...</h2>
            {/* <p className="projectYear">2023</p> */}
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-center mb-12 text-[0.8em] font-semibold text-gray-300 md:mt-24">&#169; {new Date().getFullYear()}</footer>
    </>
  )
}
