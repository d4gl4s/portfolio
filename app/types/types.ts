export type FilterOption = "ALL" | "PROJECTS" | "BLOG"
export type ProjectType = "PROJECTS" | "BLOG"
export type LayoutType = "LIST" | "GRID"

export interface ProjectThumbnail {
  title: string
  type: ProjectType
  year: number
  url: string
  svg: any
  description?: string
}
