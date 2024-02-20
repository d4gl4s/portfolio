"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"

const Housing = () => {
  return (
    <div className="projects">
      <Link href="/housing-price-analysis">
        <svg viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#F369FF" />
          <rect x="301" y="365" width="571" height="235" fill="#D9D9D9" />
          <path d="M23 23L900 26.5V600H36.0248L23 23Z" fill="#FF7AE2" />
          <path d="M50 52H900V600H71.6102L50 52Z" fill="#FFA0EA" />
          <path d="M85 93.7974L900 78V600H106.523L85 93.7974Z" fill="#FFB9F0" />
          <path d="M114 122.353L900 110V600H134.265L114 122.353Z" fill="#FFCDF4" />
          <path d="M152 162.213L900 143V600H179.07L152 162.213Z" fill="#FFDFF8" />
          <path d="M193 199.661L900 177V600H217.281L193 199.661Z" fill="#FFECFB" />
          <path d="M235 229.557L900 211V600H248.601L235 229.557Z" fill="#FFF4FD" />
          <path d="M268 283.733L900 246V600H285.934L268 283.733Z" fill="white" />
          <path d="M309 306.67L900 284V600H324.856L309 306.67Z" fill="#FFF4FD" />
          <path d="M349 340.125L900 325V600H369.942L349 340.125Z" fill="#FFECFB" />
          <path d="M395 371H900V600H427.698L395 371Z" fill="#FFDFF8" />
          <path d="M437 414.613L900 405V600H464.751L437 414.613Z" fill="#FFC3F2" />
          <path d="M478 451.617L900 442V600H512.494L478 451.617Z" fill="#FFA0EA" />
          <path d="M529 482H900V600H554.228L529 482Z" fill="#FF7AE2" />
          <path d="M581 509L900 533.632V600H610.273L581 509Z" fill="#FF50D8" />
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
