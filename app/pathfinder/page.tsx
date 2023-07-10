import ProjectTitle from "../components/ProjectTitle"
import ProjectDescription from "../components/ProjectDescription"
import Image from "next/image"

import image2 from "@/public/pathfinding/image2.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pathfinder | Daglas Aitsen",
  description: "A pathfinding program that provides a visual representation of the shortest path between two distinct rooms within a building.",
}
const Page = () => {
  return (
    <main>
      <section className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto mb-64">
        <ProjectTitle
          name="Interactive indoor pathfinding in React"
          authors="Daglas Aitsen"
          year={2023}
          website="https://indoor-pathfinding.vercel.app/"
          github="https://github.com/d4gl4s/indoor-navigation"
        ></ProjectTitle>
        <ProjectDescription
          idea={true}
          problem="I wanted to explore graph manipulation and pathfinding in React. Most React pathfinding visualizers I encountered were based on a grid structure, representing an undirected and unweighted graph with limited node connections. However, I wanted to go beyond these constraints. My aim was to develop a pathfinding program that would also display the edges between nodes and allow for flexible node placement without being confined to a grid layout. I decided to make a pathfinding program that would provide a visual representation of the shortest path between two distinct rooms within a building. To demonstrate this concept, I chose the first floor of the University of Tartu Delta Center as an example."
          solution=""
          stack={["Next JS", "React", "Typescript", "Tailwind css"]}
        />
        <h1 className=" font-bold text-[1.15em] mb-4">How Does It Work?</h1>
        <p className=" mb-16">
          Each room depicted on the map represents a node, while each undirected edge corresponds to a path connecting adjacent rooms. Each edge of the graph also has an associated weight that
          represents the distance from one node (room) to another. The SVG paths for all nodes and edges are stored in an array. The edges and weights are stored in a JavaScript object.
          <br />
          <br /> The user can select a starting point by clicking on a room on the map. After the starting point has been chosen, a destination can be selected. The room numbers of the starting and
          endpoint are stored in React state. After both points are chosen, a function utilizing Dijkstra{"'"}s algorithm finds the shortest path between the selected points and returns an array of
          nodes on the path. This array is stored in state, triggering a React re-render to reflect the changes. When displaying the path, we iterate through the array of edges. For every edge, we
          check if both of its connected nodes are present in the returned node array. If this condition is met, we display the SVG path associated with the edge; otherwise, we set the opacity of the
          edge to zero. The same principle applies to the nodes—only if a node exists within the returned array is it rendered.
        </p>

        <Image className=" rounded-[10px] overflow-hidden mb-8 " alt="form" src={image2} />
        <h1 className=" font-bold text-[1.15em] mb-4 mt-20">Check Out The Project</h1>
        <p className="text-stone-700 text-[0.95em] font-medium ">
          If you are interested in exploring the project firsthand, you can visit the website{" "}
          <a className="underline text-emerald-500" href="https://indoor-pathfinding.vercel.app/" target="_blank">
            here
          </a>
          .
        </p>
      </section>
    </main>
  )
}

export default Page
