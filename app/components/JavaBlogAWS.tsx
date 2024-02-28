"use client"
import Link from "next/link"
import Image from "next/image"

const JavaBlog = () => {
  return (
    <div className="projects">
      <Link href="/java-spring-blog">
        <Image src="/java-blog/thumbnail.png" width={500} height={500} alt="Thumbnail for Java Spring prject" />
      </Link>
      <h2 className="mt-2 2xl:text-[1.1em]">
        <Link href="/java-spring-blog">Hosting a Java Spring blog on AWS</Link>
      </h2>

      <p className="projectYear">2023</p>
    </div>
  )
}

export default JavaBlog
