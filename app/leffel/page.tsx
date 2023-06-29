import ProjectTitle from "../components/ProjectTitle"
import ProjectDescription from "../components/ProjectDescription"
import Image from "next/image"
import gameImage from "../../public/leffel/1.jpg"

const timetableGenerator = () => {
  return (
    <main className="mt-32">
      <div className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto mb-24">
        <ProjectTitle name="Original Python game 'Leffel'" authors="Daglas Aitsen, Aleksis Krass" year={2022} github="https://github.com/d4gl4s/projekt"></ProjectTitle>
        <ProjectDescription
          idea={true}
          problem="During our first semester at the university, as part of our Programming 1 course, we had to create a project that would reinforce what we had learned over the past few months. After some thinking, we decided to create an original game for our project. To realize this vision, we chose to use the Pygame library for Python. In the game, two players take turns strategically placing different shapes on the board. Placing a square earns one point and it can be placed anywhere on the board. Placing a circle earns two points and it can only be placed between two squares. Placing a triangle earns three points and it can only be placed between two circles. The game ends when the entire board is filled with shapes. The player with the most points at the end of the game is the winner."
          stack={["Python"]}
        />
      </div>
      <section className=" bg-stone-100 w-full py-24">
        <div className="text-stone-700 w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto 2xl:w-[37%]">
          <h1 className="font-bold text-[1.3em] mb-8 ">What Did We Learn?</h1>

          <p className="text-stone-700 text-[0.95em] font-medium  mb-8">
            The two most intriguing aspects of the project were designing the game{"'"}s visual interface and creating the algorithm to determine if a shape could be placed at the spot selected by the
            player.
          </p>
          <Image className="w-full md:w-[70%] m-auto rounded-[10px] overflow-hidden mb-8 " alt="form" src={gameImage} />

          <h1 className=" font-bold text-[1.15em] mb-4 mt-20">Check Out The Project</h1>
          <p className="text-stone-700 text-[0.95em] font-medium  mb-8">
            If you are interested in exploring the project firsthand, you can visit the github page{" "}
            <a className="underline text-emerald-500" href="https://github.com/d4gl4s/projekt" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default timetableGenerator
