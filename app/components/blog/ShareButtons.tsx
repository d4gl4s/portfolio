"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaTwitter, FaRegCopy, FaCheck, FaLink } from "react-icons/fa"

const ShareButtons = ({ title }: { title: string }) => {
  const pathname = usePathname()
  const url = "https://daglasaitsen.com" + pathname
  const [copied, setCopied] = useState(false)

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open(twitterUrl, "_blank")
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="flex items-center">
      {/*       <button onClick={handleTwitterShare} className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <FaTwitter />
        <span>Share on Twitter</span>
      </button>
 */}
      {/* <span className="font-medium text-[0.9em] mr-2">Share</span> */}
      <CopyToClipboard text={url} onCopy={handleCopy}>
        {copied ? (
          <button className="flex items-center justify-center w-24 h-9 bg-emerald-100 text-emerald-400 rounded-[50px] border border-solid-2 border-emerald-300">
            <span className="text-[0.8em] mr-1">Copied</span>
            <FaCheck size={12} />
          </button>
        ) : (
          <button className="flex items-center justify-center w-24 h-9 bg-slate-50 text-[#B7BDE0] rounded-[50px] hover:bg-[#F5F6FF] border border-solid-2 border-[#E3E3F7]">
            <span className="text-[0.8em] mr-1 unselectable">Share</span>
            <FaRegCopy size={14} />
          </button>
        )}
      </CopyToClipboard>
    </div>
  )
}

export default ShareButtons
