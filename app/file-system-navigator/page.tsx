import ProjectTitle from "../components/ProjectTitle"
import ProjectDescription from "../components/ProjectDescription"
import Image from "next/image"

import screenshot2 from "@/public/filesystem/screenshot2.png"
import screenshot1 from "@/public/filesystem/screenshot1.png"
import screenshot4 from "@/public/filesystem/screenshot3.png"
import screenshot3 from "@/public/filesystem/screenshot4.png"
import { Metadata } from "next"
import Link from "next/link"
import BashComponent from "../components/BashComponent"

export const metadata: Metadata = {
  title: "File System Navigator | Daglas Aitsen",
  description: "A simple and concise file system navigator built using C++ to explore and interact with your system.",
}
const Page = () => {
  const commands = ["pwd", "cd", "mkdir", "rm", "mv", "cp"]
  return (
    <main>
      <section className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto mb-32">
        <ProjectTitle name="File System Navigator built with C++" authors="Daglas Aitsen" year={2024} github="https://github.com/d4gl4s/file-system-navigator"></ProjectTitle>
        <ProjectDescription
          idea={true}
          problem="Over my winter break, I embarked on learning the C++ programming language. As an enthusiast of competitive programming, I found that Java, my go-to language until then, was becoming cumbersome and slow for my needs. I read a great book by Stephen Prata called C++ Primer Plus and wanted to write some code of my own. One project that caught my attention was building a file navigation system, which I believe could be beneficial for future projects. I'm intrigued by the idea of potentially developing a file encryption manager down the line."
          solution=""
          stack={["C++"]}
        />
        <h1 className=" font-bold text-[1.15em] mb-4">Functionality</h1>
        <p>
          The file system navigator is a simple program implemented in C++ as a weekend hobby project. The main aim of this project is to gain more experience programming in C++ and hopefully learn
          something new about file systems as well. The navigator offers essential file system commands for navigation and management, including:
        </p>
        <div className="flex flex-row flex-wrap inline-flex w-fit mt-6">
          {commands.map((command, i) => (
            <BashComponent text={command} key={i} />
          ))}
        </div>
      </section>
      <section className=" bg-stone-800 w-full py-24">
        <div className="text-white w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto 2xl:w-[37%]">
          <h1 className="font-bold text-[1.3em] mb-8 ">The Commands</h1>

          <p className="text-[0.95em] font-medium  mb-8">
            Recently I have had the opportunity to work with various Linux machines. The command-line commands have always struck me as intuitive, leading me to adopt Unix-like commands for my
            navigation system as well. Below, you&apos;ll find several of these commands as visible within the program&apos;s interface. Please note that due to ongoing development, some commands may
            not be visible in the provided screenshot.
          </p>
          <Image className="w-full  m-auto rounded-[10px] overflow-hidden mb-8 " alt="form" src={screenshot1} />
          <p className="my-12">Below are two screenshots depicting a brief interaction with the program. The program processes various commands inputted by the user and responds accordingly.</p>
          <Image className="w-full  m-auto rounded-[10px] overflow-hidden mb-8 " alt="form" src={screenshot4} />
          <Image className="w-full  m-auto rounded-[10px] overflow-hidden mb-8 " alt="form" src={screenshot3} />

          <h1 className=" font-bold text-[1.15em] mb-4 mt-20">Check Out The Project</h1>
          <p className=" text-[0.95em] font-medium  mb-8">
            If you are interested in exploring the project firsthand, you can visit the github page{" "}
            <a className="underline text-emerald-500" href="https://github.com/d4gl4s/file-system-navigator" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default Page
