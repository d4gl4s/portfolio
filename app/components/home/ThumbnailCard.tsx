import { LayoutType, ProjectThumbnail } from "@/app/types/types"
import Link from "next/link"
import TypeAndYear from "./TypeAndYear"
import Image from "next/image"

interface Card {
  project: ProjectThumbnail
  layout: LayoutType
}

const ThumbnailCard = ({ project, layout }: Card) => {
  if (layout === "GRID") {
    return (
      <div className="projects">
        <Link href={project.url}>
          <Image src={project.svg} height={900} width={600} alt="Project Thumbnail" />
        </Link>
        <h2 className="mt-2 2xl:text-[1.1em] capitalize">
          <Link href={project.url}>{project.title}</Link>
        </h2>

        <TypeAndYear type={project.type} year={project.year} />
      </div>
    )
  } else {
    return (
      <div className="flex mb-3">
        <Link href={project.url} className="w-[30%]">
          <Image src={project.svg} height={900} width={600} alt="Project Thumbnail" />
        </Link>
        <div className="w-[70%] ml-4">
          <h2 className="2xl:text-[1.1em] capitalize">
            <Link href={project.url}>{project.title}</Link>
          </h2>

          <TypeAndYear type={project.type} year={project.year} />
        </div>
      </div>
    )
  }
}

export default ThumbnailCard
