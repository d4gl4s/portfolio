import ProjectTitle from "../components/ProjectTitle"
import ProjectDescription from "../components/ProjectDescription"
import Image from "next/image"
import Image6 from "@/public/timetableGenerator/image6.jpg"
import Image8 from "@/public/timetableGenerator/image8.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timetable Generator | Daglas Aitsen",
  description:
    "When planning the new semester, a situation often arises where you want to take a lot of courses. However, creating an optimal timetable can be difficult. Thats why we created a website that generates timetables for you.",
}
const timetableGenerator = () => {
  return (
    <main className="mt-32">
      <div className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto mb-24">
        <ProjectTitle
          name="University of Tartu timetable generator"
          authors="Daglas Aitsen, Johan Kirikal"
          year={2023}
          website="https://ut-timetable-generator.vercel.app/"
          github="https://github.com/d4gl4s/timetable-generator"
        ></ProjectTitle>
        <ProjectDescription
          idea={false}
          problem="When planning the new semester, a situation often arises where you want to take a lot of courses. However, creating an optimal timetable can be difficult. Most courses have different groups with different times for practical sessions, and each student has their own preferences for how they would like the new timetable to look. Currently, students have to plan their upcoming semesters in the SIS 2 environment. The Study Information System or SIS is the official information exchange environment for the organization of studies at the University of Tartu. In the SIS 2 environment, timetable creation is cumbersome, as every student knows. In order to see possible timetables, one currently has to manually change the groups of their registered courses one by one. Additionally, it is required to ensure that the times of the lectures and practical classes of different groups do not overlap. This process is unnecessarily difficult and usually takes hours to finally get a timetable that you are happy with."
          solution="To simplify the process, we (Daglas Aitsen and Johan Kirikal) have developed a website that generates all possible timetables for students, along with their respective groups. The student can select the courses they want to register for by entering the course code found in the SIS 2 environment. Additionally, students can deselect groups that they want to avoid, such as those taught in different languages, or choose not to have lectures and practical sessions on specific days or times. The website generates all the different possible variations of the timetable and ensures that no two lessons overlap. From these timetables, the student can then select the most optimal one for themselves."
          stack={["Python", "Next JS", "React", "Typescript", "Tailwind css"]}
        />
        <h1 className=" font-bold text-[1.15em] mb-4">Student Project Contest</h1>
        <p className="text-stone-700 text-[0.95em] font-medium">
          The project won first place at the 2023 University of Tartu Student Project Contest. Find out more about the competition{" "}
          <a className="underline text-emerald-500" href="https://cs.ut.ee/en/content/student-project-contest" target="_blank">
            here
          </a>
          .
        </p>
      </div>
      <section className=" bg-stone-100 w-full py-24">
        <div className="text-stone-700 w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto 2xl:w-[37%]">
          <h1 className="font-bold text-[1.3em] mb-12 ">How Does It Work?</h1>
          <h1 className=" font-bold text-[1.15em] mb-4 mt-8">1. Select Courses</h1>
          <p className="text-stone-700 text-[0.95em] font-medium  mb-8">
            We used web scraping in Python to collect the data for all 2,700 university courses and stored it in a sorted JSON file. When a user enters a course code, we use binary search to retrieve
            the relevant course information and save it in an array that contains the data of all selected courses.
          </p>
          <Image className=" rounded-[10px] overflow-hidden mb-8 " alt="form" src={Image8} />
          <h1 className=" font-bold text-[1.15em] mb-4 mt-32">2. Generate All Possible Timetable Variations</h1>
          <p className="text-stone-700 text-[0.95em] font-medium  mb-8">
            To generate all possible variations of the timetable, we employ a recursive algorithm. Firstly, we sort the selected courses based on the number of available study groups they offer. If a
            course has only one study group, it can only be scheduled in a single slot on the timetable. Next, we iterate through the sorted array, adding each course along with its corresponding
            study groups to the timetable. In case of conflicting lecture timings, we ensure that only one lecture is included. The algorithm concludes by returning an array that encompasses all the
            distinct possible timetables.
          </p>
          <Image className=" rounded-[10px] overflow-hidden mb-6" alt="timetable image" src={Image6} />
          {/* <Image className=" rounded-[10px] overflow-hidden mb-6" width={2000} height={2000} alt="timetable image" src={"/timetableGenerator/7.jpg"} /> */}
          <h1 className=" font-bold text-[1.15em] mb-4 mt-20">Check Out The Project</h1>
          <p className="text-stone-700 text-[0.95em] font-medium  mb-8">
            If you are interested in exploring the project firsthand, you can visit the website{" "}
            <a className="underline text-emerald-500" href="https://cs.ut.ee/en/content/student-project-contest" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default timetableGenerator
