const ProjectDescription = ({ idea, problem, solution, stack }: { idea: boolean; problem: string; solution?: string; stack: string[] }) => {
  return (
    <section className="mb-8 mt-4">
      <h2 className="font-bold text-[1.2em] mb-5">{idea ? "The Idea" : "The Problem"}</h2>
      <p className="mb-14">{problem}</p>
      {solution && (
        <>
          <h2 className="font-bold text-[1.2em] mb-5">The Solution</h2>
          <p className="mb-8">{solution}</p>
          <div className="flex flex-wrap text-[0.8em] mb-16">
            {stack.map((tech, i) => (
              <div key={i} className="p-[8px] px-6 rounded-[50px] bg-slate-100 mr-2 flex items-center unselectable mb-2 text-[#A9ABD1]">
                {tech}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default ProjectDescription
