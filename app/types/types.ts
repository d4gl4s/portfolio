export type FilterOption = "ALL" | "PROJECTS" | "BLOG"
export type ProjectType = "PROJECTS" | "BLOG"
export type LayoutType = "LIST" | "GRID"

export interface ProjectThumbnail {
  title: string
  date?: Date
  type: ProjectType
  year: number
  url: string
  image: any
  imageLarge?: any
  imageAuthor?: string
  imageInspiredBy?: string
  description?: string
}
