import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Home Run Dashboard",
  description: "Dashboard application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen bg-background ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
