import { ProjectType } from "@/app/types/types"

const TypeAndYear = ({ type, year }: { type: ProjectType; year: number }) => {
  return (
    <p className="projectYear">
      {type == "PROJECTS" ? "PROJECT" : type} • {year}
    </p>
  )
}

export default TypeAndYear
