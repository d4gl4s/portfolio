import "./globals.css"
import { Poppins, Inter, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { url } from "inspector"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: {
    default: "Daglas Aitsen",
  },
  description: "A simple personal website",
  metadataBase: new URL("https://daglasaitsen.com"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${poppins.variable} ${dm_sans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
