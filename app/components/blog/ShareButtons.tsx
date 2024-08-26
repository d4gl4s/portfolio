"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaTwitter, FaRegCopy, FaCheck, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const ShareButtons = ({ title }: { title: string }) => {
  const pathname = usePathname()
  const url = "https://daglasaitsen.com" + pathname
  const [copied, setCopied] = useState(false)

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open(twitterUrl, "_blank")
  }

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, "_blank")
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    window.open(linkedInUrl, "_blank")
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleTwitterShare} className="flex items-center justify-center h-8 w-8 bg-[#191c18] text-white rounded-[50px] hover:bg-[#1d2122]">
        <FaXTwitter size={14} />
      </button>

      <button onClick={handleFacebookShare} className="flex items-center justify-center h-8 w-8 bg-[#1877F2] text-white rounded-[50px] hover:bg-[#165fc2]">
        <FaFacebookF size={14} />
      </button>

      <button onClick={handleLinkedInShare} className="flex items-center justify-center h-8 w-8 bg-[#0077b5] text-white rounded-[50px] hover:bg-[#005f93]">
        <FaLinkedinIn size={14} />
      </button>

      <CopyToClipboard text={url} onCopy={handleCopy}>
        {copied ? (
          <button className="flex items-center justify-center w-24 h-9 bg-emerald-100 text-emerald-400 rounded-[50px] border border-solid-2 border-emerald-300">
            <span className="text-[0.8em] mr-1">Copied</span>
            <FaCheck size={12} />
          </button>
        ) : (
          <button className="flex items-center justify-center w-24 h-9 bg-slate-50 text-[#B7BDE0] rounded-[50px] hover:bg-slate-100 border border-solid-2 border-[#E3E3F7]">
            <span className="text-[0.8em] mr-1 unselectable">Copy</span>
            <FaRegCopy size={14} />
          </button>
        )}
      </CopyToClipboard>
    </div>
  )
}

export default ShareButtons
