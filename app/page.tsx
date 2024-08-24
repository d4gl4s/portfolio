import { Metadata } from "next"
import Sidebar from "./components/home/Sidebar"
import MainContent from "./components/home/MainContent"

export const metadata: Metadata = {
  title: "Daglas Aitsen",
  description: "My name is Daglas Aitsen. I am currently studying Computer Science at the University of Tartu, and this is my awesome website.",

  keywords: ["NFC", "Security", "Radio Frequencies"],
  creator: "Daglas Aitsen",
  openGraph: {
    type: "website",
    url: "https://daglasaitsen.com",
    siteName: "daglasaitsen.com",
    title: "Daglas Aitsen",
    description: "description",
    images: [{ url: "https://g.delfi.ee/pr/og/delfi_1200x628.png", width: 1200, height: 628 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFC technology",
    site: "@d4gl4s",
    creator: "@d4gl4s",
    description: "Near Field Communication (NFC) is a short-range wireless.",
    images: [{ url: "https://g.delfi.ee/pr/og/delfi_1200x628.png", alt: "Blog post thumbnail", width: 1200, height: 628 }],
  },
}

export default function Home() {
  return (
    <>
      <main className="mt-[15svh] md:mt-[10svh] flex flex-col md:flex-row sm:w-[70%] md:w-[88%] 2xl:w-[80%] m-auto">
        <Sidebar />
        <MainContent />
      </main>
      <footer className="w-full flex justify-center mb-12 text-[0.8em] font-semibold text-gray-300 md:mt-24">&#169; {new Date().getFullYear()}</footer>
    </>
  )
}
