interface Title {
  name: string
  authors: string
  year: number
  website?: string
  github?: string
}

const ProjectTitle = ({ name, authors, year, website, github }: Title) => {
  return (
    <div className="mb-20">
      <p className="text-[0.8em] yearColor mb-1">
        {authors} {year}
      </p>
      <div className="flex flex-col xl:flex-row justify-between">
        <h1 className="font-bold leading-[1.2em] text-[1.5em] xl:text-[1.3em] 2xl:text-[1.5em] ">{name}</h1>
        {/* <span className="ml-2 font-semibold text-[0.8em] yearColor">{year}</span> */}

        <div className="text-[0.8em] font-medium flex mt-8 xl:mt-0">
          {website && (
            <a
              target="_blank"
              className="flex bg-[#ABF3BF] w-fit items-center h-8 px-6 text-[#24786E] rounded-[50px] mr-2 unselectable"
              href={website}
              rel="noopener noreferrer"
              aria-label="Check out the website!"
            >
              Website
            </a>
          )}
          {github && (
            <a
              target="_blank"
              className="flex bg-[#CCDEFF] unselectable w-fit items-center h-8 px-6 text-[#6661A3] rounded-[50px]"
              href={github}
              rel="noopener noreferrer"
              aria-label="Check out the Github page!"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectTitle
