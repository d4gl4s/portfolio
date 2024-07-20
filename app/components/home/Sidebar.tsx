import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Sidebar = () => {
  return (
    <div className="mt-10 md:mt-0 md:fixed w-[90%] m-auto md:w-[20%]  md:h-[75svh] md:max-w-[230px] 2xl:max-w-[300px] text-[0.9em] 2xl:text-[1em] flex flex-col justify-between">
      <div>
        <h1 id="name" className="h-14 font-bold text-[1.3em]">
          Daglas Aitsen 🌌
        </h1>
        <h2 className=" font-[500]">
          <span className="description">Hi! My name is Daglas Aitsen. I am in my second year of studying Computer Science at the University of Tartu.</span>
          <br />
          <br /> <span className="description">Make sure to check out some of the projects I{"'"}ve had the opportunity to work on!</span>
          <br />
          <br /> <span className="description">This website was designed and developed by me using React.</span>
        </h2>
      </div>
      <div className="flex justify-end md:justify-start mt-6 md:mt-0">
        <a target="_blank" href="https://github.com/d4gl4s" rel="noopener noreferrer" className="mr-2 socials" aria-label="Check out my Github profile!">
          <FaGithub size={30} color="#222129" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/daglas-aitsen-569633178/" rel="noopener noreferrer" className="socials" aria-label="Check out my LinkedIn profile!">
          <FaLinkedin size={30} color="#222129" />
        </a>
        <a target="_blank" href="https://leetcode.com/d4gl4s/" rel="noopener noreferrer" className="socials ml-2" aria-label="Check out my LinkedIn profile!">
          <SiLeetcode size={28} color="#222129" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
