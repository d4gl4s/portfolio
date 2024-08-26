import { Metadata } from "next"
import Sidebar from "./components/home/Sidebar"
import MainContent from "./components/home/MainContent"

export const metadata: Metadata = {
  title: "Daglas Aitsen",
  description: "My name is Daglas Aitsen. I am currently studying Computer Science at the University of Tartu, and this is my awesome website.",
  keywords: [
    "Software Engineering",
    "Tech Blog",
    "Web Development",
    "Coding Tutorials",
    "Programming Tips",
    "Python Programming",
    "JavaScript Development",
    "Machine Learning Projects",
    "Artificial Intelligence",
    "Data Science",
    "Cloud Computing",
    "DevOps Practices",
    "Full Stack Development",
    "Open Source Projects",
    "GitHub Portfolio",
    "API Development",
    "Mobile App Development",
    "Tech Projects",
    "Frontend Development",
    "Backend Development",
    "Software Architecture",
    "Tech Industry Trends",
    "Cybersecurity",
    "Software Testing",
    "Agile Methodology",
    "Database Management",
    "Cloud Solutions",
    "UI/UX Design",
    "Responsive Design",
    "Version Control",
    "Project Management",
    "Technical Writing",
    "Freelance Developer",
    "Portfolio Showcase",
    "Tech Tutorials",
    "Custom Software",
    "Code Optimization",
    "JavaScript Frameworks",
    "AI and Machine Learning",
    "Personal Projects",
    "Web Performance",
    "Continuous Integration",
    "Tech Careers",
    "Software Documentation",
    "Tech Communities",
    "Software Development",
    "Open Source Contributions",
    "Cloud Infrastructure",
    "Freelance Software Engineer",
    "API Integrations",
  ],
  creator: "Daglas Aitsen",

  openGraph: {
    type: "website",
    url: "https://daglasaitsen.com",
    siteName: "daglasaitsen.com",
    title: "The simple website of Daglas Aitsen",
    description: "A website for showcasing projects and sharing thoughts",
  },
  twitter: {
    card: "summary_large_image",
    title: "The simple website of Daglas Aitsen",
    site: "@d4gl4s",
    creator: "@d4gl4s",
    description: "A website for showcasing projects and sharing thoughts",
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
