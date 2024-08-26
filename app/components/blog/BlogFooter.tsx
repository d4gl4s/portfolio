"use client"

import Image from "next/image"
import ShareButtons from "./ShareButtons"
import { FiArrowUpCircle } from "react-icons/fi"
import { ProjectThumbnail } from "@/app/types/types"
import { formatDate } from "@/app/utils/dateUtils"

const BlogFooter = ({ post }: { post: ProjectThumbnail }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    })
  }
  return (
    <section className="mb-[30vh]">
      <div className="mb-1 text-[0.9em] font-regular text-slate-400">Authors:</div>
      <div className="flex items-center mb-8">
        {/* <Image src={"/picture.jpg"} height={27} width={27} className="rounded-[50px]" alt="Profile picture" /> */}
        <div className="font-semibold text-[1em]">Daglas Aitsen</div>
      </div>

      <div className="mb-1 text-[0.9em] font-regular text-slate-400">Share</div>
      <div className="flex flex-row justify-between w-full items-end mb-12 md:mb-16">
        <ShareButtons title={post.title} />
        <button className="hidden md:flex font-semibold hover:font-normal items-center hover:bg-[#191c18] hover:text-white h-9 px-5 pl-6 rounded-[50px] text-[0.9em]" onClick={() => scrollToTop()}>
          Back to Top <FiArrowUpCircle className="ml-1" />
        </button>
      </div>
      <div className="mb-1 text-[0.9em] font-regular text-slate-400">Published • {formatDate(post.date)}</div>
      {post.lastModified && <div className="mb-1 text-[0.9em] font-regular text-slate-400">Last Modified • {formatDate(post.lastModified)}</div>}
    </section>
  )
}

export default BlogFooter
