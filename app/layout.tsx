import "./globals.css"
import { Poppins, DM_Sans } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/react"

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
      <body suppressHydrationWarning={true} className={`${GeistSans.variable} ${poppins.variable} ${dm_sans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
