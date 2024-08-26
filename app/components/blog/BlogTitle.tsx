import { ProjectThumbnail } from "@/app/types/types"
import Image from "next/image"
import ScrollBar from "./ScrollBar"
import ShareButtons from "./ShareButtons"
import { formatDate } from "@/app/utils/dateUtils"

const BlogTitle = ({ post }: { post: ProjectThumbnail }) => {
  return (
    <>
      <ScrollBar />
      <section className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto 2xl:w-[37%] flex flex-col items-center mb-12">
        <p className="text-center mb-2 mt-20 2xl:mt-28 text-[#BEC5DE] text-[0.8em] font-medium">{formatDate(post.date)}</p>
        <h1 id="blogTitle" className="text-center w-[70%] sm:w-[60%] text-[2em] md:text-[2.2em] font-semibold leading-[1em] italic">
          {post.title}
        </h1>
        <div className="uppercase font-semibold mb-12 mt-2 text-[0.7em] text-[#6A8AFF]">technology</div>
        <p className="mb-6 ">{post.description}</p>
        <div className="flex items-center w-full justify-end mb-8">
          {/*  <div className="flex items-center">
            <Image src={"/picture.jpg"} height={30} width={30} className="rounded-[50px] unselectable" alt="Profile picture" />
            <span className="ml-2 font-semibold text-[0.8em]">Daglas Aitsen</span>
          </div> */}
          <ShareButtons title={post.title} />
        </div>
        <div className="w-full max-w-[650px]">
          <Image unoptimized={true} src={post.imageLarge} height={1500} width={750} alt="Project Thumbnail" className="unselectable rounded" priority />
          <p className="text-start md:text-end mt-2 text-[0.9em] font-medium text-[#BEC5DE]">
            {post.imageAuthor && "Illustrated by " + post.imageAuthor + " "}
            {post.imageAuthor && post.imageInspiredBy && "inspired by " + post.imageInspiredBy}
          </p>
        </div>
      </section>
    </>
  )
}

export default BlogTitle
