"use client"

import TimetableGenerator from "../TimetableGenerator"
import IndoorPathfinder from "../IndoorPathfinder"
import { useState } from "react"
import { FilterOption, LayoutType, ProjectThumbnail } from "@/app/types/types"
import { FaListUl, FaGripVertical } from "react-icons/fa"
import { projectThumbnails } from "@/app/data/thumbnails"
import ThumbnailCard from "./ThumbnailCard"

const MainContent = () => {
  const [filter, setFilter] = useState<FilterOption>("ALL")
  const [layout, setLayout] = useState<LayoutType>("GRID")
  return (
    <div className="w-full md:w-[70%] xl:w-[60%] 2xl:w-[53%] m-auto md:ml-[27%] mt-16 md:mt-0">
      <nav className="h-[10vh] max-h-[50px] md:max-h-[70px] sticky top-0 w-full glassmorphism">
        <div className="h-[10vh] max-h-[50px] md:max-h-[70px] flex items-center justify-between w-[90%] md:w-[85%] m-auto">
          <h1 className="capitalize font-medium text-[1.1em] md:text-[1.4em]">{filter === "ALL" ? "Latest" : filter.toLowerCase()}</h1>
          <div className="flex">
            <ul className="flex mr-5 md:mr-10 items-center text-[0.85em] md:text-[0.9em] font-medium">
              <li className={"cursor-pointer mr-4 text-[#736E7E]  " + (filter == "ALL" && " font-semibold text-[#232522]")} onClick={() => setFilter("ALL")}>
                Latest
              </li>
              <li className={"cursor-pointer mr-4 text-[#736E7E]  " + (filter == "PROJECTS" && " font-semibold text-[#232522]")} onClick={() => setFilter("PROJECTS")}>
                Projects
              </li>
              <li className={"cursor-pointer text-[#736E7E] " + (filter == "BLOG" && " font-semibold text-[#232522]")} onClick={() => setFilter("BLOG")}>
                Blog
              </li>
            </ul>
            <button
              className="bg-[#E8E6EC] h-7 w-7 rounded-[3px] flex items-center justify-center glassmorphism2 border border-solid-1 border-[#E8E6EC]"
              onClick={() => setLayout(layout === "GRID" ? "LIST" : "GRID")}
            >
              {layout === "LIST" ? <FaGripVertical color="#373D37" size={12} /> : <FaListUl color="#373D37" size={12} />}
            </button>
          </div>
        </div>
      </nav>
      {filter == "BLOG" && (
        <div className="w-[85%] m-auto mt-16">
          No blog posts are currently available 🤒. I recently came up with the idea for this blog. Future posts will cover topics I find interesting, with a focus on technical content.
        </div>
      )}
      <div className={"m-auto mb-64 unselectable w-[90%] md:w-[85%] " + (layout === "GRID" ? " grid grid-cols-1 md:grid-cols-2 gap-5" : " flex flex-col")}>
        {projectThumbnails.map((project: ProjectThumbnail, i: number) =>
          project.url === "/ut-timetable-generator" ? (
            <TimetableGenerator display={filter === "ALL" || filter === "PROJECTS"} layout={layout} key={i} />
          ) : project.url === "/pathfinder" ? (
            <IndoorPathfinder display={filter === "ALL" || filter === "PROJECTS"} layout={layout} key={i} />
          ) : (
            (filter === "ALL" || filter === project.type) && <ThumbnailCard project={project} layout={layout} key={i} />
          )
        )}
      </div>
    </div>
  )
}

export default MainContent
