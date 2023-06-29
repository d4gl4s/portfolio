import Link from "next/link"

export default function Page404() {
  return (
    <main className="w-[95%] max-w-[400px] xl:max-w-[300px] 2xl:max-w-[600px] h-[60svh] mt-[25svh] max-h-[600px] m-auto flex flex-col items-center justify-between">
      <svg className="w-[40%] min-w-[150px] mx-auto" viewBox="0 0 205 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.59091 78.6818V71.7273L36.2727 23.1818H41.3182V33.9545H37.9091L14.7273 70.6364V71.1818H56.0455V78.6818H5.59091ZM38.4545 93V76.5682V73.3295V23.1818H46.5V93H38.4545ZM148.185 78.6818V71.7273L178.866 23.1818H183.912V33.9545H180.503L157.321 70.6364V71.1818H198.639V78.6818H148.185ZM181.048 93V76.5682V73.3295V23.1818H189.094V93H181.048Z"
          fill="black"
        />
        <path
          d="M103 15L109.553 27.1698L120.49 18.7175L121.526 32.5006L134.955 29.2274L130.296 42.2405L143.895 44.7123L134.346 54.7054L145.764 62.4947L132.976 67.7399L140.239 79.5L126.423 79.0903L128.275 92.7877L115.82 86.794L111.94 100.06L103 89.519L94.0598 100.06L90.1801 86.794L77.7252 92.7877L79.5768 79.0903L65.7609 79.5L73.0237 67.7399L60.2356 62.4947L71.6537 54.7054L62.1046 44.7123L75.7037 42.2405L71.0448 29.2274L84.4736 32.5006L85.5103 18.7175L96.4468 27.1698L103 15Z"
          fill="#F87878"
        />
      </svg>

      <div className="flex flex-col items-center">
        <p className="text-[1.4em] 2xl:text-[2em] font-medium mb-4 2xl:mb-8">Page was not found!</p>
        <p className="font-bold m-auto text-[1.1em] 2xl:text-[1.5em] link404">
          <Link href="./">Back to home</Link>
        </p>
      </div>
    </main>
  )
}
