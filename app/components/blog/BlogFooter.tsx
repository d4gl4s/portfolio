import Image from "next/image"

const BlogFooter = () => {
  return (
    <section className="mb-[30vh]">
      <div className="mb-4 text-[1.1em] font-regular text-slate-400">Authors:</div>
      <div className="flex items-center">
        <Image src={"/picture.jpg"} height={40} width={40} className="rounded-[50px]" alt="Profile picture" />
        <div className="font-medium text-[1.2em] ml-3">Daglas Aitsen</div>
      </div>
    </section>
  )
}

export default BlogFooter
