"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"

const Housing = () => {
  return (
    <div className="projects">
      <Link href="/housing-price-analysis">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#FF50D8" />
          <rect x="38" y="36" width="862" height="564" fill="#FF7AE2" />
          <rect x="83" y="75" width="817" height="525" fill="#FFA0EA" />
          <path d="M129 110H900V600H129V110Z" fill="#FFB9F0" />
          <rect x="190" y="150" width="710" height="450" fill="#FFCDF4" />
          <rect x="250" y="187" width="650" height="413" fill="#FFDFF8" />
          <path d="M306 225H900V600H306V225Z" fill="#FFF4FD" />
          <rect x="358" y="263" width="542" height="337" fill="white" />
          <rect x="414" y="300" width="486" height="300" fill="#FFF4FD" />
          <rect x="469" y="337" width="431" height="263" fill="#FFDFF8" />
          <rect x="527" y="375" width="373" height="225" fill="#FFCDF4" />
          <path d="M587 413H900V600H587V413Z" fill="#FFB9F0" />
          <rect x="651" y="450" width="249" height="150" fill="#FFA0EA" />
          <rect x="713" y="487" width="187" height="113" fill="#FF7AE2" />
          <rect x="771" y="525" width="129" height="75" fill="#FF50D8" />
        </svg>
      </Link>
      <h2 className="mt-2 2xl:text-[1.1em]">
        <Link href="/housing-price-analysis">Housing price analysis and prediction</Link>
      </h2>

      <p className="projectYear">2023</p>
    </div>
  )
}

export default Housing
