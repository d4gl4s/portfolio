import ProjectHead from "@/components/ProjectHead"
import Head from "next/head"

const energianumbrid = () => {
  return (
    <>
      <Head>
        <title>Energianumbrid | Daglas Aitsen</title>
      </Head>

      <main className="w-[90%] max-w-[500px] xl:w-[50%] xl:max-w-full 2xl:w-[40%] m-auto mb-64">
        <ProjectHead name="Energianumbrid" year={2023} description="Siia tuleb mingi eriti hea desription" tools="NEXT JS" />
        <svg className="w-full" viewBox="0 0 731 453" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="731" height="453" rx="16" fill="#F2F2F2" />
        </svg>
      </main>
    </>
  )
}

export default energianumbrid
