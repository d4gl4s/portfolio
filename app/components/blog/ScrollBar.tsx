"use client"
import { motion, useScroll } from "framer-motion"

const ScrollBar = () => {
  const { scrollYProgress } = useScroll()
  return <motion.div className="fixed top-0 left-0 right-0 h-[5px] bg-emerald-400 origin-left" style={{ scaleX: scrollYProgress }} />
}

export default ScrollBar
