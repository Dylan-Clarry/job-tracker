import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen text-xl flex-col items-center justify-between p-24">
      <h1>Job Tracker</h1>
    </main>
  )
}
